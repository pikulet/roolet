import React from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Field from './field'

class BetInput extends React.Component {
    render() {
        return (
            <div className="bet-input">
                <Row>
                    <Col md={4}>
                        <Field
                            type="probability"
                            defaultValue="3"
                            onChangeGenerator={this.props.onChangeGenerator}
                        ></Field>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default BetInput
