import Link from "next/link";
import Image from "next/image";
import * as styles from "../../components/EvChargingServices/EvChargingDescription.module.css";
const links = [
  {
    description:
      " Our fully qualified engineers install car charging ports for all makes and models of vehicles to an extremely high standard and safety level.",
  },

  {
    description:
      "We are registered to install Rolec, Pod Point and Zappi car charging units. But can install to all customers wants with some regulation.",
  },
  {
    description:
      "Our services offer complete regulation installation, certification and making good all damages from installation.",
  },
  {
    description:
      "Part of our brand is the ability to return damage caused by installation back to original condition with our in house rendering , plastering and decorating team.",
  },

];

export function EvChargingDescription() {
  return (
    <div className={styles.descriptionSection}>
      <div className={styles.textCenter}>
        <h1>
          We have a passion for helping homeowners make the most of cheaper environmentally friendly driving.
        </h1>
      </div>
      <ul className={styles.list}>
        {links.map((link, i) => (
          <li key={i} className={styles.listItem}>
            <p key={link.description} className={styles.listItemDescription}>{link.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EvChargingDescription;
