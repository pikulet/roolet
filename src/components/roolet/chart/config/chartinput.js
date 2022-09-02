import React from 'react'

import { Form } from 'react-bootstrap'
import { InputGroup } from 'react-bootstrap'

class ChartInput extends React.Component {
  render() {
    const { label, onChange, options } = this.props

    return (
      <InputGroup>
        <InputGroup.Text>{label}</InputGroup.Text>
        <Form.Control as="select" onChange={onChange}>
          {options.map((e, i) => {
            return <option key={i}>{e}</option>
          })}
        </Form.Control>
      </InputGroup>
    )
  }
}

export default ChartInput
