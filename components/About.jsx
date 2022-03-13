import Image from "next/image";
import Link from "next/link";

function AboutUs() {
  return (
    <div className="about-container">
      <main>
        <div id="about-box">
          <h1>About us</h1>
          <article className="row" id="idea-one">
            <div>
              <Image
                src="/img/bathroom2.webp"
                alt="logo"
                width={329}
                height={188}
                priority
              />
            </div>
            <div>
              <p className="description">
                With over 25 years’ combined experience,
                <br />
                We pride ourselves in providing the highest quality finish to
                meet any individual’s vision.
                <br />
                With our clients’ interests always remaining at the forefront of
                our business.
                <br />
                We are always clean and efficient With a professional manner to
                keep disruption and stress to our clients and family to a
                minimum.
              </p>
            </div>
          </article>
        </div>
      </main>

      <style jsx>{`
        main {
          border: 5px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
          padding: 1rem;
        }
        #about-box {
          background: #fff;
          padding: 40px 0px 80px;
          font-family: "Open Sans", sans-serif;
        }
        #about-box h1 {
          text-align: center;
        }
        #about-box h3 {
          font-size: 26px;
        }

        article.row {
          width: 100%;
          max-width: 900px;
          margin: 0 auto;
        }
        article.row div {
          width: 49.4%;
          display: inline-block;
          position: relative;
        }

        #idea-one img {
          position: absolute;
          bottom: -20px;
          left: 50px;
        }
        @media (max-width: 750px) {
          article.row div {
            min-width: 300px;
            width: 90%;
            margin: 0 5%;
            text-align: center;
            display: block;
          }
          #about-other-box h3 {
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
}
export default AboutUs;
