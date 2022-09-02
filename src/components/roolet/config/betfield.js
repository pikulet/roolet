import React from 'react'
import { Form } from 'react-bootstrap'

class BetField extends React.Component {
  render() {
    const { type, defaultValue, onBetChange } = this.props
    return (
      <Form.Group>
        <Form.Control
          type="input"
          placeholder={defaultValue}
          onChange={onBetChange(type)}
        />
      </Form.Group>
    )
  }
}

export default BetField
