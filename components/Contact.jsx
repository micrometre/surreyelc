import Image from "next/image";
import Link from "next/link";
import { data } from "../data/phone-data";
const phoneLinksStyles = {
  fontSize: "0.9rem",
  color: "black",
  margin: "0.05rem",
  textDecoration: "none",
};

function Contact() {
  return (
    <div className="about-container">
      <main>
        <h2 className="title">Contact us</h2>
        <div className="row">
          <div className="column">
            <div>
              <h3 className="contact-title"> </h3>
              <p className="contact-description">
                The easiest way to contact us is by giving us a call to arrange
                a viewing of the work and a no-obligation quote.
              </p>
            </div>
          </div>
          <div className="column">
            <p className="contact-description">
              Alternatively, you can email us at info@elmbridgepainting
              <br />
              Please provide your name and telephone contact details in the
              email so we can get back to you at the very earliest opportunity.
              We are also on Facebook, Instagram and Twitter.
            </p>
          </div>
        </div>

          <div className="contact-details">
            Address: 44 Clarks Ln, Halstead
            <br />
            Sevenoaks TN14 7DQ
            Business Hours
            <br />
            Monday-Friday from 07:30am - 7pm
            <br />
            Saturday-Sunday from 07:30am - 7pm
          </div>
      </main>

      <style jsx>{`
        .about-container {
          padding: 0.1rem;
          margin-top: 8.9rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 2rem;
          margin: 1rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          border: 5px solid yellow;
          flex-basis: 60%;
          border: 1px solid #ffffff;
        }
        .column {
          float: left;
          width: 50%;
          padding: 10px;
          border: 1px solid #ffffff;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
          background: #ffffff;
        }

        .row:after {
          content: "";
          display: table;
          clear: both;
        }

        .title {
          text-decoration: none;
          margin: 1rem;
          font-size: 4rem;
          text-align: center;
        }

        p {
          line-height: 1.7;
          font-size: 1.09rem;
          margin: 0.5rem;
          flex-basis: 45%;
          padding: 0.5rem;
          text-align: left;
          text-decoration: none;
          margin: 1rem;
          flex-basis: 60%;
          padding: 1.5rem;
          color: inherit;
          text-decoration: none;
        }
        .contact-details {
          border: 1px solid black;
                    margin: 0rem;
          padding: 1.4rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #ffffff;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        }
        @media screen and (max-width: 600px) {
          .column {
            width: 100%;
          }
          p {
            line-height: 1.8;
          }
        }
      `}</style>
    </div>
  );
}
export default Contact;
