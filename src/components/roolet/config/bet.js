import React from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import BetField from './betfield'

class BetInput extends React.Component {
  render() {
    const { defaultBet, onBetChange } = this.props

    return (
      <div className="config-bet">
        <Row>
          <Col md={4}>
            <BetField
              type="num_events"
              defaultValue={defaultBet.num_events}
              onBetChange={onBetChange}
            ></BetField>
          </Col>

          <Col md={4}>
            <BetField
              type="payout"
              defaultValue={defaultBet.payout}
              onBetChange={onBetChange}
            ></BetField>
          </Col>

          <Col md={4}>
            <BetField
              type="amt"
              defaultValue={defaultBet.amt}
              onBetChange={onBetChange}
            ></BetField>
          </Col>
        </Row>
      </div>
    )
  }
}

export default BetInput
