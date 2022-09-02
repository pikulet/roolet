import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import update from 'react-addons-update'

import Configuration from './config/config'
import Chart from './chart/chart'

import generateHistogram from './histogram/histogram'
import toPmf from './histogram/transform/pmf'
import toReverseCmf from './histogram/transform/reversecmf'
import Summary from './summary/summary'

class Roolet extends React.Component {
  constructor(props) {
    super(props)

    this.onGlobalChange = this.onGlobalChange.bind(this)
    this.onBetChange = this.onBetChange.bind(this)
    this.generateAndSetData = this.generateAndSetData.bind(this)
  }

  default_num_rounds = 10
  default_num_events = 38

  empty_bet = {
    num_events: 12,
    payout: 2,
    amt: 20
  }

  default_state = {
    num_rounds: this.default_num_rounds,
    num_events: this.default_num_events,
    bet: this.empty_bet
  }

  state = {
    num_rounds: this.default_state.num_rounds,
    num_events: this.default_state.num_events,
    bet: this.default_state.bet,
    generatedData: this.generateData(this.default_state)
  }

  onGlobalChange(field) {
    return (e) => {
      this.setState({
        [field]: e.target.value
      })
    }
  }

  onBetChange(field) {
    return (e) => {
      this.setState({
        bet: update(this.state.bet, {
          [field]: {
            $set: e.target.value
          }
        })
      })
    }
  }

  generateData(s) {
    const histogram = generateHistogram(s.num_rounds, s.num_events, s.bet)

    const pmfData = toPmf(histogram)
    const reverseCmfData = toReverseCmf(histogram)

    return {
      pmf: pmfData,
      reverseCmf: reverseCmfData
    }
  }

  generateAndSetData() {
    this.setState({
      generatedData: this.generateData(this.state)
    })
  }

  render() {
    return (
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} lg={3}>
            <Configuration
              defaultState={this.default_state}
              onGlobalChange={this.onGlobalChange}
              onBetChange={this.onBetChange}
              onSimulate={this.generateAndSetData}></Configuration>
          </Col>
          <Col xs={12} lg={7}>
            <Chart
              title="winnings distribution"
              xlabel="winnings"
              ylabel="%"
              data={this.state.generatedData}></Chart>
          </Col>
          <Col xs={12} lg={2}>
            <Summary
              bet={this.state.bet}
              data={this.state.generatedData}></Summary>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Roolet
