import { motion } from "framer-motion";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout";
import NavSocail from "../components/nav/NavbarSocial";
import NavBarPaths from "../components/nav/NavbarPaths";
import Hero from "../components/Hero";
import LogoCard from '../components/Logo/Logo'
import Moto from "../components/Moto/Moto";
import Intro from "../components/Intro/Intro";
import Domestic from "../components/Domestic";
import EvBrandsMarquee from "../components/EvCharging/EvBrands";
import { EvChargingHeader } from "../components/EvCharging/EvCharging";
import { NavBarFooter } from "../components/nav/NavbarFooter";
import CommercialMoto from "../components/CommercialMoto";
import CommercialHero from "../components/CommercialHero";
import ExternalHero from "../components/ExternalHero"
import ExternalMoto from "../components/ExternalMoto/ExternalMoto";
import Contact from "../components/Contact/Contact";
import CopyRight from '../components/Copyright'
const content = {
  animate: {
    transition: { staggerChildren: 0.1 },
  },
};

const title = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const inputs = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

export function HomePage() {
  return (
    <div style={styles.homePage}>
      <Layout>
        <NavSocail />
        <NavBarPaths />
        <motion.section
          exit={{ opacity: 0 }}
        >
          <motion.div
            variants={content}
            animate="animate"
            initial="initial"
          >
            <motion.div
              variants={title}
            >
              <LogoCard />
              <Moto />
              <Intro />
              <Domestic />
              <EvChargingHeader />
              <Hero />
              <EvBrandsMarquee />
              <CommercialMoto />
              <CommercialHero />
              <ExternalMoto />
              <ExternalHero />
              <Contact />
              <CopyRight />
              <NavBarFooter />
            </motion.div>
          </motion.div>
        </motion.section>
      </Layout>
    </div>
  );
}

export default HomePage;