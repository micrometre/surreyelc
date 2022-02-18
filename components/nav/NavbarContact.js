import React from "react";
import Image from 'next/image'
import { data } from "../../data/contact-data";
import Styles from './Navbar.module.css'
import Link from "next/link";
import { FaPhone, FaFacebook, FaGem, FaBars, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';

function NavBarContact( { name, href, ...props }) {
  let iconStyles = {
    fontSize: "2.4em"
  };
  return (
    <>
      {data.map((e, i) => {
        return (
          <div className={Styles}
            key={i}>
           {e.contact.map((e, i) => {
             return (
               <a style={Styles}
                href={e.href}
                key={i}  title={e.title}>
               <e.icons
                style={iconStyles}
                className={Styles}
                />
                  <span className={Styles}>
                  {e.name}
                  </span>
              </a>
                    );
                    })}
          </div>
          );
          })}
    </>
  );
};

export default NavBarContact;
