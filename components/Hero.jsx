import React from "react";
import Image from 'next/image'
import Link from "next/link";
import Phones from '../components/nav/NavbarPhones'
import Paths from '../components/nav/NavbarPaths'
import Social from '../components/nav/NavbarSocial'
import Email from '../components/nav/NavbarEmail'
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'
import { data } from "../data/social-data";
import { FaPhone} from 'react-icons/fa'
function NavBarPhones( ) {
   const socialIconStyles = {fontSize: "2.7em",color: "white"};
 return (
<>
  <div
    className="socialList"
  >
   {data.map((e, i) => {
     return (
    <div className="socialdiv" key={i}>
       {e.socialLinks.map((e, i) => {
         return (
      <a style={socialIconStyles} href={e.href} key={i}  title={e.title}>
        <e.icons className={socialIconStyles} />
           </a>
         );
      })}
       </div>
     );
    })}
  </div>
            <style jsx>{`
        .socialdiv {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-evenly;
          background-color: #6c757d;
          transition: 100ms ease-in background;
        }
        .socialdiv:hover {
          background: green;
        }
      `}</style>
    </>
  );
};

export default NavBarPhones;
