import React from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class BetHeader extends React.Component {
  render() {
    const { labels } = this.props
    return (
      <div>
        <Row>
          {labels.map((e, i) => {
            return (
              <Col key={i} md={4}>
                {e}
              </Col>
            )
          })}
        </Row>
      </div>
    )
  }
}

export default BetHeader
