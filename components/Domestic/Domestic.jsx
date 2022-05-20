
import Link from "next/link";
import Image from "next/image";
import * as styles from "../../components/Domestic/Domestic.module.css";

const links = [
  {
    description:
      "Full domestic rewires. Consumer unit chargers, Periodic test & inspections.",
  },

];
export function Domestic() {
  return (
    <div  className={styles.container}>
      <div
        className={styles.main}>
        <div
          className={styles.description}>
          <h2 className={styles.title}
          >
            FREE QUOTATIONS.
          </h2>
          <ul
            className={styles.list}>
            {links.map((link, i) => (
              <li key={i} className={styles.list}
                style={{ listStyleType: "none"}}>
                <p key={link.description} className={styles.list}
                >{link.description}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.row}>
          <div className={styles.column}>
            <div className={styles.card}>
              <Image
                src="/images/1.webp"
                alt="About picture"
                width={500}
                height={300}
              />
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.card}>
              <Image
                src="/images/3.webp"
                alt="About picture"
                width={500}
                height={300}
              />
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.card}>
              <Image
                src="/images/7.webp"
                alt="About picture"
                width={500}
                height={300}
              />
            </div>
          </div>
          <h2 className={styles.title}>
            Lighting installations of all types.
          </h2>
        </div>
      </div>
    </div>
  );
}
export default Domestic;