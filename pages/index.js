import MainLayout from '../components/layout'
import Email from '../components/nav/NavbarEmail'
import Phones from '../components/nav/NavbarPhones'
import Social from '../components/nav/NavbarSocial'
import Paths from '../components/nav/NavbarPaths'
import NavbarOffcanvas from '../components/nav/NavbarOffcanvas'
import NavBar from '../components/nav/Navbar'
import Carousel from '../components/Carousel'
import Logo from '../components/Logo'
import Moto from '../components/Moto'
import Hero from '../components/Hero'
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'


export default function Home(initialData) {
  return (
    <MainLayout>
    <Social />
    <NavbarOffcanvas />
    <Logo />
    <Moto />
    </MainLayout>

  )
}

