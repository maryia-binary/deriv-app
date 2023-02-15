import { PropTypes as MobxPropTypes } from 'mobx-react';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Amount from 'Modules/Trading/Components/Form/TradeParams/amount.jsx';
import Barrier from 'Modules/Trading/Components/Form/TradeParams/barrier.jsx';
import BarriersTable from 'Modules/Trading/Components/Form/TradeParams/Turbos/barriers-table.jsx';
import Duration from 'Modules/Trading/Components/Form/TradeParams/Duration';
import LastDigit from 'Modules/Trading/Components/Form/TradeParams/last-digit.jsx';
import CancelDeal from 'Modules/Trading/Components/Form/TradeParams/Multiplier/cancel-deal.jsx';
import StopLoss from 'Modules/Trading/Components/Form/TradeParams/Multiplier/stop-loss.jsx';
import TakeProfit from 'Modules/Trading/Components/Form/TradeParams/Multiplier/take-profit.jsx';
import Expiration from 'Modules/Trading/Components/Form/TradeParams/Multiplier/expiration.jsx';
import { connect } from 'Stores/connect';

const TradeParams = ({ form_components, is_minimized, is_turbos }) => {
    const [is_barriers_table_expanded, setIsBarriersTableExpanded] = useState(false);

    const isVisible = component_key => {
        return form_components.includes(component_key);
    };

    const toggleBarriersTable = () => setIsBarriersTableExpanded(!is_barriers_table_expanded);

    return (
        <React.Fragment>
            {isVisible('duration') && <Duration key={'duration'} is_minimized={is_minimized} />}
            {isVisible('barrier') && (
                <Barrier key={'barrier'} is_minimized={is_minimized} toggleBarriersTable={toggleBarriersTable} />
            )}
            {isVisible('last_digit') && <LastDigit key={'last_digit'} is_minimized={is_minimized} />}
            {isVisible('amount') && <Amount key={'amount'} is_minimized={is_minimized} />}
            {isVisible('take_profit') && <TakeProfit key={'take_profit'} />}
            {isVisible('stop_loss') && <StopLoss key={'stop_loss'} />}
            {isVisible('cancellation') && <CancelDeal key={'cancellation'} />}
            {isVisible('expiration') && <Expiration key={'expiration'} />}
            {isVisible('barrier') && is_turbos && is_barriers_table_expanded && (
                <BarriersTable
                    key={'barriers_table'}
                    toggleBarriersTable={toggleBarriersTable}
                    is_barriers_table_expanded={is_barriers_table_expanded}
                />
            )}
        </React.Fragment>
    );
};
TradeParams.propTypes = {
    form_components: MobxPropTypes.arrayOrObservableArray,
    is_minimized: PropTypes.bool,
    is_turbos: PropTypes.bool,
};

export default connect(({ modules }) => ({
    form_components: modules.trade.form_components,
    is_turbos: modules.trade.is_turbos,
}))(TradeParams);
