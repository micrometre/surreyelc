import React from "react";
import Image from 'next/image'
import { data } from "../../data/paths-data";
import Styles from './Navpaths.module.css'
import Link from "next/link";
import {Navbar,  Nav, NavLink} from 'react-bootstrap'

function NavBarContact( { name, href, ...props }) {
  let iconStyles = {
    fontSize: "2.4em"
};
  return (
    <>
      {data.map((e, i) => {
return (
          <Nav key={i}>
            {e.contact.map((e, i) => {
              return (
<Nav.Link key={i} style={Styles} href={e.href} target="_blank" rel="noopener noreferrer" title={e.title}>
  <span className={Styles}>{e.name}</span>
</Nav.Link>
);})}
          </Nav>
      );
})}
    </>
);
};

export default NavBarContact;
