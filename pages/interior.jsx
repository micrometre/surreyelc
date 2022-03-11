import MainLayout from '../components/layout'
import Social from '../components/nav/NavbarSocial'
import NavbarOffcanvas from '../components/nav/NavbarOffcanvas'
import Logo from '../components/Logo'
import Hero from '../components/Hero'
import Copyright from '../components/Copyright'
import Footer from '../components/nav/NavbarPhones'
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
  padding: 1rem;
  width: 100%;
}
`}</style>



</div>

  )
}

