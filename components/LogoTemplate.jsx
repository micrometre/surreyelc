import Image from "next/image";
import Link from "next/link";

export function LogoImage() {
  return (
    <>
      <div className="logodiv">
      </div>
      <style jsx>{`
        .logodiv {
          background-image:
            url(./images/logo.webp);
          background-repeat: no-repeat;
          background-size: auto;
          background-position: center;
          width: 100%;
          min-height: 65vh;
          margin-top: 10rem;
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

export default LogoImage;