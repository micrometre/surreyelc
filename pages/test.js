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
import Copyright from '../components/Copyright'
import Footer from '../components/nav/NavbarFooter'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'


export default function Home(initialData) {
  return (
  <div className="home">
 <div className="home-container">
    <MainLayout>
    <Social />
    <NavbarOffcanvas />
    <Hero />
    <Copyright />
    <Footer />
    </MainLayout>
   </div>
    <style jsx>{`
`}</style>

<style jsx global>{`
body{
      font-family: font-sans-serif;
  padding: 0rem;
  width: 100%;
}
`}</style>



</div>

  )
}

