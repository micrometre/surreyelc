import Image from "next/image";
import Link from "next/link";

function Exterior() {
  return (
    <div className="exterior-container">
      <main>
        <div className="exterior-title">
          <h1 className="exterior-header">Exterior Decoration</h1>
        </div>
      </main>
      <div className="description">
        <p>
          We offer quality exterior decorating from painting brickwork, doors,
          gates, fences, decking, garden furniture, sheds, and outbuildings to
          balconies, wall boundaries and swimming pools. We cover all aspects of
          exterior finishing including restoration and treatment of windows and
          other woodwork.
        </p>
      </div>
      <style jsx>{`
        .exterior-container {
          padding: 1rem;
          margin: 1rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        main {
          padding: 0rem;
          padding: 0rem;
          margin: 1rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-image: linear-gradient(
              rgba(0, 0, 0, 0.1),
              rgba(0, 0, 0, 0.1)
            ),
            url(./img/3.webp);
          background-repeat: no-repeat;
          background-size: cover;
          position: relative;
          width: 100%;
          min-height: 60vh;
        }
        .exterior-title,
        exterior-description {
          margin: 1rem;
          color: white;
          font-weight: 300;
          font-size: 1.5rem;
        }
        .description {
          padding: 1rem;
          padding: 0.45rem;
          margin: 0.45rem;
        }
        p {
          padding: 1rem;
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
export default Exterior;
