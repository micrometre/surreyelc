import React from "react";
import Image from 'next/image'
import Link from "next/link";
import {Offcanvas, Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'
import { data } from "../data/paths-data";
import { FaPhone} from 'react-icons/fa'
function NavBarPhones( ) {
   const socialIconStyles = {fontSize: "1.2em",color: "black"};
   const socialLinkStyles = {color: "black"};
 return (
<>

<Navbar bg="light" expand="lg" sticky="top" className="pathsList">
<Container fluid>
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
{data.map((e, i) => {
return (
<div className="pathsDiv"key={i}>
{e.contact.map((e, i) => {
return (
<a className="pathsLinks"href={e.href}key={i}title={e.title}>
{e.name}
</a>
);
})}
</div>
);
})}
</Navbar.Collapse>
</Container >
</Navbar>
<Navbar bg="light" expand="lg">
<Container fluid>
<Navbar.Toggle aria-controls="offcanvasNavbar" />
<Navbar.Offcanvas
  id="offcanvasNavbar"
  aria-labelledby="offcanvasNavbarLabel" placement="start">
<Offcanvas.Header closeButton>
<Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
</Offcanvas.Header>
<Offcanvas.Body>
<Nav className="justify-content-end flex-grow-1 pe-3">
<Nav.Link href="#action1">Home</Nav.Link>
<Nav.Link href="#action2">Link</Nav.Link>
<NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
<NavDropdown.Item href="#action3">Action</NavDropdown.Item>
<NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
<NavDropdown.Divider />
<NavDropdown.Item href="#action5">
  Something else here
</NavDropdown.Item>
</NavDropdown>
</Nav>
</Offcanvas.Body>
</Navbar.Offcanvas>
</Container>
</Navbar>
<style jsx>{`
.pathsLinks{
  text-decoration: none;
  color: black;
}
.pathsDiv {
  margin-top: 6rem;
  width: 100%;
  display: flex;
  justify-content: space-around;
  background-color: white;
  transition: 100ms ease-in background;
}
.pathsDiv:hover {
  background: yellow;
}
      `}</style>
    </>
  );
};

export default NavBarPhones;
