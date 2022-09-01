import React from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class BetHeader extends React.Component {
  render() {
    return (
      <Row>
        <Col md={4}>Pr</Col>
        <Col md={4}>X</Col>
        <Col md={4}>$</Col>
      </Row>
    )
  }
}

export default BetHeader
