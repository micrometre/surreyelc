import Image from "next/image";
import Link from "next/link";

export function Moto() {
  return (
    <>
      <div className="logodiv">
      <h1 className="logotitle">
        Electrical specialists serving surrey and surrounding areas.
        </h1>
      </div>
      <style jsx>{`
        .logodiv {
          width: 100%;
          min-height: 65vh;
          margin-top: 5rem;
          border: 1rem solid teal;
        }
        .logotitle{
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          color: #fff;
          transition: color 0.15s ease, border-color 0.15s ease;
          font-weight: 500;
          font-size: 5.5rem;

        }

        @media (max-width: 600px) {
          .logotitle {
          font-size: 2.5rem;
            flex-direction: column;
          }
        }

      `}</style>
    </>
  );
}

export default Moto;