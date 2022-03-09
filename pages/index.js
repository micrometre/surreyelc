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
import Hero from '../components/Hero'
import Footer from '../components/nav/NavbarPhones'
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'


export default function Home(initialData) {
  return (
  <div className="container">
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
    <Hero />
    <Footer />
    </MainLayout>
    <style jsx>{`
.container {
  padding:  0.0rem;
}
`}</style>

<style jsx global>{`
*,
*::before,
*::after {
  box-sizing: border-box;
}
html {
  background-color: #ecf9ff;
      font-family: font-sans-serif;
}
body{
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0;
  padding: 1rem;
}
`}</style>



</div>

  )
}

