import { motion } from "framer-motion";
import Layout from "../components/layout";
import NavSocail from "../components/nav/NavbarSocial";
import NavBarPaths from "../components/nav/NavbarPaths";
import MakingGood from "../components/MakingGood/MakingGood";
import CopyRight from '../components/Copyright'
import { NavBarFooter } from "../components/nav/NavbarFooter";
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
    <div style={{
      paddingTop: 70,
    }}>
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
              <MakingGood />
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