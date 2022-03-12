import Image from "next/image";
import Link from "next/link";

function CopyRight() {
  return (
    <div className="river-container">
      <main>
        <div className="title">
          <h1>Documentation &rarr;</h1>
        </div>
      </main>
      <style jsx>{`
        .river-container {
          min-height: 70vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        main {
          padding: 5rem 0;
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
        }

        .title {
          color: white;
          font-size: 2.5rem;
          border: 1px solid #eaeaea;
        }

        .card {
          margin: 1rem;
          padding: 1.5rem;
          text-align: left;
          text-decoration: none;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }
        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
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
