import React from 'react'

import { Form } from 'react-bootstrap'

class ChartInput extends React.Component {
  render() {
    const { onChange, options } = this.props

    return (
      <Form.Group>
        <Form.Control as="select" onChange={onChange}>
          {options.map((e, i) => {
            return <option key={i}>{e}</option>
          })}
        </Form.Control>
      </Form.Group>
    )
  }
}

export default ChartInput
