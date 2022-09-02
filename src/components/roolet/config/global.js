import React from 'react'

import { Form, InputGroup } from 'react-bootstrap'

class GlobalInput extends React.Component {
  render() {
    const { label, type, defaultValue, onChange } = this.props

    return (
      <div>
        <InputGroup className="globalInput">
          <InputGroup.Text>{label}</InputGroup.Text>
          <Form.Control
            type="input"
            placeholder={defaultValue}
            onChange={onChange(type)}
          />
        </InputGroup>
      </div>
    )
  }
}

export default GlobalInput
