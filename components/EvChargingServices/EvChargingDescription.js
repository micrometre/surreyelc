import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import * as styles from "../../components/EvChargingServices/EvChargingDescription.module.css";



const links = [
  {
    text: "Tutorial",
    description:
      " Our fully qualified engineers install car charging ports for all makes and models of vehicles to an extremely high standard and safety level.",
  },
  {
    text: "Examples",
    description:
    "Our services offer complete regulation installation, certification and making good all damages from installation.",
  },
  {
    text: "Plugin Library",
    description:
      "We are registered to install Rolec, Pod Point and Zappi car charging units. But can install to all customers wants with some regulation.",
  },
  {
    text: "Examples",
    description:
    "Part of our brand is the ability to return damage caused by installation back to original condition with our in house rendering , plastering and decorating team.",
  },

];


const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`;

export function EvChargingDescription() {
  return (
    <div style={{
      background: "#fafafa",
      borderRadius:5,
      padding: "0.75rem",

    }}> 
      <div title="Home" />
      <div className={styles.textCenter}>
        <h1>
        We have a passion for helping homeowners make the most of cheaper environmentally friendly driving.
        </h1>
        <p className={styles.intro}>
        </p>
      </div>
      <ul className={styles.list}>
        {links.map((link) => (
          <li key={link.url} className={styles.listItem}>
            <a
              className={styles.listItemLink}
              href={`${link.url}${utmParameters}`}
            >
            </a>
            <p className={styles.listItemDescription}>{link.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EvChargingDescription;
