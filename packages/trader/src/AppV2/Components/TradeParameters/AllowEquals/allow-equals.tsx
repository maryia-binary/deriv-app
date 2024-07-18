import React from 'react';
import { observer } from 'mobx-react';
import clsx from 'clsx';
import { ActionSheet, ToggleSwitch, Text, TextField } from '@deriv-com/quill-ui';
import { LabelPairedCircleInfoMdRegularIcon } from '@deriv/quill-icons';
import { Localize, localize } from '@deriv/translations';
import { hasCallPutEqual, hasDurationForCallPutEqual } from 'Stores/Modules/Trading/Helpers/allow-equals';
import { useTraderStore } from 'Stores/useTraderStores';

type TAllowEqualsProps = {
    is_minimized?: boolean;
};

const AllowEquals = observer(({ is_minimized }: TAllowEqualsProps) => {
    const { contract_types_list, contract_start_type, duration_unit, expiry_type, is_equal, onChange } =
        useTraderStore();

    const [is_open, setIsOpen] = React.useState(false);
    const [is_allow_equal_enabled, setIsAllowEqualEnabled] = React.useState(!!is_equal);

    const has_callputequal_duration = hasDurationForCallPutEqual(
        contract_types_list,
        duration_unit,
        contract_start_type
    );
    const has_callputequal = hasCallPutEqual(contract_types_list);
    const has_allow_equals = (has_callputequal_duration || expiry_type === 'endtime') && has_callputequal;

    const onInfoIconClick = () => {
        // console.log('Info Icon clicked!');
    };
    const onSaveButtonClick = () => {
        if (!!is_equal !== is_allow_equal_enabled)
            onChange({ target: { name: 'is_equal', value: Number(is_allow_equal_enabled) } });
    };

    const onActionSheetClose = () => {
        setIsOpen(false);
        setIsAllowEqualEnabled(!!is_equal);
    };

    React.useEffect(() => {
        setIsAllowEqualEnabled(!!is_equal);
    }, [is_equal]);

    if (!has_allow_equals) return null;

    return (
        <React.Fragment>
            <TextField
                variant='fill'
                readOnly
                label={localize('Allow equals')}
                value={is_equal ? localize('Enabled') : '-'}
                className={clsx('trade-params__option', is_minimized && 'trade-params__option--minimized')}
                onClick={() => setIsOpen(true)}
            />
            <ActionSheet.Root isOpen={is_open} onClose={onActionSheetClose} position='left' expandable={false}>
                <ActionSheet.Portal shouldCloseOnDrag>
                    <ActionSheet.Header
                        title={<Localize i18n_default_text='Allow equals' />}
                        icon={<LabelPairedCircleInfoMdRegularIcon onClick={onInfoIconClick} />}
                    />
                    <ActionSheet.Content className='trade-param__wrapper'>
                        <div className='trade-param__content'>
                            <Text>
                                <Localize i18n_default_text='Allow equals' />
                            </Text>
                            <ToggleSwitch
                                checked={is_allow_equal_enabled}
                                onChange={(is_enabled: boolean) => setIsAllowEqualEnabled(is_enabled)}
                            />
                        </div>
                    </ActionSheet.Content>
                    <ActionSheet.Footer
                        alignment='vertical'
                        primaryAction={{
                            content: <Localize i18n_default_text='Save' />,
                            onAction: onSaveButtonClick,
                        }}
                    />
                </ActionSheet.Portal>
            </ActionSheet.Root>
        </React.Fragment>
    );
});

export default AllowEquals;
