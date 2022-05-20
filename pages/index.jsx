import Image from "next/image";
import styles from "../styles/Home.module.css";
import React, { useState, useEffect, useRef } from "react";
import {
  useViewportScroll,
  motion,
  useTransform,
  useMotionValue,
} from "framer-motion";
import { useInView } from "react-intersection-observer";
import Layout from "../components/layout";
import NavSocail from "../components/nav/NavbarSocial";
import NavBarPaths from "../components/nav/NavbarPaths";
import LogoImage from "../components/LogoImage";
import Moto from "../components/Moto/Moto";
import EvBrandsMarquee from "../components/EvCharging/EvBrands";
import { EvChargingHeader } from "../components/EvCharging/EvCharging";
import EvChargingHero from "../components/EvChargingHero";
import Domestic from "../components/Domestic";
import { NavBarFooter } from "../components/nav/NavbarFooter";
import CopyRight from "../components/Copyright";

export function Home() {
  const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 200]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  const [ref, inView, entry] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  const variants = {
    visible: { opacity: 1, scale: 1, y: 0 },
    hidden: {
      opacity: 0,
      scale: 0.65,
      y: 50,
    },
  };

  return (
    <Layout>
      <div className={styles.homeContainer}>
        <NavSocail />
        <NavBarPaths />
        <LogoImage />
        <Moto />
        <Domestic />
        <EvChargingHeader />
        <EvChargingHero />
        <EvBrandsMarquee />
        <CopyRight />
        <NavBarFooter />
      </div>
    </Layout>
  );
}

export default Home;
