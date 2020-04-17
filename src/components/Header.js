import React from "react";
import { Navbar} from "react-bootstrap";
function Header() {
  return (
    <div className="Header">
      <Navbar className="bg-light justify-content-between  ">
      <Navbar.Brand href="/" >
        <img 
        src="logo.png" 
        alt="logo"

        width="200rem"
        height="85rem"
         /> 
      </Navbar.Brand>
      </Navbar>
    </div>
  );
}

export default Header;
