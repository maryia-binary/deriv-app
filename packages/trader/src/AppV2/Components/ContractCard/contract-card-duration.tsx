import React from 'react';
import { TPortfolioPosition } from '@deriv/stores/types';
import { Localize } from '@deriv/translations';
import { CaptionText } from '@deriv-com/quill-ui';
import { LabelPairedStopwatchCaptionRegularIcon } from '@deriv/quill-icons';

export type TContractCardDurationProps = Pick<
    TPortfolioPosition['contract_info'],
    'expiry_time' | 'purchase_time' | 'tick_count'
> & {
    currentTick: number | null;
    isMultiplier?: boolean;
    serverTime?: moment.Moment;
};

export const ContractCardDuration = ({
    currentTick,
    expiry_time,
    isMultiplier,
    purchase_time,
    serverTime,
    tick_count,
}: TContractCardDurationProps) => {
    return (
        // TODO: when Tag is exported from quill-ui, use <Tag
        //     className='contract-card-duration'
        //     icon={<LabelPairedStopwatchCaptionRegularIcon />}
        //     label={isMultiplier ? <Localize i18n_default_text='Ongoing' /> : 'Duration'}
        // />
        <div className='contract-card-duration'>
            <LabelPairedStopwatchCaptionRegularIcon />
            <CaptionText className='duration'>
                {/* in progress */}
                {isMultiplier ? <Localize i18n_default_text='Ongoing' /> : 'Duration'}
            </CaptionText>
        </div>
    );
};
