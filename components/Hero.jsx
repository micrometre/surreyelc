import Image from 'next/image'
import {Col, Row, Container } from 'react-bootstrap'

function RiverAccessHeader ( ) {
  const src = `/img/logo.png`;
  return (
<div className="container">
  <main>
    <section className="card-list">
      <article className="card">
          <div  className="card">
            <Image
            src={src}
            alt="About picture"
            width={300}
            height={300}
          />
          </div>
        <p className="description">
          Work carried out to the highest of standards.
        </p>
      </article>
        <article className="card">

          <div  className="card">
            <Image
            src={src}
            alt="About picture"
            width={300}
            height={300}
          />
          </div>
        <p className="description">
          Work carried out to the highest of standards.
        </p>



        </article>
          <article className="card">

          <div  className="card">
            <Image
            src={src}
            alt="About picture"
            width={300}
            height={300}
          />
          </div>
        <p className="description">
          Work carried out to the highest of standards.
        </p>
          </article>
    </section>
  </main>
<style jsx>{`
main {
}
.card-list {
}
.card {
}
.description{
}
}
      `}</style>
    </div>
 );
};
export default RiverAccessHeader;
