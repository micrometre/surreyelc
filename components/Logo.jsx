import Image from "next/image";
import Link from "next/link";

function CopyRight() {
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  const year = `${current.getFullYear()}`;
  return (
    <div className="river-container">
      <main>
        <div className="hero-image">
          <div className="hero-text">
            <h1 className="hero-title">
              We can access hard-to-reach areas like riverside properties and
              islands via a boat.
            </h1>
            <p className="hero-decripion">And Photographer</p>
          </div>
        </div>
      </main>
      <style jsx>{`
        .river-container {
          padding: 0rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        main {
          padding-bottom: 0rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .hero-image {
          padding: 8rem;
          background-image: linear-gradient(
              rgba(0, 0, 0, 0.3),
              rgba(0, 0, 0, 0.2)
            ),
            url(./img/river.jpg);
          height: 50%;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          position: relative;
          font-family: Oxygen, sans-serif;
        }

        .hero-title {
          font-size: 4rem;
          color: #fff;
        }

        .hero-text {
        }
      `}</style>
    </div>
  );
}
export default CopyRight;
