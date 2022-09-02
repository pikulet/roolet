import React from 'react'

import getStatistics from './calculate'
import GlobalStatistic from './global'
import MultiplierStatistic from './multipliers'

class Summary extends React.Component {
  render() {
    const { bet, data } = this.props
    const statistics = getStatistics(bet, data)
    return (
      <div>
        <GlobalStatistic
          message="total bet"
          value={statistics.total_bet}></GlobalStatistic>

        <GlobalStatistic
          message="expected winnings"
          value={statistics.expected_winnings}></GlobalStatistic>

        <MultiplierStatistic
          message="lose more than"
          type="half"
          percentage={statistics.half_chance}></MultiplierStatistic>

        <MultiplierStatistic
          message="multiply winnings by"
          type="2x"
          percentage={statistics.double_chance}></MultiplierStatistic>

        <MultiplierStatistic
          message="multiply winnings by"
          type="3x"
          percentage={statistics.double_chance}></MultiplierStatistic>
      </div>
    )
  }
}

export default Summary
