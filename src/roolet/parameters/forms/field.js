import React from 'react'
import {Form} from 'react-bootstrap'

class Field extends React.Component {
  render() {
    return (
      <Form.Group className="betField">
        <Form.Control
          type="input"
          placeholder={this.props.defaultValue}
          onChange={this.props.onChangeGenerator(this.props.type)}
        />
      </Form.Group>
    )
  }
}

export default Field
