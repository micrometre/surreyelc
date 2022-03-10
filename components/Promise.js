import Image from 'next/image'

function RiverAccessHeader ( ) {
    const src = `/img/bathroom2.jpg`;

  return (
<div className="container">
  <main>
    <div className="main">
  <h1>Our Promise
</h1>
<h2 className="made_by">
            Full client satisfaction with thorough walk through and final inspection before completion.
</h2>
  <ul className="cards">
    <li className="cards_item">
      <div className="card">
        <div className="card_image">
            <Image
            src="/img/kitchen-2.webp"
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
            src="/img/kitchen-3.webp"
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
            src="/img/leavingroom-1.webp"
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
  <h1>
                Customers satisfaction is our top priority.

</h1>
</div>
  </main>
<style jsx>{`
.main{
  background-color: #6c757d;
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
    font-size: 3rem;
    font-weight: 300;
    text-align: center;
  color: #ffffff;
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
  background-color: #6c757d;
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.card_content {
  padding: 1rem;
  background: linear-gradient(to bottom left, ##6c757d 30%, #6c757d 100%);
}


.card_text {
  color: #ffffff;
  font-size: 1.275rem;
  line-height: 1.5;
  margin-bottom: 1.25rem;
  font-weight: 300;
}
.made_by{
  font-weight: 300;
  font-size: 1.45rem;
  margin-top: 35px;
  text-align: center;
  color: #ffffff;
}



`}</style>
    </div>
 );
};
export default RiverAccessHeader;
