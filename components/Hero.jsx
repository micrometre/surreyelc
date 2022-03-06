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
              <h1 className="title">
We can access hard-to-reach areas like riverside properties and islands via a boat.
        </h1>

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
    justify-content: center!important;
    align-items: center!important;
    height: 100vh;
    box-sizing: border-box;
    color: #fff;
    top: 56%;
    font-family: Oxygen, sans-serif;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }


      `}</style>
    </div>

   </>

 );

};

export default RiverAccess;
