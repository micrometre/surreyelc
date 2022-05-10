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
import styles from "./Logo.module.css";





export function BrandLogo() {
  const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 200]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  const [ref, inView, entry] = useInView({
    threshold: 0.5,
    triggerOnce: false
  });

  console.log(entry);


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
      <motion.div className={styles.box}>
      <motion.div
        animate={inView ? 'visible' : 'hidden'}
        variants={variants}
        transition={{ duration: 2, ease: 'easeOut' }}
        ref={ref}
        className={styles.magic}
      >
                          <h1 className="logo-title">
                        Electrical specialists serving surrey and surrounding areas.
                    </h1>
      </motion.div>
      </motion.div>
    </div>
  );
}














export default BrandLogo