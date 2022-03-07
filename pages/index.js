import MainLayout from '../components/layout'
import Social from '../components/nav/NavbarSocial'
import NavbarOffcanvas from '../components/nav/NavbarOffcanvas'
import Carousel from '../components/Carousel'
import Logo from '../components/Logo'
import Moto from '../components/Moto'
import Services from '../components/Services'
import RiverHeader from '../components/RiverHeader'
import River from '../components/River'
import Hero from '../components/Hero'
import Footer from '../components/nav/NavbarPhones'
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'


export default function Home(initialData) {
  return (
    <MainLayout>
    <Social />
    <NavbarOffcanvas />
    <Logo />
    <Carousel />
    <Moto />
    <Services />
    <RiverHeader />
    <River />
    <Hero />
    <Footer />
    </MainLayout>

  )
}

