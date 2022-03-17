import Image from "next/image";
import Link from "next/link";
import { data } from "../../data/contact-data";
import { FaPhone } from "react-icons/fa";
import {
  Offcanvas,
  Navbar,
  Nav,
  NavDropdown,
} from "react-bootstrap";

function NavBarContact({ name, href, ...props }) {
  const phoneLinksStyles = { fontSize: "1.0em", color: "white" };
  const phoneIconStyles = { fontSize: "2.5em", color: "white" };

  return (
    <>
      <div>
        <Navbar expand="lg" variant="dark" fixed="bottom">
          {data.map((e, i) => {
            return (
              <div className="phonesdiv" key={i}>
                {e.contact.map((e, i) => {
                  return (
                    <a
                      style={phoneLinksStyles}
                      className="phoneLinksStyles"
                      href={e.href}
                      key={i}
                      title={e.title}
                    >
                      <e.icons className="phoneIconsStyles"></e.icons>
                      {e.name}
                    </a>
                  );
                })}
              </div>
            );
          })}
        </Navbar>
      </div>
      <style jsx>{`
        .phonesdiv {
          position: fixed;
          z-index: 1030;
          width: 100%;
          bottom: 0;
          height: 3rem;
          display: flex;
          align-items: center;
          justify-content: space-evenly;
          background-color: #6c757d;
          text-decoration: none;
          font-size: 1.4rem;
        }
        .phoneLinksStyles {
          font-size: 0.8rem;
          text-decoration: none;
        }

        @media (max-width: 990px) {
          .phonesdiv {
            text-decoration: none;
            font-size: 0.8rem;
              font-weight: 795;

          }
        }
      `}</style>
    </>
  );
}

export default NavBarContact;
