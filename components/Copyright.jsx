import Image from "next/image";
import Link from "next/link";

function CopyRight() {
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  const year = `${current.getFullYear()}`;
  return (
    <div className="container">
      <footer>
        <p className="description">
          Copyright ©{year}
          Painting and Decorating Services Ltd.
        </p>
      </footer>
      <style jsx>{`
      `}</style>
    </div>
  );
}
export default CopyRight;
