import Layout from '../components/layout'
import NavSocail from '../components/nav/NavbarSocial'
import NavBarPaths from '../components/nav/NavbarPaths'
import Logo from '../components/Logo'
import ServicesEv from '../components/Services'
import { NavBarFooter } from '../components/nav/NavbarFooter'
import CopyRight from '../components/Copyright'
export default function Home() {
  return (
    <Layout>
    <div className="home">
      <div className="home-container">
        <NavSocail />
        <NavBarPaths />
        <Logo />
        <ServicesEv />
        <CopyRight />
        <NavBarFooter/>
      </div>
    </div>
    </Layout>
  )
}

