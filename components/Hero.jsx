
import Image from "next/image";
import Link from "next/link";

function CopyRight() {
  return (
    <div className="river-container">
      <main>
        <div className="river-title">
          <h1 className="river-header">
            Interior
Decoration
          </h1>
        </div>
      </main>
      <style jsx>{`
        .river-container {
          min-height: 64vh;
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
            url(./img/6.webp);
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
