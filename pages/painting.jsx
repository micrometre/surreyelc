import MainLayout from "../components/layout";
import Social from "../components/nav/NavbarSocial";
import NavbarOffcanvas from "../components/nav/NavbarOffcanvas";
import Hero from "../components/Hero";
import Painting from "../components/Painting";
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
          <div className="section">
          <Painting />
          </div>
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
        .section {
          border: 1px solid #ffffff;
          margin-top: 3.46rem;

        }
      `}</style>
    </div>
  );
}
