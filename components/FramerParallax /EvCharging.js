import React, { useState, useEffect, useRef } from 'react';
import {
  useViewportScroll,
  motion,
  useTransform,
  useMotionValue
} from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Head from "next/head";
import Image from "next/image";
import styles from "./EvCharging.module.css";





export function Parallax() {
  const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 200]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0.5,
    triggerOnce: false
  });


  // const [isInViewport, setIsInViewport] = useState(false);

  //console.log(window.innerHeight);
  //let coso = useRef(null);

  // useEffect(() => {
  //   console.log(coso.current.offsetTop);
  //   if (
  //     coso.current.offsetTop > scrollY &&
  //     coso.current.offsetTop < window.innerHeight
  //   ) {
  //     setIsInViewport(true);
  //   } else {
  //     setIsInViewport(false);
  //   }
  // }, [coso]);
  // useEffect(() => {
  //   scrollY.onChange(v => console.log(v));
  // }, [scrollY]);

  const variants = {
    visible: { opacity: 1, scale: 1, y: 0 },
    hidden: {
      opacity: 0,
      scale: 0.65,
      y: 50
    }
  };

  return (
    <div className={styles.container}>
      <motion.div className={styles.box} style={{ y: y1, x: -50 }} />
      <motion.div
        className={styles.box}
        style={{ y: y2, x: 50, background: 'salmon' }}
      />

      <div style={{ height: 50 }} />
      <div style={{  }}>
        {' '}
        {'is in view? ' + inView}
      </div>
      <motion.div
        animate={inView ? 'visible' : 'hidden'}
        variants={variants}
        transition={{ duration: 2, ease: 'easeOut' }}
        ref={ref}
        className={styles.magic}
      />
    </div>
  );
}














export function EvCharging() {
  return (
    <Parallax>
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Electric car charging points.</h1>
        <div className={styles.grid}>
          <div  className={styles.card}>
            <code>
              We have a passion for helping homeowners make the most of cheaper
              environmentally friendly driving. Our fully qualified engineers
              install car charging ports for all makes and models of vehicles to
              an extremely high standard and safety level.
            </code>
          </div>

          <div className={styles.card}>
            <code>
              Our services offer complete regulation installation, certification
              and making good all damages from installation. Part of our brand
              is the ability to return damage caused by installation back to
              original condition with our in house rendering , plastering and
              decorating team.
            </code>
          </div>

          <div
            className={styles.card}>
            <code>
              We are registered to install Rolec, Pod Point and Zappi car
              charging units. But can install to all customers wants with some
              regulation.
            </code>
          </div>
        </div>
      </main>
    </div>
      </Parallax>
  );
}
export default EvCharging