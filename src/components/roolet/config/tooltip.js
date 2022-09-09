import React from 'react'
import { OverlayTrigger } from 'react-bootstrap'
import Tooltip from 'react-bootstrap/Tooltip'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import './config.css'

library.add(faInfoCircle)

class BetTooltip extends React.Component {
  render() {
    const { message } = this.props
    return (
      <div className="betTooltip">
        <OverlayTrigger overlay={<Tooltip>{message}</Tooltip>}>
          <FontAwesomeIcon icon="info-circle" />
        </OverlayTrigger>
      </div>
    )
  }
}

export default BetTooltip
