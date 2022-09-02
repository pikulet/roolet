import React from 'react'

import getStatistics from './calculate'
import GlobalStatistic from './global'
import MultiplierStatistic from './multipliers'

import './summary.css'

class Summary extends React.Component {
  render() {
    const { state } = this.props
    const statistics = getStatistics(
      state.num_rounds,
      state.num_events,
      state.bet,
      state.generatedData
    )

    return (
      <div className="summary">
        <GlobalStatistic
          message="total bet"
          value={statistics.total_bet}></GlobalStatistic>

        <GlobalStatistic
          message="expected winnings"
          value={statistics.expected_winnings}></GlobalStatistic>

        <hr />

        <MultiplierStatistic
          message="lose more than"
          type="half"
          percentage={statistics.half_chance}></MultiplierStatistic>

        <MultiplierStatistic
          message="multiply winnings by"
          type="1.2x"
          percentage={statistics.double_chance}></MultiplierStatistic>

        <MultiplierStatistic
          message="multiply winnings by"
          type="1.5x"
          percentage={statistics.triple_chance}></MultiplierStatistic>
      </div>
    )
  }
}

export default Summary
