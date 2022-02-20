import * as React from "react";
import Image from "next/image";
import Email from '../../components/nav/NavbarEmail'
import Phones from '../../components/nav/NavbarPhones'
import Social from '../../components/nav/NavbarSocial'
import Paths from '../../components/nav/NavbarPaths'
import Hero from '../../components/Hero.js'
import Styles from './Navbar.module.css'
import {Navbar, Container, Nav, NavDropdown, Offcanvas } from 'react-bootstrap'
import { FaBars } from 'react-icons/fa';
export const Navigation = () => {
  return (
    <>
      <Navbar bg="light" expand="lg" fixed="top" className={Styles.NavBarStyles}>
        <Container >
      <Nav className={Styles.NavSocial}>
          <Social />
        </Nav>
      <Nav className={Styles.NavPaths}>
          <Paths/>
        </Nav>
        <Navbar.Toggle aria-controls="offcanvasNavbar" >

          <FaBars />
              <Navbar.Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel"placement="end">
                <Offcanvas.Header closeButton><Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title></Offcanvas.Header>
                  <Offcanvas.Body>
                                <Paths />
                                <Phones />
                                <Social />
                  </Offcanvas.Body>
              </Navbar.Offcanvas>
          </Navbar.Toggle>
        </Container>
      </Navbar>
    </>
  );
};
export default Navigation;
