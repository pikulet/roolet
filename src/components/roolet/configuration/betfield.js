import React from 'react'
import { Form } from 'react-bootstrap'

class Field extends React.Component {
    render() {
        const { type, defaultValue, onBetChange } = this.props
        return (
            <Form.Group className="betField">
                <Form.Control
                    type="input"
                    placeholder={defaultValue}
                    onChange={onBetChange(type)}
                />
            </Form.Group>
        )
    }
}

export default Field
