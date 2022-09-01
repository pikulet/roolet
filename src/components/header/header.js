import React from "react";

import Image from "react-bootstrap/Image";
import RooletHeader from "../../images/roolet.png"

import "./header.css"

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <Image src={RooletHeader} fluid/>
      </div>
    );
  }
}
export default Header;