import React from 'react';
import CarouselHeader from './carousel-header';
import clsx from 'clsx';

type TCarousel = {
    classname?: string;
    header: typeof CarouselHeader;
    pages: { id: number; component: JSX.Element }[];
    title?: React.ReactNode;
};

const Carousel = ({ classname, header, pages, title }: TCarousel) => {
    const [current_index, setCurrentIndex] = React.useState(0);

    const HeaderComponent = header;

    const onNextClick = () => setCurrentIndex((current_index + 1) % pages.length);
    const onPrevClick = () => setCurrentIndex((current_index - 1 + pages.length) % pages.length);

    return (
        <React.Fragment>
            <HeaderComponent
                current_index={current_index}
                onNextClick={onNextClick}
                onPrevClick={onPrevClick}
                title={title}
            />
            <ul className={clsx('carousel', classname)}>
                {pages.map(({ component, id }) => (
                    <li
                        className='carousel__item'
                        style={{ transform: `translateX(-${current_index * 100}%)` }}
                        key={id}
                    >
                        {component}
                    </li>
                ))}
            </ul>
        </React.Fragment>
    );
};

export default Carousel;
