import Image from "next/image";
import Link from "next/link";

function CopyRight() {
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  const year = `${current.getFullYear()}`;
  return (
    <div className="copyright-container">
      <main>
        <div className="copyright-grid">
          <div href="https://nextjs.org/docs" className="copyright-card">
            <p className="description">
              Copyright ©{year}
              <code>Elmbridge Painting and Decorating Services Ltd.</code>
            </p>
          </div>
        </div>
      </main>
      <style jsx>{`
        .container {
          padding:  0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding:  0.5rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin-bottom:  2.0rem;
        }


        .description {
          text-align: center;
          text-decoration: none;
          color: inherit;
          line-height: 1.3;
          font-size: 0.8rem;
        }

        code {
          border-radius: 5px;
          padding: 0.75rem;
          color: #008080;
          font-size: 0.7rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .Copyright-grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          margin:  0.5rem;
        }

        .copyright-card {
          text-decoration: none;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
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
