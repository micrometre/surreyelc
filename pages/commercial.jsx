import MainLayout from "../components/layout";
import Social from "../components/nav/NavbarSocial";
import NavbarOffcanvas from "../components/nav/NavbarOffcanvas";
import Logo from "../components/Logo";
import Commercial from "../components/Commercial";
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
          <section className="section">
            <Commercial />
          </section>
          <Copyright />
          <Footer />
        </MainLayout>
      </div>
      <style jsx>{``}</style>

      <style jsx global>{`
        body {
          font-family: font-sans-serif;
          padding: 1rem;
          width: 100%;
        }
        .section {
          margin-top: 3rem;
          border: 1px solid #ffffff;
        }
      `}</style>
    </div>
  );
}
