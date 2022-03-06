import Image from 'next/image'
import Link from "next/link";
import { data } from "../../data/phone-data";
import { FaPhone} from 'react-icons/fa';

function NavBarContact( { name, href, ...props }) {
     const phoneLinksStyles = {fontSize: "1.0em",color: "white", };
     const phoneIconStyles = {fontSize: "2.5em",color: "white"};

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
                className="phoneLinksStyles"
                href={e.href}
                key={i}  title={e.title}>
                 <e.icons
                className="phoneIconsStyles"
                 >
                </e.icons>
                  {e.name}
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
.phoneLinksStyles{
    font-size: 0.8rem;
text-decoration: none;
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
