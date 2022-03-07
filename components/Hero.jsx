import React from "react";
import Image from 'next/image'
import { data } from "../data/paths-data";
import { FaPhone} from 'react-icons/fa'

function RiverAccessHeader ( ) {

  const src = `/img/bathroom2.jpg`;

  return (
<div className="container">
<main>
<section  className="aboutsection">
<div className="container-fluid">
<h2 className="header">About us</h2>
<div className="row">
<div className="col">
          <Image
            src={src}
            alt="Picture of the logo"
            width={342}
            height={172}
            loading="lazy"
            className={'image'}
          />
<p className="descriotion">
With over 25 years’ combined experience,
</p>
</div>
</div>
</div>
</section>
</main>

<style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

  `}</style>

    </div>



  );

};

export default RiverAccessHeader;
