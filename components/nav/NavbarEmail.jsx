import React from "react";
import Image from "next/image";
import { data } from "../../data/email-data";
import Styles from "./Navemail.module.css";
import Link from "next/link";
import { FaPhone } from "react-icons/fa";

function NavBarContact({ name, href, ...props }) {
  return (
    <>
      {data.map((e, i) => {
        return (
          <div className={Styles.emaildiv} key={i}>
            {e.contact.map((e, i) => {
              return (
                <a href={e.href} key={i} title={e.title}>
                  <e.icons className={Styles.emailIconStyles} />
                  <span className={Styles.emailIconText}>{e.name}</span>
                </a>
              );
            })}
          </div>
        );
      })}
    </>
  );
}

export default NavBarContact;
