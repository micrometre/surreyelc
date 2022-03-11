import Image from 'next/image'
import Link from 'next/link'

function CopyRight ( ) {
 const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  const year = `${current.getFullYear()}`;
  return (
<div className="river-container">
<main>
<div className="hero-image">
  <div className="hero-text">
    <h1>I am John Doe</h1>
    <h1>I am John Doe</h1>
    <h1>I am John Doe</h1>
    <h1>I am John Doe</h1>
    <h1>I am John Doe</h1>
    <h1>I am John Doe</h1>
    <h1>I am John Doe</h1>
    <h1>I am John Doe</h1>
    <h1>I am John Doe</h1>
    <h1>I am John Doe</h1>
    <h1>I am John Doe</h1>
    <h1>I am John Doe</h1>
    <h1>I am John Doe</h1>
    <h1>I am John Doe</h1>
    <p>And Photographer</p>
    <button>Hire me</button>
  </div>
</div>


</main>
<style jsx>{`
.river-container{
padding: 0rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
 }
 main {
padding-bottom: 0rem;
flex: 1;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
 }

.hero-image{
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(./img/river.jpg);
  height: 50%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;



}

      `}</style>
    </div>
 );
};
export default CopyRight;
