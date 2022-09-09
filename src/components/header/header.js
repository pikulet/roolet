import React from 'react'

import Image from 'react-bootstrap/Image'
import RooletHeader from '../../images/roolet.png'
import Credits from './credits'

import './header.css'

class Header extends React.Component {
  render() {
    return (
      <div className="headerImage">
        <Image src={RooletHeader} fluid />
        <Credits></Credits>
      </div>
    )
  }
}
export default Header
