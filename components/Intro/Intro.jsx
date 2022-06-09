
import Link from "next/link";
import Image from "next/image";


export function Intro() {
  return (
    <div className="intro-container">
      <main>
        <h4 className="intro-description">

          Surrey electrical and car charging offer a full electrical service for all domestic and commercial properties. Our fully qualified engineers work to regulation standards in design, installation and niceic certification.


        </h4>

        <div className="intro-row">
          <div className="intro-column">
            <div className="intro-card">
              <Image
                src="/images/17.webp"
                alt="About picture"
                width={500}
                height={300}
              />
              <h4 className="intro-description">
                We work a to very high standard and pride ourselves on being 100% honest.
              </h4>
            </div>
          </div>

          <div className="intro-column">
            <div className="intro-card">
              <Image
                src="/images/15.webp"
                alt="About picture"
                width={500}
                height={300}
              />
              <h4 className="intro-description">
                We are always dependable and time keeping is one of strongest points.
              </h4>
            </div>
          </div>

          <div className="intro-column">
            <div className="intro-card">
              <Image
                src="/images/5.webp"
                alt="About picture"
                width={500}
                height={300}
              />
              <h4 className="intro-description">
                Care and attention to our clients is something that sets us apart .
              </h4>
            </div>
          </div>
        </div>



      </main>
      <style jsx>{`
        .intro-container {
          margin-top: 1rem;
          padding: 0.1rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: #ffffff;

        }
        main {
          padding: 0.1rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .intro-column {
          float: left;
          width: 33%;
          padding: 0 10px;
        }

        .intro-row {
          margin: 0 -5px;
        }

        .intro-row:after {
          content: "";
          display: table;
          clear: both;
        }


        .intro-card {
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          padding: 0px;
          text-align: left;
          background-image: url('/images/darkbg.jpg');
        }


        .domstic-description {
          line-height: 1.5;
          text-align: left;
        }
        
        @media screen and (max-width: 600px) {
          .intro-column {
            width: 100%;
            display: block;
            margin-bottom: 20px;
          }
           .comestic-description {
    text-align: left;
    line-height: 1.5;
  }
        }
      `}</style>
    </div>
  );
}

export default Intro;