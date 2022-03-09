import Image from 'next/image'
import {Col, Row, Container } from 'react-bootstrap'

function RiverAccessHeader ( ) {
    const src = `/img/bathroom2.jpg`;

  return (
<div className="container">
  <main>
    <div className="main">
  <h1>Our Promise
</h1>
          <p className="intro-header">
            Full client satisfaction with thorough walk through and final inspection before completion.
          </p>
  <ul className="cards">
    <li className="cards_item">
      <div className="card">
        <div className="card_image">
            <Image
            src={src}
            alt="About picture"
            width={500}
            height={300}
          />
        </div>
        <div className="card_content">
          <p className="card_text">
            Work carried out to the highest of standards.
          </p>
        </div>
      </div>
    </li>
    <li className="cards_item">
      <div className="card">
        <div className="card_image">
            <Image
            src={src}
            alt="About picture"
            width={500}
            height={300}
          />
        </div>
        <div className="card_content">
          <p className="card_text">
We remain clean and organised throughout. Thorough cleaning will be carried out on completion.
          </p>
        </div>
      </div>
    </li>

    <li className="cards_item">
      <div className="card">
        <div className="card_image">
            <Image
            src={src}
            alt="About picture"
            width={500}
            height={300}
          />
        </div>
        <div className="card_content">
          <p className="card_text">
            Your home will be treated with the utmost respect.
          </p>
        </div>
      </div>
    </li>


  </ul>
</div>

<h3 className="made_by">Made with ♡</h3>
  </main>
<style jsx>{`
main {
}


/* Font */
@import url('https://fonts.googleapis.com/css?family=Quicksand:400,700');

/* Design */
*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  background-color: #ecf9ff;
}

body {
  color: #272727;
  font-family: 'Quicksand', serif;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0;
  padding: 1rem;
}

.main{
  max-width: 1200px;
  margin: 0 auto;
}

.intro-header{

  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: capitalize;
  margin: 0px;

}
h1 {
    font-size: 24px;
    font-weight: 400;
    text-align: center;
}


.btn {
  color: #ffffff;
  padding: 0.8rem;
  font-size: 14px;
  text-transform: uppercase;
  border-radius: 4px;
  font-weight: 400;
  display: block;
  width: 100%;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: transparent;
}

.btn:hover {
  background-color: rgba(255, 255, 255, 0.12);
}

.cards {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
}

.cards_item {
  display: flex;
  padding: 1rem;
}

@media (min-width: 40rem) {
  .cards_item {
    width: 50%;
  }
}

@media (min-width: 56rem) {
  .cards_item {
    width: 33.3333%;
  }
}

.card {
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.card_content {
  padding: 1rem;
  background: linear-gradient(to bottom left, #EF8D9C 40%, #FFC39E 100%);
}

.card_title {
  color: #ffffff;
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: capitalize;
  margin: 0px;
}

.card_text {
  color: #ffffff;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 1.25rem;
  font-weight: 400;
}
.made_by{
  font-weight: 400;
  font-size: 13px;
  margin-top: 35px;
  text-align: center;
}


      `}</style>
    </div>
 );
};
export default RiverAccessHeader;
