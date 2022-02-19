import React from "react";
import Image from 'next/image'
import { data } from "../../data/paths-data";
import Styles from './Navpaths.module.css'
import Link from "next/link";
import { FaPhone} from 'react-icons/fa';

function NavBarContact( { name, href, ...props }) {
  return (
    <>
      {data.map((e, i) => {
        return (
          <div
            className={Styles.pathsdiv}
            key={i}>
           {e.contact.map((e, i) => {
             return (
               <a style={Styles}
                href={e.href}
                key={i}  title={e.title}>
               <e.icons
                className={Styles.pathsIconStyles}
                />
                  <span className={Styles.pathsIconText}>
                  {e.name}
                  </span>
              </a>
                    );
                    })}
          </div>
          );
          })}
    </>
  );
};

export default NavBarContact;
