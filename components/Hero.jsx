import React from "react";
import Image from 'next/image'
import Link from "next/link";
import {Offcanvas, Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'
import { data } from "../data/paths-data";
import { FaPhone} from 'react-icons/fa'
function NavBarPhones( ) {
   const socialIconStyles = {fontSize: "1.2em",color: "black"};
   const socialLinkStyles = {color: "black"};
   const OffcanvasStyles = {color: "black"};
 return (
<>
<Navbar bg="light" expand="lg" sticky="top" className="pathsList">

  <Container >

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
    <Container >
      <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="start">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              <Image src="/img/logo.png"alt="Picture of the logo"width={330}height={178}loading="eager"/>
            </Offcanvas.Title>
          </Offcanvas.Header>
            <Offcanvas.Body>
   {data.map((e, i) => {
     return (
              <Nav className="justify-content-end flex-grow-1 pe-3" key={i}>
       {e.contact.map((e, i) => {
         return (
                <a style={OffcanvasStyles}className="pathsLinksCanvas"href={e.href}key={i}title={e.title}>
                  {e.name}
                </a>
         );
       })}
              </Nav>
     );
   })}
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
