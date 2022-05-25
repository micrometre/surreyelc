import Image from 'next/image';
import {
  useViewportScroll,
  motion,
  useTransform,
} from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from "./CommercialMoto.module.css";


export function CommercialMoto() {
  const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 200]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);
  const [ref, inView, entry] = useInView({
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
    <div className={styles.commercialContainer}>
      <motion.div
        animate={inView ? 'visible' : 'hidden'}
        variants={variants}
        transition={{ duration: 2, ease: 'easeOut' }}
        ref={ref}
        className={styles.magic}
      >
        <h1 className={styles.title}>
        Full Electrical service for  Commercial properties.
        </h1>
      </motion.div>
    </div>
  );
}




export default CommercialMoto;