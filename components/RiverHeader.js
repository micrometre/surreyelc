import Image from 'next/image'
import {Offcanvas, Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'
import { data } from "../data/paths-data";
import { FaPhone} from 'react-icons/fa'
function RiverAccessHeader ( ) {
    const src = `/img/river.jpg`;
 return (
<>

  <div className="container">

    <main>

      <h1 className="title">
    River Access
      </h1>

  </main>

      <style jsx>{`
        .container {
          padding: 1rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          box-sizing: border-box;
          padding: 1rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

      .title {
    font-family: font-sans-serif;
    text-align: center!important;
    margin-top: 1rem;
    font-size: 1rem
    font-weight: 300;
    line-height: 1!important;
      }
      `}</style>
    </div>
   </>
 );
};

export default RiverAccessHeader;
