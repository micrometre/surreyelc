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
          min-height: 70vh;
          padding: 1rem;
          margin: 1rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        main {
          padding: 1rem;
          margin: 1rem;
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
        .river-title {
          color: white;
          border: 1px solid #eaeaea;
        }

        @media (max-width: 600px) {
          .river-container {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
}
export default CopyRight;
