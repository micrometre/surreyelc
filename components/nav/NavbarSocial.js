import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Styles from './Navsocial.module.css'
import { data } from "../../data/social-data";
import { FaFacebook, FaTwitter, FaInstagram,} from 'react-icons/fa';
function NavBarSocial( { name, href, ...props }) {
  let iconStyles = {
    fontSize: "1.0em",
    color: "green"
  };
  return (
    <>
      {data.map((e, i) => {
        return (
  <div className={Styles} key={i}>
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
  </div>
       );
      })}
    </>
  );
};

export default NavBarSocial;
