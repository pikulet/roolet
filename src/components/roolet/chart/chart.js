import React from 'react'

import chartXkcd from 'chart.xkcd'
import { Line, Bar } from 'chart.xkcd-react'

import toData from './transform/pmf'
import toReverseCmf from './transform/reversecmf'
import toWeighted from './transform/weighted'

const ChartType = {
    line: 'line',
    bar: 'bar'
}

const ChartFunction = {
    pmf: 'pmf',
    reverseCmf: 'reverse-cmf'
}

class Chart extends React.Component {
    constructor(props) {
        super(props)

        this.getData = this.getData.bind(this)
    }

    state = {
        chartType: ChartType.line,
        chartFunction: ChartFunction.pmf,
        combined: false,

        state: this.props.state
    }

    chartTypeMapping = {
        line: Line,
        bar: Bar
    }

    getData() {
        var data = toData(this.state)

        if (this.state.combined) {
            data = toWeighted(data, this.state.bets)
        }

        if (this.chartFunction === ChartFunction.reverseCmf) {
            data = toReverseCmf(data)
        }
        return data
    }

    render() {
        const { title, xLabel, yLabel } = this.props
        const ActualType = this.chartTypeMapping[this.state.chartType]
        console.log(this.state.chartType, ActualType)

        return (
            <ActualType
                config={{
                    title: title,
                    xLabel: xLabel,
                    yLabel: yLabel,
                    data: this.getData(),
                    options: {
                        yTickCount: 3,
                        legendPosition: chartXkcd.config.positionType.upLeft
                    }
                }}
            />
        )
    }
}

export default Chart
