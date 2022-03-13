import Image from "next/image";
import Link from "next/link";

function Comercial() {
  return (
    <div className="commercial-container">
      <main>
        <div className="river-title">
          <h1 className="river-header">Comercial Decoration</h1>
        </div>
      </main>
      <div className="description">
        <p>
          We provide high quality services for commercial clients from the
          smallest rooms to the largest of properties. We offer full support for
          new businesses starting up or any restoration project ranging from
          gyms, hair salons and restaurants to offices. We offer out of hours
          services with flexible evening and weekend hours to work around your
          business needs and keep any disruption to a minimum.
        </p>
      </div>
      <style jsx>{`
        .commercial-container {
          padding: 1rem;
          margin-top: 1rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        main {
          padding: 0rem;
          margin: 0rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-image: linear-gradient(
              rgba(0, 0, 0, 0.1),
              rgba(0, 0, 0, 0.1)
            ),
            url(./img/saloon.jpg);
          background-repeat: no-repeat;
          background-size: cover;
          position: relative;
          width: 100%;
          min-height: 60vh;
        }
        .river-title,
        river-description {
          margin: 1rem;
          color: white;
          font-weight: 300;
          font-size: 1.5rem;
        }
        .description {
          padding: 0.45rem;
          margin: 0.45rem;
        }
        p {
          line-height: 1.7;
          font-size: 1.09rem;
          margin: 0.1rem;
          padding: 0.1rem;
          text-decoration: none;
        }
      `}</style>
    </div>
  );
}
export default Comercial;
