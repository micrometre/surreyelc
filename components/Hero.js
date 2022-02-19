import React from "react";
import Image from 'next/image'
import Styles from './Hero.module.css'
import Phones from '../components/nav/NavbarPhones'
import Paths from '../components/nav/NavbarPaths'
import Social from '../components/nav/NavbarSocial'
import Email from '../components/nav/NavbarEmail'
import Link from "next/link";
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'

function NavBarContact( ) {
  return (
    <>
  <Navbar className={Styles.navbar} >
    <Phones />
  </Navbar>
    </>
  );
};

export default NavBarContact;
