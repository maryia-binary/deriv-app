import PropTypes from 'prop-types';
import React from 'react';
import { Icon, Modal, Text } from '@deriv/components';
import { localize } from '@deriv/translations';
import { getUrlBase, isMobile } from '@deriv/shared';
import 'Sass/app/modules/contract/accumulators-stats.scss';

const AccumulatorsStatsManualModal = ({ title, icon_classname, is_manual_open, toggleManual }) => {
    const is_mobile = isMobile();
    const image_src = React.useMemo(() => {
        // memoize image source and open the modal only after we get it to avoid showing empty modal
        return getUrlBase(`/public/images/common/accumulators_stats_manual_${is_mobile ? 'mobile' : 'desktop'}.svg`);
    }, [is_mobile]);
    return (
        <React.Fragment>
            <Icon icon='IcInfoOutline' onClick={toggleManual} size={16} className={icon_classname} />
            <Modal
                id='dt_accumulators_stats_manual_modal'
                is_open={is_manual_open && !!image_src}
                should_header_stick_body={false}
                title={title}
                toggleModal={toggleManual}
                height={is_mobile ? '605px' : '712px'}
                width={is_mobile ? '328px' : '755px'}
                className='accumulators-stats-manual-modal'
            >
                <Modal.Body className='accumulators-stats-modal-body'>
                    <img
                        src={image_src}
                        alt='accumulators_stats_manual'
                        className='accumulators-stats-modal-body__image'
                    />
                    <Text
                        as='p'
                        size={is_mobile ? 'xs' : 's'}
                        color='prominent'
                        className='accumulators-stats-modal-body__text'
                    >
                        {localize(
                            'The numbers show the history (last 100 results from the current spot) of tick counts that stayed inside the barrier of your selected market and accumulator.'
                        )}{' '}
                        {localize(
                            'For example, a tick count of 5 means that the price “stayed inside” for 5 ticks before breaking outside the barrier for Volatility 100 index with a 3% accumulator.'
                        )}
                    </Text>
                </Modal.Body>
            </Modal>
        </React.Fragment>
    );
};

AccumulatorsStatsManualModal.propTypes = {
    title: PropTypes.string,
    icon_classname: PropTypes.string,
    is_manual_open: PropTypes.bool,
    toggleManual: PropTypes.func,
};

export { AccumulatorsStatsManualModal };
