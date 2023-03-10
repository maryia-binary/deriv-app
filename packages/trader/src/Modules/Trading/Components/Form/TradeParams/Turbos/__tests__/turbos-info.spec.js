import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TurbosInfo from '../turbos-info';

jest.mock('Stores/connect.js', () => ({
    __esModule: true,
    default: 'mockedDefaultExport',
    connect: () => Component => Component,
}));

describe('<TurbosInfo/>', () => {
    const mock_props = {
        className: 'trade-container__turbos-trade-info',
        currency: 'USD',
        max_stake: 0,
        min_stake: 100,
    };
    it('should be rendered correctly with both Min. stake and Max. stake', () => {
        render(<TurbosInfo {...mock_props} />);

        [screen.getByText('Min. stake'), screen.getByText('Max. stake')].forEach(stake_text => {
            expect(stake_text).toBeInTheDocument();
        });
    });
});
