import Head from 'next/head'
import Image from 'next/image'
import styles from './Logo.module.css'
import { motion } from "framer-motion";
import { images } from "../../data/logo-images-data";

const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };
const thumbnailVariants = {
  initial: { scale: 0.9, opacity: 0 },
  enter: { scale: 1, opacity: 1, transition },
  exit: {
    scale: 0.5,
    opacity: 0,
    transition: { duration: 1.5, ...transition },
  },
};
const frameVariants = {
  hover: { scale: 0.95 },
};

const imageVariants = {
  hover: { scale: 1.1 },
};
export function Logo({ id, i }) {
  return (
    <>
          <motion.img className={styles.card} src={`/images/${id}?auto=format&fit=crop&w=1500`} alt="The surreyelc" variants={imageVariants} transition={transition} />
    </>
  );
}

export function LogoImages() {
  return (
    <>
      {images.map((id, i) => (
        <Logo key={id} id={id} i={i} />
      ))}
    </>
  );
}

export  function LogoCard() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.grid}>
    <LogoImages/>
        </div>
      </main>
    </div>
  )
}

export default LogoCard;