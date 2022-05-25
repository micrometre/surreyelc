import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout";
import NavSocail from "../components/nav/NavbarSocial";
import NavBarPaths from "../components/nav/NavbarPaths";
import LogoCard from '../components/Logo/Logo'
import Moto from "../components/Moto/Moto";
import EvBrandsMarquee from "../components/EvCharging/EvBrands";
import { EvChargingHeader } from "../components/EvCharging/EvCharging";
import Domestic from "../components/Domestic";
import { NavBarFooter } from "../components/nav/NavbarFooter";
import CommercialMoto from "../components/CommercialMoto";
import CommercialHero from "../components/CommercialHero";
import CopyRight from '../components/Copyright'
export default function Home() {
  return (
      <div className="home-container">
        <Layout>
        <NavSocail />
        <NavBarPaths />
        <LogoCard />
        <Moto />
        <Domestic />
        <EvChargingHeader />
        <EvBrandsMarquee />
        <CommercialMoto />
        <CommercialHero />
        <CopyRight />
        <NavBarFooter/>
          </Layout>
    </div>
  )
}

