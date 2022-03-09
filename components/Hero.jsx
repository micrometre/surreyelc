import Image from 'next/image'
import {Col, Row, Container } from 'react-bootstrap'

function RiverAccessHeader ( ) {
  const src = `/img/bathroom2.jpg`;
  return (
<div className="container">

  <main>

    <section className="card-list">

      <article className="card">

      </article>

        <article className="card">

        </article>

          <article className="card">

          </article>

    </section>

  </main>
<style jsx>{`
main {
background: yellow;
flex: 1;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-bottom: 14rem;
}
.card-list {
display: flex;
flex-direction: row;
margin: 3rem;
}
.card {
margin: 1rem;
flex-basis: 45%;
padding: 2.5rem;
text-align: left;
color: inherit;
text-decoration: none;
border: 1px solid #eaeaea;
border-radius: 10px;
transition: color 0.15s ease, border-color 0.15s ease;
background: #17141d;
}
}
      `}</style>
    </div>
 );
};
export default RiverAccessHeader;
