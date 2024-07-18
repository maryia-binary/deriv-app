import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Carousel from '../carousel';

const PAGES = {
    FIRST: 'first page',
    SECOND: 'second page',
};
const data_test_id = 'dt_page';
const mock_pages = [
    {
        id: PAGES.FIRST,
        component: (onNextClick: () => void) => (
            <button onClick={onNextClick} data-testid={data_test_id}>
                <span>{PAGES.FIRST}</span>
                <span>Next</span>
            </button>
        ),
    },
    {
        id: PAGES.SECOND,
        component: (onPrevClick: () => void) => (
            <button onClick={onPrevClick} data-testid={data_test_id}>
                <span>{PAGES.SECOND}</span>
                <span>Previous</span>
            </button>
        ),
    },
];

describe('Carousel', () => {
    it('should render all passed pages', () => {
        render(<Carousel pages={mock_pages} />);

        expect(screen.getByText(PAGES.FIRST)).toBeInTheDocument();
        expect(screen.getByText(PAGES.SECOND)).toBeInTheDocument();
        expect(screen.getAllByTestId(data_test_id)).toHaveLength(mock_pages.length);
    });

    it('should set index to 1 if user clicks on "Next"', () => {
        const mockSetCurrentIndex = jest.fn();
        jest.spyOn(React, 'useState').mockImplementationOnce(() => [0, mockSetCurrentIndex]);
        render(<Carousel pages={mock_pages} />);

        userEvent.click(screen.getByText('Next'));
        expect(mockSetCurrentIndex).toBeCalledWith(1);
    });

    it('should set index to 0 if user clicks on "Previous"', () => {
        const mockSetCurrentIndex = jest.fn();
        jest.spyOn(React, 'useState').mockImplementationOnce(() => [1, mockSetCurrentIndex]);
        render(<Carousel pages={mock_pages} />);

        userEvent.click(screen.getByText('Previous'));

        expect(mockSetCurrentIndex).toBeCalledWith(0);
    });

    it('should set index to 0 if should_reset_carousel is true', () => {
        const mockSetCurrentIndex = jest.fn();
        jest.spyOn(React, 'useState').mockImplementationOnce(() => [1, mockSetCurrentIndex]);
        render(<Carousel pages={mock_pages} should_reset_carousel />);

        expect(mockSetCurrentIndex).toBeCalledWith(0);
    });
});
