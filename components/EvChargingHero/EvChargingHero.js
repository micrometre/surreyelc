import Link from "next/link";
import Image from "next/image";
import * as styles from "../../components/EvChargingHero/EvChargingHero.module.css";
const links = [
  {
    description:
      "We have a passion for helping homeowners make the most of cheaper environmentally friendly driving."
  },
];

export function EvChargingHero() {
  return (
    <div className={styles.descriptionSection}>
      <ul className={styles.list}>
        {links.map((link, i) => (
          <li key={i} className={styles.listItem}>
            <h2 key={link.description} className={styles.listItemDescription}>{link.description}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EvChargingHero;
