import React from "react";
import { Navbar , Button , Form} from "react-bootstrap";
function Header() {
  return (
    <div className="Header">
      <Navbar className="bg-light justify-content-between">
      <Navbar.Brand href="/"> Front-App </Navbar.Brand>
      { window.location.pathname !== '/login' ? 
      <Form inline>
          <Button href="/login" type="submit">Login</Button>
      </Form> : 
        <input type="hidden" ></input> }  
      </Navbar>
    </div>
  );
}

export default Header;
