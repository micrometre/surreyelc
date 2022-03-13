import Image from "next/image";
import Link from "next/link";

function Interior() {
  return (
    <div className="interior-container">
      <main>
        <div className="interior-title">
          <h1 className="interior-header">Interior Decoration</h1>
        </div>
      </main>
      <div className="description">
        <p>
          We cover all aspects of interior decorating from single rooms to
          mansions. This includes restoration of woodwork, wooden windows and
          any re-siliconing that is required around your property. Whether it be
          living areas, kitchens, bedrooms, bathrooms, communal areas or garages
          we will provide the perfect finish to your dream home or project.
        </p>
      </div>
      <style jsx>{`
        .interior-container {
          padding: 1rem;
          margin: 1rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        main {
          padding: 0rem;
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
            url(./img/6.webp);
          background-repeat: no-repeat;
          background-size: cover;
          position: relative;
          width: 100%;
          min-height: 60vh;
        }
        .interior-title,
        interior-description {
          margin: 1rem;
          color: white;
          font-weight: 300;
          font-size: 1.5rem;
        }
        .description {
          padding: 0.45rem;
          margin: 0.45rem;
        }
        p {
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
export default Interior;
