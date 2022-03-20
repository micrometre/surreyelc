import Image from "next/image";
import Link from "next/link";

function AreasMap() {
  const src = `/img/bathroom2.jpg`;

  return (
    <div className="map-container">
      <main>
        <Image
          src="/img/map.jpeg"
          alt="Locations Map picture"
          width={1200}
          height={500}
        />
        <Link href="https://goo.gl/maps/HNW7FNaFFqYdAGXv5">
          <a target="_blank" rel="noreferrer">
            <h1 className="title">Areas we cover</h1>
          </a>
        </Link>
        <p className="description">
          Esher, Walton on Thames, Weybridge, Claygate, East Molesey, Cobham,
          Hersham, Oxshott, Thames Ditton, Long Ditton, Stoke D’Abernon,
          Hinchley Wood, Downside, St Georges Hill, Weston Green, Whiteley
          Village, Byfleet, West End and Oatlands.
        </p>
      </main>
      <style jsx>{`
        .map-container {
          padding: 1rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 100%;
        }
        main {
          padding-bottom: 0.1rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .title {
          color: #008080;
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
          font-size: 1rem;
        }
      `}</style>
    </div>
  );
}
export default AreasMap;
