import React from 'react';
import { Localize, localize } from '@deriv/translations';
import BottomNav from 'AppV2/Components/BottomNav';
import PurchaseButton from 'AppV2/Components/PurchaseButton';
import TradeParameters from 'AppV2/Components/TradeParameters';

const HEIGHT = {
    ADVANCED_FOOTER: 136,
    BOTTOM_NAV: 56,
    HEADER: 48,
    PADDING: 24,
};

const Trade = () => {
    const chart_ref = React.useRef<HTMLDivElement>(null);

    const mock_trade_params = [
        { label: <Localize i18n_default_text='Duration' />, value: localize('1 minute') },
        { label: <Localize i18n_default_text='Stake' />, value: '10.00 USD' },
        { label: <Localize i18n_default_text='Allow equals' />, value: '-' },
    ];

    React.useEffect(() => {
        if (chart_ref.current) {
            const calculated_height =
                window.innerHeight - HEIGHT.HEADER - HEIGHT.BOTTOM_NAV - HEIGHT.ADVANCED_FOOTER - HEIGHT.PADDING;
            chart_ref.current.style.setProperty('height', `${calculated_height}px`);
        }
    }, []);

    return (
        <BottomNav>
            {/* TODO: temporary, until Contract type selection component will be merged */}
            <section className='section__contract-type'>Contract type selection</section>
            {/* TODO: temporary, until Asset selection component will be merged */}
            <section className='section__asset-type'>Asset selection</section>
            <div className='section__wrapper'>
                <TradeParameters trade_parameters_list={mock_trade_params} />
                <section className='section__chart' ref={chart_ref}>
                    Awesome Chart Placeholder
                </section>
            </div>
            <TradeParameters trade_parameters_list={mock_trade_params} is_minimized />
            <PurchaseButton />
        </BottomNav>
    );
};

export default Trade;
