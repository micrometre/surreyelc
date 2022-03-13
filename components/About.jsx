import Image from "next/image";
import Link from "next/link";

function AboutUs() {
  return (
    <div className="about-container">
      <main>
  <h2 className="title">
        About us</h2>
        <div className="row">
          <div className="column">
            <Image
              src="/img/4.webp"
              alt="logo"
              width={492}
              height={288}
              priority
            />
          </div>
          <div className="column">
            <p>
              With over 25 years’ combined experience,
              <br />
              We pride ourselves in providing the highest quality finish to meet
              any individual’s vision.
              <br />
              With our clients’ interests always remaining at the forefront of
              our business.
              <br />
              We are always clean and efficient With a professional manner to
              keep disruption and stress to our clients and family to a minimum.
            </p>
          </div>
        </div>
      </main>

      <style jsx>{`
        .about-container {
          padding: 0.1rem;
          margin-top: 2.9rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 2rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .column {
          float: left;
          width: 50%;
          padding: 10px;
        }

        .row:after {
          content: "";
          display: table;
          clear: both;
        }

        .title {
          text-decoration: none;
          margin: 1;
          line-height: 1.15;
          font-size: 4rem;
          text-align: center;
        }

        @media screen and (max-width: 600px) {
          .column {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
export default AboutUs;
