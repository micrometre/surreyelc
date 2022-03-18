import MainLayout from "../components/layout";
import Social from "../components/nav/NavbarSocial";
import NavbarOffcanvas from "../components/nav/NavbarOffcanvas";
import RiverHeader from "../components/RiverHeader";
import River from "../components/River";
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
            <River />
          </div>
          <Copyright />
          <Footer />
        </MainLayout>
      </div>
      <style jsx global>{`
        body {
          font-family: font-sans-serif;
          padding: 0rem;
          width: 100%;
        }
        .section {
          margin-top: 4rem;
          border: 1px solid #fff;
        }
      `}</style>
    </div>
  );
}
