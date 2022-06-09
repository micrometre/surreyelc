import Image from 'next/image';
import {
  useViewportScroll,
  motion,
  useInvertedScale,
} from 'framer-motion';
import styles from "./CommercialHero.module.css";



export function CommercialHero() {
  return (
    <motion.div>
      <div className={styles.commercialContainer}>
        <div className={styles.main}>
          <div className={styles.row}>
            <div className={styles.column}>
              <Image
                src="/images/9.webp"
                alt="About picture"
                width={500}
                height={300}
              />
            </div>
            <div className={styles.column}>
              <Image
                src="/images/10.webp"
                alt="About picture"
                width={500}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>
        <p className={styles.description}>

          Maintenance contracts
          all electrical installations.
          Consumer unit distribution board units.
          Periodic test + inspections
          Emergency lighting test.
          Out of hours work for customer convenience.
        </p>

    </motion.div>
  );
}




export default CommercialHero;