import Image from 'next/image'
import {Col, Row, Container } from 'react-bootstrap'

function RiverAccessHeader ( ) {
  const src = `/img/bathroom2.jpg`;
  return (
    <div className="container">
      <main>
        <h1 className="title">
          About us
        </h1>
        <div className="grid">
          <div  className="card">
            <Image
            src={src}
            alt="About picture"
            width={500}
            height={300}
          />
          </div>
          <div  className="card">
            <p className="description">
With over 25 years’ combined experience,
              <br />
We pride ourselves in providing the highest quality finish

              to meet any individual’s vision.
              <br />
With our clients’ interests always remaining at the forefront of our business.
              <br />We are always clean and efficient With a professional manner to keep disruption and stress to our clients and family to a minimum.
            </p>
          </div>
        </div>
      </main>
      <style jsx>{`



        .container {
          padding: 1rem;
        }
        main {
          box-sizing: border-box;
          padding: 1rem ;
        }
        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }
        .title,
        .description {
          text-align: center;
        }
        .description {
    text-align: var(--bs-body-text-align);
    font-family: font-sans-serif;
    margin-top: 0;
    font-size: 1.25rem;
    margin-bottom: 3rem!important;
    font-weight: 400!important;
    --bs-text-opacity: 1;
        }
        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          margin-top: 3rem;
        }
        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.0rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
           border: 5px solid #eaeaea;

          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
          display: flex;
          flex-direction: column;
        }
        .card p {
          margin: 0;
          line-height: 1.5;
    font-family: font-sans-serif;
    box-sizing: border-box;
    margin-top: 0;
    font-size: 1.25rem;
    margin-bottom: 3rem!important;
    font-weight: 400!important;
    color: #6c757d!important;
        }
        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>
    </div>

 );

};

export default RiverAccessHeader;
