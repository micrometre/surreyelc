import Head from 'next/head'
import Image from 'next/image'
import styles from './ExternalHero.module.css'
import { motion } from "framer-motion";
import { images } from "../../data/external-images-data";


const transition = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96],
}

const imageVariants = {
  exit: { y: '50%', opacity: 0, transition },
  enter: {
    y: '0%',
    opacity: 1,
    transition,
  },
}


export function External({ id, i }) {
  return (
    <>
      <motion.img
      className={styles.externalImage}
        style={{
          margin: 1,
          padding: "1px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        src={`/images/${id}?auto=format&fit=crop&w=1500`}
        alt="The surreyelc"
        variants={imageVariants}
        transition={transition}
      />
    </>
  );
}

export function ExternalImages() {
  return (
    <>
      <h1 className={styles.externaltitle}>
        <br />
        Garden sheds
        <br />
        <br />
        Out houses
        <br />
        <br />
        Garden lighting
        <br />
        <br />
        Driveway lighting
        <br />
        <br />
        Decking areas
        <br />
        <br />
        External living Areas.
      </h1>
    </>
  );
}

export function ExternalCard() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.grid}>
          <div className={styles.card}>
            <ExternalImages />
          </div>
          <div className={styles.card}>
            <>
            </>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ExternalCard;