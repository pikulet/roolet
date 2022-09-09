import React from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import BetTooltip from './tooltip'
import './config.css'

class BetHeader extends React.Component {
  render() {
    const { labels, messages } = this.props
    return (
      <div className="betHeader">
        <Row>
          {labels.map((e, i) => {
            return (
              <Col key={i} md={4}>
                {e} <BetTooltip message={messages[i]}></BetTooltip>
              </Col>
            )
          })}
        </Row>
      </div>
    )
  }
}

export default BetHeader
