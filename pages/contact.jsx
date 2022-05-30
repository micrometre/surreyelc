import { motion } from "framer-motion";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout";
import NavSocail from "../components/nav/NavbarSocial";
import NavBarPaths from "../components/nav/NavbarPaths";
import { NavBarFooter } from "../components/nav/NavbarFooter";
import CopyRight from '../components/Copyright'
import Contact from "../components/Contact";
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

export function ContactPage() {
  return (
    <Layout>
      <NavSocail />
      <NavBarPaths />

      <CopyRight />
      <NavBarFooter />
      <motion.section exit={{ opacity: 0 }}>
        <motion.div variants={content} animate="animate" initial="initial">
          <motion.div variants={title}>
      <Contact />
          </motion.div>
        </motion.div>
      </motion.section>
    </Layout>
  );
}




export default ContactPage;