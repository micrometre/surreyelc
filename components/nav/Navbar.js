import * as React from "react";
import Image from "next/image";
import Contact from '../../components/nav/NavbarContact'
import Social from '../../components/nav/NavbarSocial'
import Styles from './Navbar.module.css'
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'

export const Navigation = () => {
  return (
    <>
<Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Contact/>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </>
  );
};
export default Navigation;

