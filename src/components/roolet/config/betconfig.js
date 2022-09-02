import React from 'react'

import { Button, Form } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'

import GlobalInput from './global'

import BetHeader from './betheader'
import BetInput from './bet'

class Configuration extends React.Component {
  render() {
    const { defaultState, state, onGlobalChange, onBetChange, onSimulate } =
      this.props

    return (
      <div>
        <Form>
          <div>
            <Container>
              <GlobalInput
                type="num_rounds"
                defaultValue={defaultState.num_rounds}
                onChange={onGlobalChange}
              ></GlobalInput>

              <GlobalInput
                type="num_events"
                defaultValue={defaultState.num_events}
                onChange={onGlobalChange}
              ></GlobalInput>

              <BetHeader></BetHeader>
              {[...Array(state.bets.length)].map((e, i) => {
                return (
                  <BetInput
                    defaultBet={defaultState.bets[0]}
                    onBetChange={onBetChange(i)}
                    key={i}
                  ></BetInput>
                )
              })}
            </Container>
          </div>
          <Button onClick={onSimulate} variant="info">
            Simulate
          </Button>
        </Form>
      </div>
    )
  }
}

export default Configuration
