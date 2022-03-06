import React from "react";
import Image from 'next/image'
import {Offcanvas, Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'
import { data } from "../data/paths-data";
import { FaPhone} from 'react-icons/fa'
function RiverAccess ( ) {
    const src = `/img/river.jpg`;

 return (

<>


    <div className="container">
        <p className="description">
          Get started by editing <code>pages/index.js</code>
          Get started by editing <code>pages/index.js</code>
          Get started by editing <code>pages/index.js</code>
          Get started by editing <code>pages/index.js</code>
          Get started by editing <code>pages/index.js</code>
          Get started by editing <code>pages/index.js</code>
          Get started by editing <code>pages/index.js</code>
          Get started by editing <code>pages/index.js</code>
        </p>
      <style jsx>{`

        .container {
          padding: 100rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          box-sizing: border-box;
          margin-top: 1rem;
          padding: 0rem;
         background: url(./img/river.jpg) top center;
        }
      `}</style>
    </div>

   </>

 );

};

export default RiverAccess;
