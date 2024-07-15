import React from 'react';
import { TextField } from '@deriv-com/quill-ui';
import { localize } from '@deriv/translations';
import clsx from 'clsx';

type TRiskManagementProps = {
    is_minimized?: boolean;
};

const RiskManagement = ({ is_minimized }: TRiskManagementProps) => {
    return (
        <TextField
            variant='fill'
            readOnly
            label={localize('Risk Management')}
            value={localize('Not set')}
            className={clsx('trade-params__option', is_minimized && 'trade-params__option--minimized')}
        />
    );
};

export default RiskManagement;
