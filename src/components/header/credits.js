import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faGithub } from '@fortawesome/free-brands-svg-icons'

import './header.css'

library.add(fab, faGithub)

class Credits extends React.Component {
  render() {
    return (
      <div className="credits">
        <a href="https://www.github.com/pikulet/roolet">
          <FontAwesomeIcon
            icon="fa-brands fa-github"
            size="lg"
            className="creditsLogo"
          />{' '}
          <p>pikulet</p>
        </a>
      </div>
    )
  }
}

export default Credits
