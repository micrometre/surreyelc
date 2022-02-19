import Image from 'next/image'
import { data } from "../../data/social-data";
import Styles from './Navsocial.module.css'
import Link from "next/link";
import { FaPhone} from 'react-icons/fa';

function NavBarContact( { name, href, ...props }) {
  return (
    <>
      {data.map((e, i) => {
        return (
          <div
            className={Styles.socialdiv}
            key={i}>
           {e.socialLinks.map((e, i) => {
             return (
               <a style={Styles}
                href={e.href}
                key={i}  title={e.title}>
               <e.icons
                className={Styles.socialIconStyles}
                />
                  <span className={Styles.spcialIconText}>
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
