import React from 'react'

import chartXkcd from 'chart.xkcd'
import { Line, Bar } from 'chart.xkcd-react'

import ChartConfig from './config/chartconfig'
import ChartType from './const/types'
import ChartFunction from './const/functions'

import './chart.css'

export const CHART_MAX_XLABEL = 15

class Chart extends React.Component {
  constructor(props) {
    super(props)

    this.onConfigChange = this.onConfigChange.bind(this)
  }

  state = {
    type: ChartType.line,
    function: ChartFunction.pmf
  }

  chartTypeMapping = {
    line: Line,
    bar: Bar
  }

  onConfigChange(field) {
    return (e) => {
      this.setState({
        [field]: e.target.value
      })
    }
  }

  render() {
    const { title, xLabel, yLabel, data } = this.props
    const ActualType = this.chartTypeMapping[this.state.type]

    return (
      <div>
        <ChartConfig onChange={this.onConfigChange}></ChartConfig>
        <div className="actualChart">
          <ActualType
            config={{
              title: title,
              xLabel: xLabel,
              yLabel: yLabel,
              data: data[this.state.function],
              options: {
                yTickCount: 4,
                legendPosition: chartXkcd.config.positionType.upLeft
              }
            }}
          />
        </div>
      </div>
    )
  }
}

export default Chart
