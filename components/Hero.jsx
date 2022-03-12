import Image from "next/image";
import Link from "next/link";

function CopyRight() {
  return (
    <div className="moto-container">
      <main>
        <h1 className="title">
          Professional Painters and Decorators in Elmbridge and surrounding
          areas.
        </h1>
      </main>

      <style jsx>{`
        .moto-container {
          min-height: 100vh;
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
        }
        .title {
          text-decoration: none;
          line-height: 1.15;
          font-size: 4rem;
          text-align: center;
    margin-top: 1.15rem;
    letter-spacing: 2px;
    font-weight: 300;
    margin-bottom: 1.5rem!important;
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
