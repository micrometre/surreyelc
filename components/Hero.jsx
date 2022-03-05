import React from "react";
import Image from 'next/image'
import Link from "next/link";
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'
import { data } from "../data/paths-data";
import { FaPhone} from 'react-icons/fa'
function NavBarPhones( ) {
   const socialIconStyles = {fontSize: "1.2em",color: "black"};
   const socialLinkStyles = {color: "black"};
 return (
<>

  <Navbar bg="light" expand="lg" sticky="top" className="socialList">

    <Container fluid>

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
</Container >

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
