import React from 'react'

import generateBarChart from './barchart'

class Graphs extends React.Component {
    chartRef = React.createRef()

    render() {
        const { state } = this.props

        generateBarChart(this.chartRef, state)
        return <svg ref={this.chartRef}></svg>
    }
}

export default Graphs
