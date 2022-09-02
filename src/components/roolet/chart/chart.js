import React from 'react'

import update from 'react-addons-update'

import chartXkcd from 'chart.xkcd'
import { Line, Bar } from 'chart.xkcd-react'

import toData from './transform/pmf'
import toReverseCmf from './transform/reversecmf'
import toWeighted from './transform/weighted'

import ChartConfig from './config/chartconfig'
import ChartType from './const/types'
import ChartFunction from './const/functions'

class Chart extends React.Component {
  constructor(props) {
    super(props)

    this.onConfigChange = this.onConfigChange.bind(this)
  }

  state = {
    config: {
      type: ChartType.line,
      function: ChartFunction.pmf
    },
    state: this.props.state,
    generatedDatasets: this.generateData()
  }

  chartTypeMapping = {
    line: Line,
    bar: Bar
  }

  generateData() {
    const pmf = toData(this.state)
    const pmfWeighted = toWeighted(pmf)
    const reverseCmf = toReverseCmf(pmf)
    const reverseCmfWeighted = toWeighted(reverseCmf)

    return {
      pmf: pmf,
      pmfWeighted: pmfWeighted,
      reverseCmf: reverseCmf,
      reverseCmfWeighted: reverseCmfWeighted
    }
  }

  onConfigChange(field) {
    return (e) => {
      this.setState({
        config: update(this.state.config, {
          [field]: {
            $set: e.target.value
          }
        })
      })
    }
  }

  render() {
    const { title, xLabel, yLabel } = this.props
    const ActualType = this.chartTypeMapping[this.state.config.type]

    return (
      <div>
        <ChartConfig onChange={this.onConfigChange}></ChartConfig>
        <ActualType
          config={{
            title: title,
            xLabel: xLabel,
            yLabel: yLabel,
            data: this.state.generatedDatasets[this.state.config.function],
            options: {
              yTickCount: 3,
              legendPosition: chartXkcd.config.positionType.upLeft
            }
          }}
        />
      </div>
    )
  }
}

export default Chart
