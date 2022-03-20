import Image from "next/image";
import Link from "next/link";

function CopyRight() {
  return (
    <div className="interior-container">
      <main>
        <div className="interior-grid">
          <div className="img-container">
            <Image
              src="/img/1.webp"
              alt="Locations Map picture"
              width={1200}
              height={500}
            />
            <div className="centered">Centered</div>
          </div>
        </div>
      </main>
      <style jsx>{`
        .interior-container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 0rem;
          margin-top: 8.5rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
          color: #0070f3;
          text-decoration: none;
        }

        .description {
          text-align: center;
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          padding: 1.5rem;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        /* Container holding the image and the text */
        .container {
          position: relative;
          text-align: center;
          color: white;
        }

        /* Bottom left text */
        .bottom-left {
          position: absolute;
          bottom: 8px;
          font-size: 7.25rem;
          left: 16px;
        }

        /* Top left text */
        .top-left {
          position: absolute;
          top: 8px;
          bottom: 8px;
          left: 16px;
          font-size: 7.25rem;
        }

        /* Top right text */
        .top-right {
          position: absolute;
          top: 8px;
          right: 16px;
          font-size: 7.25rem;
        }

        /* Bottom right text */
        .bottom-right {
          position: absolute;
          bottom: 8px;
          right: 16px;
          font-size: 7.25rem;
        }

        /* Centered text */
        .centered {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 7.25rem;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
}
export default CopyRight;
