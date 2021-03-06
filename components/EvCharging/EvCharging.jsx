import React, { useState, useEffect, useRef } from 'react';
import {
  useViewportScroll,
  motion,
  useTransform,
} from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from "./EvCharging.module.css";


export function EvChargingHeader() {
  const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 200]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0.5,
    triggerOnce: false
  });



  const variants = {
    visible: { opacity: 1, scale: 1, y: 0 },
    hidden: {
      opacity: 0,
      scale: 0.65,
      y: 50
    }
  };

  return (
    <div className={styles.evContainer}>
      <motion.div
        animate={inView ? 'visible' : 'hidden'}
        variants={variants}
        transition={{ duration: 2, ease: 'easeOut' }}
        ref={ref}
        className={styles.magic}
      >
        <h1 className="title">Electric car charging.
        </h1>
      </motion.div>
    </div>
  );
}





export function EvCharging() {
  return (
        <>
        <EvChargingHeader />
        </>
  );
}
export default EvCharging