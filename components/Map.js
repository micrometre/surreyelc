import Image from 'next/image'
import Link from 'next/link'

function RiverAccessHeader ( ) {
    const src = `/img/bathroom2.jpg`;

  return (
<div className="container">
<main>
<Image
src="/img/map.jpeg"
alt="About picture"
width={1200}
height={500}
/>
        <Link href="https://goo.gl/maps/HNW7FNaFFqYdAGXv5">
          <a target="_blank">
<h1 className="title">
 Areas we cover
</h1>
          </a>
        </Link>
  <p className="description">
  Esher, Walton on Thames, Weybridge, Claygate,
                East Molesey, Cobham, Hersham, Oxshott, Thames Ditton, Long Ditton,
                Stoke D’Abernon, Hinchley Wood, Downside,
                St Georges Hill, Weston Green, Whiteley Village, Byfleet, West End and Oatlands.
            </p>

</main>
<style jsx>{`
  .container {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  main {
    padding-bottom: 1rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
        }
        .title  {
          color: #0070f3;
          text-decoration: none;
          text-decoration: underline;
        }
        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 3rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.0rem;
        }
      `}</style>
    </div>
 );
};
export default RiverAccessHeader;
