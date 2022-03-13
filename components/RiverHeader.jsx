import Image from "next/image";
import {
  Offcanvas,
  Navbar,
  Container,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import { data } from "../data/paths-data";
import { FaPhone } from "react-icons/fa";
function RiverAccessHeader() {
  const src = `/img/river.jpg`;
  return (
    <>
      <div className="header-container">
        <main>
          <h1 className="title">River Access</h1>
        </main>

        <style jsx>{`
          main {
            box-sizing: border-box;
            padding: 1rem;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
                      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

          }

          .title {
            font-weight: 300;
            line-height: 1 !important;
            text-decoration: none;
            margin: 0;
            line-height: 1.15;
            font-size: 4rem;
          }
        `}</style>
      </div>
    </>
  );
}

export default RiverAccessHeader;
