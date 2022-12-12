import { filterByContractType } from 'App/Components/Elements/PositionsDrawer/helpers/positions-helper.js';
import PropTypes from 'prop-types';
import React from 'react';
import AccumulatorsProfitLossTooltip from './accumulators-profit-loss-tooltip.jsx';
import CurrentSpotHighlighter from './current-spot-highlighter.jsx';

const AccumulatorsChartElements = ({
    all_positions,
    current_symbol_spot,
    current_symbol_spot_time,
    is_stats_highlighted,
    last_contract_info,
    symbol,
}) => {
    const accumulators_positions = all_positions.filter(
        p =>
            p.contract_info &&
            symbol === p.contract_info.underlying &&
            filterByContractType(p.contract_info, 'accumulator')
    );
    const should_highlight_tick_without_contract = current_symbol_spot_time && is_stats_highlighted;
    const should_highlight_contract_tick =
        last_contract_info?.status === 'lost' && current_symbol_spot_time === last_contract_info?.exit_tick_time;
    const should_highlight_tick = should_highlight_tick_without_contract || should_highlight_contract_tick;
    const current_spot = should_highlight_contract_tick ? last_contract_info?.exit_tick : current_symbol_spot;
    const current_spot_time = should_highlight_contract_tick
        ? last_contract_info?.exit_tick_time
        : current_symbol_spot_time;

    return (
        <>
            {accumulators_positions.length &&
                accumulators_positions.map(({ contract_info }) => (
                    <AccumulatorsProfitLossTooltip key={contract_info.contract_id} {...contract_info} />
                ))}
            {should_highlight_tick && (
                <CurrentSpotHighlighter current_spot={current_spot} current_spot_time={current_spot_time} />
            )}
        </>
    );
};

AccumulatorsChartElements.propTypes = {
    all_positions: PropTypes.array,
    current_symbol_spot: PropTypes.number,
    current_symbol_spot_time: PropTypes.number,
    is_stats_highlighted: PropTypes.bool,
    last_contract_info: PropTypes.object,
    symbol: PropTypes.string,
};

export default React.memo(AccumulatorsChartElements);
