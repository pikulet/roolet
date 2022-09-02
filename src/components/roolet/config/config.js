import React from 'react'

import { Button } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'

import GlobalInput from './global'

import BetHeader from './betheader'
import BetInput from './bet'

import './config.css'

class Configuration extends React.Component {
  render() {
    const { defaultState, onGlobalChange, onBetChange, onSimulate } = this.props

    return (
      <Container>
        <GlobalInput
          label="no. rounds"
          type="num_rounds"
          defaultValue={defaultState.num_rounds}
          onChange={onGlobalChange}></GlobalInput>
        <GlobalInput
          label="total no. squares"
          type="num_events"
          defaultValue={defaultState.num_events}
          onChange={onGlobalChange}></GlobalInput>
        <BetHeader labels={['coverage', 'payout', 'bet amt']}></BetHeader>
        <BetInput
          defaultBet={defaultState.bet}
          onBetChange={onBetChange}></BetInput>
        <Button className="simulateButton" onClick={onSimulate} variant="info">
          Simulate
        </Button>
      </Container>
    )
  }
}

export default Configuration
