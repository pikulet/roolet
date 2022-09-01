import React from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Field from './betfield'

class BetInput extends React.Component {
    render() {
        const { defaultBet, onBetChange } = this.props

        return (
            <div className="config-bet">
                <Row>
                    <Col md={4}>
                        <Field
                            type="num_events"
                            defaultValue={defaultBet.num_events}
                            onBetChange={onBetChange}></Field>
                    </Col>

                    <Col md={4}>
                        <Field
                            type="payout"
                            defaultValue={defaultBet.payout}
                            onBetChange={onBetChange}></Field>
                    </Col>

                    <Col md={4}>
                        <Field
                            type="amt"
                            defaultValue={defaultBet.amt}
                            onBetChange={onBetChange}></Field>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default BetInput
