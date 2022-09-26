import PropTypes from 'prop-types';
import React from 'react';
import { DesktopWrapper, Icon, MobileDialog, MobileWrapper, Modal, Text } from '@deriv/components';
import { localize } from '@deriv/translations';
import { getUrlBase } from '@deriv/shared';
import 'Sass/app/modules/contract/accumulators-stats.scss';

const ModalContent = () => {
    return (
        <Modal.Body className='accumulators-stats-modal-body'>
            <div className='accumulators-stats-modal-body__image'>
                <img src={getUrlBase('/public/images/common/accumulators_stats.png')} alt='accumulators_stats' />
                <img src={getUrlBase('/public/images/common/accumulators_chart.png')} alt='accumulators_chart' />
            </div>
            <Text as='p' size='s' color='prominent' className='accumulators-stats-modal-body__text'>
                {localize(
                    'The numbers show the history (last 100 results from the current spot) of tick counts that stayed inside the barrier of your selected market and accumulator.'
                )}{' '}
                {localize(
                    'For example, a tick count of 5 means that the price “stayed inside” for 5 ticks before breaking outside the barrier for Volatility 100 index with a 3% accumulator.'
                )}
            </Text>
        </Modal.Body>
    );
};

const AccumulatorsStatsManualModal = ({ title, icon_classname, is_manual_open, toggleManual }) => {
    return (
        <React.Fragment>
            <Icon icon='IcInfoOutline' onClick={toggleManual} size={16} className={icon_classname} />
            <DesktopWrapper>
                <Modal
                    id='dt_accumulators_stats_manual_modal'
                    is_open={is_manual_open}
                    should_header_stick_body={false}
                    title={title}
                    toggleModal={toggleManual}
                    height='712px'
                    width='755px'
                >
                    <ModalContent />
                </Modal>
            </DesktopWrapper>
            <MobileWrapper>
                <MobileDialog
                    onClose={toggleManual}
                    portal_element_id='modal_root'
                    title={title}
                    visible={is_manual_open}
                    wrapper_classname='account-signup-mobile-dialog'
                >
                    <ModalContent />
                </MobileDialog>
            </MobileWrapper>
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
