import Layout from '../components/layout'
import NavSocail from '../components/nav/NavbarSocial'
import NavBarPaths from '../components/nav/NavbarPaths'
import Contact from '../components/Contact'
import { NavBarFooter } from '../components/nav/NavbarFooter'
import CopyRight from '../components/Copyright'
export default function Home() {
  return (
    <Layout>
    <div className="home">
      <div className="home-container">
        <NavSocail />
        <NavBarPaths />
        <Contact  />

        <CopyRight />
        <NavBarFooter/>
      </div>
    </div>
    </Layout>
  )
}

