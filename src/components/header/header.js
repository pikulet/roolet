import Image from "react-bootstrap/Image";
import RooletHeader from "../../images/roolet.png"

import "./header.css"

export default function Header() {
  return (
    <div Header className="header">
      <Image src={RooletHeader} fluid/>
    </div>
  );
}