import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Styles from './Navbar.module.css'
import { data } from "../../data/social-data";
import { FaFacebook, FaTwitter, FaInstagram,} from 'react-icons/fa';
function NavBarSocial( { name, href, ...props }) {
  let iconStyles = {
    fontSize: "4.0em",
    color: "green"
  };
  return (
    <>
      {data.map((e, i) => {
        return (
  <nav className={Styles} key={i}>
           {e.socialLinks.map((e, i) => {
             return (
    <a style={Styles} href={e.href}
        target="_blank" rel="noopener noreferrer"
        key={i}  title={e.title}>
    <e.icons
      style={iconStyles}/>
    </a>
);
  })}
  </nav>
       );
      })}
    </>
  );
};

export default NavBarSocial;
