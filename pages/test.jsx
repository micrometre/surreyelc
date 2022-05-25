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
import CommercialHero from "../components/Commercial/Commercial";
import { NavBarFooter } from "../components/nav/NavbarFooter";


import CopyRight from '../components/Copyright'
export default function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <NavSocail />
        <NavBarPaths />
        <LogoCard />
        <Moto />
        <Domestic />
        <EvChargingHeader />
        <EvBrandsMarquee />
        <CommercialHero />
        <CopyRight />
        <NavBarFooter/>
      </div>
    </div>
  )
}

