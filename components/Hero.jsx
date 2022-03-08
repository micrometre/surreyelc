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
          <a href="https://nextjs.org/docs" className="card">
                     <Image
            className="d-block w-100"
            src={src}
            alt="First slide"
            width={1500}
            height={700}
          />
          </a>
          <a href="https://nextjs.org/learn" className="card">
            <p>
With over 25 years’ combined experience,
We pride ourselves in providing the highest quality finish
to meet any individual’s vision.
With our clients’ interests always remaining at the forefront of our business.
We are always clean and efficient With a professional manner to keep disruption and stress to our clients and family to a minimum.
            </p>
          </a>
        </div>
      </main>
      <style jsx>{`
        .container {
          padding: 1rem;
        }
        main {
          padding: 1rem ;
        }
        a {
          display: flex;
          justify-content: center;
          align-items: center;
          color: inherit;
          text-decoration: none;
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
          line-height: 1.5;
          font-size: 1.5rem;
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
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
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

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>

 );

};

export default RiverAccessHeader;
