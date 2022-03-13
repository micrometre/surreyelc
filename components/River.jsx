import Image from "next/image";
import Link from "next/link";

function CopyRight() {
  return (
    <div className="river-container">
      <main>
        <div className="river-title">
          <h1 className="river-header">
            We can access hard-to-reach areas like riverside properties and
            islands via a boat.
          </h1>
          <p className="river-description">
            All our services are available to these properties.
          </p>
        </div>
      </main>
      <style jsx>{`
        .river-container {
          min-height: 64vh;
          padding: 1rem;
          margin: 0.4rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        main {
          padding: 1rem;
          margin: 0rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-image: linear-gradient(
              rgba(0, 0, 0, 0.3),
              rgba(0, 0, 0, 0.2)
            ),
            url(./img/river.jpg);
          background-repeat: no-repeat;
          background-size: cover;
          position: relative;
          width: 100%;
        }
        .river-title, river-description {
          margin: 1rem;
          color: white;
          font-weight: 300;
          font-size: 1.5rem;
        }
      `}</style>
    </div>
  );
}
export default CopyRight;
