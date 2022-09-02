import React from 'react'

import { Form } from 'react-bootstrap'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import ChartFunction from '../const/functions'
import ChartType from '../const/types'

import ChartInput from './chartinput'

class ChartConfig extends React.Component {
  render() {
    const { onChange } = this.props

    return (
      <div>
        <Form>
          <Container>
            <Row>
              <Col>
                <ChartInput
                  label="chart function"
                  onChange={onChange('function')}
                  options={Object.keys(ChartFunction)}></ChartInput>
              </Col>
              <Col>
                <ChartInput
                  label="chart type"
                  onChange={onChange('type')}
                  options={Object.keys(ChartType)}></ChartInput>
              </Col>
            </Row>
          </Container>
        </Form>
      </div>
    )
  }
}

export default ChartConfig
