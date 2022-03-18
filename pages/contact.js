import MainLayout from "../components/layout";
import Social from "../components/nav/NavbarSocial";
import NavbarOffcanvas from "../components/nav/NavbarOffcanvas";
import Hero from "../components/Hero";
import Contact from "../components/Contact";
import Copyright from "../components/Copyright";
import Footer from '../components/nav/NavbarFooter'
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

export default function Home(initialData) {
  return (
    <div className="home">
      <div className="home-container">
        <MainLayout>
          <Social />
          <NavbarOffcanvas />
          <Contact />
          <Copyright />
          <Footer />
        </MainLayout>
      </div>
      <style jsx>{``}</style>

      <style jsx global>{`
        body {
          font-family: font-sans-serif;
          padding: 0rem;
          width: 100%;
        }
      `}</style>
    </div>
  );
}
