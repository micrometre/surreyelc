import React from "react";
import Image from 'next/image'
import Styles from './Hero.module.css'
import Phones from '../components/nav/NavbarPhones'
import Paths from '../components/nav/NavbarPaths'
import Social from '../components/nav/NavbarSocial'
import Email from '../components/nav/NavbarEmail'
import Link from "next/link";

function NavBarContact( ) {
  return (
    <>
  <navbar className={Styles.navbar} >
    <Phones />
    <Email />
    <Social />
    <Paths />
  </navbar>
    </>
  );
};

export default NavBarContact;
