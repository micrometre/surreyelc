import Image from 'next/image'
import {Offcanvas, Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'
import { data } from "../data/paths-data";
import { FaPhone} from 'react-icons/fa'
function RiverAccess ( ) {
    const src = `/img/river.jpg`;
 return (
    <>
 <div className="river-container">
      <main>
        <h1 className="title">
          We can access hard-to-reach areas like riverside properties and islands via a boat.
        </h1>
        <p className="description">
          All our services are available to these properties.
        </p>
      </main>
      <style jsx>{`
        .river-container {
          min-height: 100vh;
          padding: 1rem;
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
        }
        main {
          width: 100%;
          background: url(./img/river.jpg) top center;
          padding: 1rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .title {
          color: #fff;
          font-family: Oxygen, sans-serif;
          box-sizing: border-box;
          margin-top: 0;
          margin-bottom: .5rem;
          line-height: 1.2;
          font-weight: 300;
          letter-spacing: 2px;
          font-size: 48px;
        }
        .description {
          line-height: 1.5;
          font-size: 1.5rem;
          text-align: var(--bs-body-text-align);
          -webkit-text-size-adjust: 100%;
          -webkit-tap-highlight-color: transparent;
          color: #fff;
          font-family: Oxygen, sans-serif;
          box-sizing: border-box;
          margin-top: 0;
          margin-bottom: .5rem;
          font-weight: 500;
          line-height: 1.2;
          font-size: calc(1.325rem + .9vw);
        }
        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>
    </div>
   </>
 );
};

export default RiverAccess;
