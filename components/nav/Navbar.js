import * as React from "react";
import Image from "next/image";
import Email from '../../components/nav/NavbarEmail'
import Phones from '../../components/nav/NavbarPhones'
import Social from '../../components/nav/NavbarSocial'
import Paths from '../../components/nav/NavbarPaths'
import Hero from '../../components/Hero.js'
import Styles from './Navbar.module.css'
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'
export const Navigation = () => {
  return (
    <>
      <Navbar bg="light" expand="lg" fixed="top" className={Styles.NavBarStyles}>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Paths />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default Navigation;
