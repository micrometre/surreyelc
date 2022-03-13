import Image from "next/image";
import Link from "next/link";

function CopyRight() {
  return (
    <div className="river-container">
      <main>
        <div className="river-title">
          <h1 className="river-header">Painting Decoration.</h1>
        </div>
      </main>
      <div className="description">
        <p>
          We provide high quality services for domestic and commercial clients
          from the smallest rooms to the largest houses and properties. Our
          skills and quality are second to none providing a flawless finish
          every time no matter how large or small the job. Paint comes in a
          variety of makes,colours and finishes and choosing the right one for
          you can prove tricky but we will be on hand to assist you to create
          your perfect room.
        </p>
      </div>
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
            url(./img/4.webp);
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
          padding: 1rem;
          margin: 2rem;
        }
        p {
          line-height: 1.7;
        }
      `}</style>
    </div>
  );
}
export default CopyRight;
