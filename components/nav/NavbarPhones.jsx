import React from "react";
import Image from 'next/image'
import { data } from "../../data/phone-data";
import Styles from './Navphones.module.css'
import Link from "next/link";
import { FaPhone} from 'react-icons/fa';

function NavBarContact( { name, href, ...props }) {
     const phoneLinksStyles = {fontSize: "1.0em",color: "white", };
     const phoneIconStyles = {fontSize: "1.0em",color: "white"};

  return (
    <>
      {data.map((e, i) => {
        return (
          <div
            className="phonesdiv"
            key={i}>
           {e.contact.map((e, i) => {
             return (
               <a
                style={phoneLinksStyles}
                href={e.href}
                key={i}  title={e.title}>
               <e.icons
                className="phoneLinksStyles"
                />
                  <span className="phoneIconLinks"
                style={phoneIconStyles}
                  >
                  {e.name}
                  </span>
              </a>
                    );
                    })}
          </div>
          );
          })}

      <style jsx>{`

.phonesdiv{
position: fixed;
bottom: 0;
z-index: 1030;
width: 100vw;
height: 3rem;
width: 100%;
display: flex;
align-items: center;
justify-content: space-evenly;
background-color: #6c757d;
border: 4px solid yellow;
border-radius: 11px;
text-decoration: none;
padding: 0rem;
    font-size: 1.4rem;
}

@media (max-width: 990px) {
.phonesdiv {
text-decoration: none;
    font-size: 0.8rem;
    }
}



      `}</style>
    </>
  );
};

export default NavBarContact;
