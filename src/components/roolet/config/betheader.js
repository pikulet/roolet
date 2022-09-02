import React from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class BetHeader extends React.Component {
  render() {
    return (
      <div className="config-bet-header">
        <Row>
          <Col md={4}>Pr</Col>
          <Col md={4}>X</Col>
          <Col md={4}>$</Col>
        </Row>
      </div>
    )
  }
}

export default BetHeader
