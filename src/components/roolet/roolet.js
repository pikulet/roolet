import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Configuration from './configuration/betconfig'
import Graphs from './graphs/graphs'
import Summary from './summary/summary'

import update from 'react-addons-update'

import generateHistograms from './histogram'

class Roolet extends React.Component {
    constructor(props) {
        super(props)

        this.onGlobalChange = this.onGlobalChange.bind(this)
        this.onBetChangeGenerator = this.onBetChangeGenerator.bind(this)
        this.updateHistogram = this.updateHistogram.bind(this)
    }

    default_num_rounds = 10
    default_num_events = 38

    empty_bet = {
        num_events: 12,
        payout: 2,
        amt: 20
    }

    state = {
        num_rounds: this.default_num_rounds,
        num_events: this.default_num_events,
        bets: [this.empty_bet],
        histogram: []
    }

    default_state = this.state

    onGlobalChange(field) {
        return (e) => {
            this.setState({
                [field]: e.target.value
            })
        }
    }

    onBetChangeGenerator(index) {
        return (field) => {
            return (e) => {
                this.setState({
                    bets: update(this.state.bets, {
                        [index]: {
                            [field]: {
                                $set: e.target.value
                            }
                        }
                    })
                })
            }
        }
    }

    updateHistogram() {
        this.setState({
            histogram: generateHistograms(
                this.state.num_rounds,
                this.state.num_events,
                this.state.bets
            )
        })
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col xs={12} lg={3}>
                        <Configuration
                            defaultState={this.default_state}
                            state={this.state}
                            onGlobalChange={this.onGlobalChange}
                            onBetChange={this.onBetChangeGenerator}
                            onSimulate={this.updateHistogram}></Configuration>
                    </Col>
                    <Col xs={12} lg={7}>
                        <Graphs state={this.state.histogram}></Graphs>
                    </Col>
                    <Col xs={12} lg={2}>
                        <Summary></Summary>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Roolet
