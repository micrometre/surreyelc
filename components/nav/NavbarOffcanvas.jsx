import Image from 'next/image'
import Link from "next/link";
import {Offcanvas, Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'
import { data } from "../../data/paths-data";
import { FaPhone} from 'react-icons/fa'
function NavBarPhones( ) {
  const OffcanvasNavbar = {color: "green", marginTop: 0,   };
  const OffcanvasNav = {padding: 0,
        width: '70%',
        height: '100%'

  };
  const OffcanvasLinks = {color: "green", fontSize: "1.14rem", textDecoration: 'none',  padding: 0, };
 return (
<>
  <main>
<Navbar bg="light" expand="lg"  style={OffcanvasNavbar}>
  <Container>
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
        <Navbar.Offcanvas style={OffcanvasNav} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="start">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              <Image src="/img/logo.png"alt="Picture of the logo"width={165}height={89}loading="eager"/>
            </Offcanvas.Title>
          </Offcanvas.Header>
            <Offcanvas.Body>
   {data.map((e, i) => {
     return (
              <Nav className="justify-content-end flex-grow-1 pe-3" key={i}>
       {e.contact.map((e, i) => {
         return (
                <a style={OffcanvasLinks} href={e.href}key={i}title={e.title}>
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

main{
 margin-top: 3.60rem;
 position: fixed;
 top: 0;
 right: 0;
 left: 0;
 z-index: 1030;
}


.pathsLinks{
  text-decoration: none;
  color: black;
}
.pathsDiv {
  margin-top: 0rem;
  width: 100%;
  display: flex;
  justify-content: space-around;
  transition: 100ms ease-in background;
}
.pathsDiv:hover {
  background: yellow;
}
      `}</style>
  </main>
    </>
  );
};

export default NavBarPhones;
