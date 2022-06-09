import Head from 'next/head'
import Image from 'next/image'
import styles from './ExternalHero.module.css'
import { motion } from "framer-motion";
import { images } from "../../data/external-images-data";

export function ExternalImages() {
  return (
    <>
      <h4 className={styles.externaltitle}>
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
        External living Areas
      </h4>
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