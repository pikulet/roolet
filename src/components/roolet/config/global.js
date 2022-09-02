import React from 'react'

import { Form } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'

class GlobalInput extends React.Component {
  render() {
    const { type, defaultValue, onChange } = this.props

    return (
      <div className="config-global">
        <Row>
          <Form.Group>
            <Form.Control
              type="input"
              placeholder={defaultValue}
              onChange={onChange(type)}
            />
          </Form.Group>
        </Row>
      </div>
    )
  }
}

export default GlobalInput
