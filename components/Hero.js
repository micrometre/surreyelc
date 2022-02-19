import React from "react";
import Image from 'next/image'
import Styles from './Hero.module.css'
import Phones from '../components/nav/NavbarPhones'
import Paths from '../components/nav/NavbarPaths'
import NavBar from '../components/nav/Navbar'
import Link from "next/link";

function NavBarContact( ) {
  return (
    <>
  <navbar className={Styles.navbar} >
    <Phones />
    <Paths />
  </navbar>
    </>
  );
};

export default NavBarContact;
