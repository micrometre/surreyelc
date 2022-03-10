import MainLayout from '../components/layout'
import Social from '../components/nav/NavbarSocial'
import NavbarOffcanvas from '../components/nav/NavbarOffcanvas'
import Carousel from '../components/Carousel'
import Logo from '../components/Logo'
import Moto from '../components/Moto'
import Services from '../components/Services'
import RiverHeader from '../components/RiverHeader'
import River from '../components/River'
import About from '../components/About'
import Promise from '../components/Promise'
import Map from '../components/Map'
import Hero from '../components/Hero'
import Footer from '../components/nav/NavbarPhones'
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'


export default function Home(initialData) {
  return (
  <div className="container">
 <Container className="md-container">
    <MainLayout>
    <Social />
    <NavbarOffcanvas />
    <Logo />
    <Carousel />
    <Moto />
    <Services />
    <RiverHeader />
    <River />
    <About />
    <Promise />
    <Map />
    <Hero />
    <Footer />
    </MainLayout>
   </Container>
    <style jsx>{`
`}</style>

<style jsx global>{`
body{
      font-family: font-sans-serif;
  font-style: normal;
  letter-spacing: 0;
  padding: 0rem;
}
`}</style>



</div>

  )
}

