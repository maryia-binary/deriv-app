import React from 'react';
import { Button, Text, TextField } from '@deriv-com/quill-ui';
import { LabelPairedPresentationScreenSmRegularIcon } from '@deriv/quill-icons';
import { Localize, localize } from '@deriv/translations';
import BottomNav from 'AppV2/Components/BottomNav';

const Trade = () => {
    const mock_trade_params = [
        { label: <Localize i18n_default_text='Duration' />, value: localize('1 minute') },
        { label: <Localize i18n_default_text='Stake' />, value: '10.00 USD' },
        { label: <Localize i18n_default_text='Allow equals' />, value: '-' },
    ];

    return (
        <BottomNav>
            {/* TODO: temporary, until Contract type selection component will be merged */}
            <section className='section__contract-type'>Contract type selection</section>
            {/* TODO: temporary, until Asset selection component will be merged */}
            <section className='section__asset-type'>Asset selection</section>
            <div className='section__wrapper'>
                <section className='section__trade-params'>
                    <div className='section__trade-params__title'>
                        <Text>Set your trade</Text>
                        {/* TODO: temporary, until Guide component will be merged */}
                        <Button
                            color='black'
                            icon={<LabelPairedPresentationScreenSmRegularIcon />}
                            label={<Localize i18n_default_text='Guide' />}
                            variant='secondary'
                        />
                    </div>
                    <div className='section__trade-params__options__wrapper'>
                        {mock_trade_params.map(({ label, value }) => (
                            <TextField
                                variant='fill'
                                readOnly
                                label={label}
                                value={value}
                                key={value}
                                className='section__trade-params__option'
                            />
                        ))}
                    </div>
                </section>
                <section className='section__chart'>Awesome Chart Placeholder</section>
            </div>
            <section className='section__trade-params__options__wrapper section__trade-params__options__wrapper--minimized'>
                {mock_trade_params.map(({ label, value }) => (
                    <TextField
                        variant='fill'
                        readOnly
                        label={label}
                        value={value}
                        key={value}
                        className='section__trade-params__option section__trade-params__option--minimized'
                    />
                ))}
            </section>
            <section className='section__purchase-button__wrapper'>
                <Button
                    color='purchase'
                    size='lg'
                    label={<Localize i18n_default_text='Rise' />}
                    fullWidth
                    className='section__purchase-button'
                >
                    <p className='section__purchase-button__payout'>
                        <span>{localize('Payout')}</span>
                        <span>19.55 USD</span>
                    </p>
                </Button>
                <Button
                    color='sell'
                    size='lg'
                    label={<Localize i18n_default_text='Fall' />}
                    fullWidth
                    className='section__purchase-button'
                >
                    <p className='section__purchase-button__payout'>
                        <span>19.55 USD</span>
                        <span>{localize('Payout')}</span>
                    </p>
                </Button>
            </section>
        </BottomNav>
    );
};

export default Trade;
