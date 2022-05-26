import Image from "next/image";
import { motion } from "framer-motion";
import styles from "../styles/ElectricCarCharging.module.css";
import Layout from "../components/layout";
import NavSocail from "../components/nav/NavbarSocial";
import NavBarPaths from "../components/nav/NavbarPaths";
import { NavBarFooter } from "../components/nav/NavbarFooter";
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

const links = [
  {
    description:
      " Our fully qualified engineers install car charging ports for all makes and models of vehicles to an extremely high standard and safety level.",
  },

  {
    description:
      "We are registered to install Rolec, Pod Point and Zappi car charging units. But can install to all customers wants with some regulation.",
  },
  {
    description:
      "Our services offer complete regulation installation, certification and making good all damages from installation.",
  },
  {
    description:
      "Part of our brand is the ability to return damage caused by installation back to original condition with our in house rendering , plastering and decorating team.",
  },

];
export function ElectricCarChargingPage() {
  return (
    <div style={styles.ElectricCarChargingPage}>
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
            <motion.div variants={title}>
              <div className={styles.descriptionSection}>
                <div className={styles.textCenter}>
                  <h1 className={styles.title}>
                    We have a passion for helping homeowners make the 
                    most of cheaper environmentally friendly driving.
                  </h1>
                </div>
              </div>
            </motion.div>

            <main className={styles.main}>
              <div className={styles.grid}>
                <div className={styles.card}>
                  <p>
       Our fully qualified engineers install car <br/>
       charging ports <br/>for all makes and models of vehicles. 


                  </p>
                  <Image
                    src="/images/12.webp"
                    alt="About picture"
                    width={500}
                    height={300}
                  />
                </div>

                <div className={styles.card}>
                  <p>
      We are registered to install <br/>
      Rolec, Pod Point and Zappi <br/>
      car charging units.
                    </p>
                  <Image
                    src="/images/zappi1.webp"
                    alt="About picture"
                    width={250}
                    height={300}
                  />
                  <Image
                    src="/images/podpoint2.webp"
                    alt="About picture"
                    width={250}
                    height={300}
                  />
                </div>

              </div>
            </main>
          </motion.div>
        </motion.section>
        <CopyRight />
        <NavBarFooter />
      </Layout>
    </div>
  );
}

export default ElectricCarChargingPage