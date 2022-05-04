import Image from "next/image";
import Link from "next/link";

function CopyRight() {
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  const year = `${current.getFullYear()}`;
  return (
      <>
        <div className="copyright">
              Copyright ©{year}
              <span>electricalsurrey.com</span>
      </div>
      <style jsx>{`
      .copyright {
          width: 100%;
          display: flex;
          padding: 0rem;
          margin: 3rem;
          color:  #fff;
          justify-content: center;
          align-items: center;
        }
        @media (max-width: 990px) {
          .copyright{
            font-size: 0.9rem;
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}
export default CopyRight;
