import Image from "next/image";
import Link from "next/link";
import {
  Offcanvas,
  Navbar,
  Container,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import { data } from "../../data/paths-data";
import { FaPhone } from "react-icons/fa";
function NavBarPhones() {
  const offcanvasToggle = {
    color: "#fff",
    backgroundColor: "#fff",
    border: "1px solid #088413",
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 1,
    borderRadius: 1,
    padding: "4px 6px",
    marginLeft: 10,
    lineHeight: 1,
  }
  
  const offcanvasContainer= { 
    padding: 0, 
    fontSize: "1.59rem",
    height: "100%" 
  };
  const OffcanvasNav = {
    padding: 0,
    backgroundColor: "#23513e",
    width: "50%",
    height: "100%",
  };
  const offcanvasHeader = {
    padding: 3,
    backgroundColor: "#fff",
    width: "100%",
    height: "2%",
    borderRadius: "5px",
    margin: 2,
  };
  const offcanvasTitle = {
    padding: 0,
    height: "10%",
    backgroundColor: "white",
    border: "0.2rem solid teal",
    boxShadow:"0 0 10px",

  };
  const offcanvasBody = { padding: 0, height: "100%" };
  const OffcanvasLinks = {
    color: "#fff",
    fontSize: "1.18rem",
    textDecoration: "none",
    padding: 8,
    margin: 8,
  };
  return (
    <>
      <main>
        <Navbar  expand="lg" bg="dark">
          <Container  style={offcanvasContainer} > 
            <Navbar.Collapse id="basic-navbar-nav">
              {data.map((e, i) => {
                return (
                  <div className="pathsDiv" key={i}>
                    {e.contact.map((e, i) => {
                      return (
                        <a
                          className="pathsLinks"
                          href={e.href}
                          key={i}
                          title={e.title}
                        >
                          {e.name}
                        </a>
                      );
                    })}
                  </div>
                );
              })}
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Navbar expand="lg">
          <Container>
            <Navbar.Toggle
              aria-controls="offcanvasNavbar"
              aria-labelledby="offcanvasNavbar"
              style={offcanvasToggle}
            />
            <Navbar.Offcanvas
              style={OffcanvasNav}
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="start"
            >
              <Offcanvas.Header closeButton style={offcanvasHeader}>
                <Offcanvas.Title
                  id="offcanvasNavbarLabel"
                  style={offcanvasTitle}
                >
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body style={offcanvasBody}>
                {data.map((e, i) => {
                  return (
                    <Nav
                      className="justify-content-end flex-grow-1 pe-3"
                      key={i}
                    >
                      {e.contact.map((e, i) => {
                        return (
                          <a
                            style={OffcanvasLinks}
                            href={e.href}
                            key={i}
                            title={e.title}
                          >
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
          main {
            z-index: 1030;
            position: fixed;
            top: 0;
            right: 0;
            left: 0;
            margin-top: 3.6rem;
          }

          .pathsLinks {
            text-decoration: none;
            color: #fff;
          }
          .pathsDiv {
            margin-top: 0rem;
            width: 100%;
            display: flex;
            justify-content: space-around;
            transition: 100ms ease-in background;
          }
        `}</style>
      </main>
    </>
  );
}

export default NavBarPhones;
