import React from "react";
import Image from 'next/image'
import Link from "next/link";
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'
import { data } from "../data/paths-data";
import { FaPhone} from 'react-icons/fa'
function NavBarPhones( ) {
   const socialIconStyles = {fontSize: "2.0em",color: "black"};
   const socialLinkStyles = {color: "black"};
 return (
<>
        <Navbar bg="light" expand="lg" sticky="top"
    className="socialList"
        >

      {data.map((e, i) => {
        return (
          <div
            className="pathsdiv"
            key={i}
          >
           {e.contact.map((e, i) => {
             return (
               <a
                className="socialLinks"
                href={e.href}
                key={i}
                title={e.title}
               >
                  <span
                    style={socialIconStyles}
                    className="socialIcons"
                  >
                  {e.name}
                  </span>
              </a>
                    );
                    })}
          </div>
          );
          })}
  </Navbar>
<style jsx>{`
.socialLinks{
  text-decoration: none;
}
.pathsdiv {
  margin-top: 6rem;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  background-color: white;
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
