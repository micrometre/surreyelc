import Image from "next/image";
import Link from "next/link";
import { data } from "../data/phone-data";
import { emaildata } from "../data/email-data";
import { socialdata } from "../data/social-data";
import { FaPhone } from "react-icons/fa";
const phoneIconStyles = {
  fontSize: "0.9rem",
  color: "black",
  margin: "0.1rem",
  textDecoration: "none",
};

const phoneLinksStyles = {
  fontSize: "1.6rem",
  color: "teal",
  margin: "0.1rem",
  textDecoration: "none",
  display: "flex",
};
const emailIconStyles = {
  fontSize: "0.9rem",
  color: "black",
  margin: "0.1rem",
  textDecoration: "none",
};
const emailLinksStyles = {
  fontSize: "1.4rem",
  color: "black",
  margin: "0.1rem",
  textDecoration: "none",
};

const socialIconStyles = {
  fontSize: "1.4em",
  color: "black",
  margin: "0.1rem",
  padding: "0.5rem",
};
function Contact() {
  return (
    <div className="about-container">
      <main>
        <div className="row">
          <div className="column">
            <div className="right-column">
              <div className="contact">
                <Image
                  src="/img/logo.png"
                  alt="logo"
                  width={524}
                  height={282}
                  priority
                />
                <p className="contact-description">
                  The easiest way to contact us is by giving us a call to
                  arrange a viewing of the work and a no-obligation quote.
                  <br />
                  Alternatively, you can email us at
                  <code>info@elmbridgepainting</code>
                  Please provide your name and telephone contact details in the
                  email so we can get back to you at the very earliest
                  opportunity.
                  <br />
                  We are also on Facebook, Instagram and Twitter.
                  <code>
                    {socialdata.map((e, i) => {
                      return (
                        <div className="social-div" key={i}>
                          {e.socialLinks.map((e, i) => {
                            return (
                              <a
                                style={socialIconStyles}
                                href={e.href}
                                key={i}
                                title={e.title}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <span className="icons" key={i}>
                                  <e.icons style={socialIconStyles} />
                                </span>
                              </a>
                            );
                          })}
                        </div>
                      );
                    })}
                  </code>
                </p>

                <div>
                  {emaildata.map((e, i) => {
                    return (
                      <div key={i}>
                        {e.contact.map((e, i) => {
                          return (
                            <a
                              className="email-links"
                              style={emailLinksStyles}
                              href={e.href}
                              key={i}
                              title={e.title}
                            >
                              <e.icons
                                className="emial-icons"
                                style={emailIconStyles}
                              ></e.icons>
                              {e.name}
                            </a>
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="left-column">
              <div className="contact">
                <Image
                  src="/img/map.webp"
                  alt="map-location"
                  width={524}
                  height={282}
                  priority
                />
                <div className="contact-details">
                  <p className="business-description">
                    Business Hours
                    <br />
                    Monday-Friday from 07:30am - 7pm
                    <br />
                    Saturday-Sunday from 07:30am - 7pm
                  </p>
                </div>
                <div>
                  {data.map((e, i) => {
                    return (
                      <div key={i}>
                        {e.contact.map((e, i) => {
                          return (
                            <a
                              style={phoneLinksStyles}
                              href={e.href}
                              key={i}
                              title={e.title}
                            >
                              <e.icons style={phoneIconStyles}></e.icons>
                              {e.name}
                            </a>
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
                <p className="contact-description">
                  44 Clarks Ln,
                  <br />
                  Halstead
                  <br />
                  Sevenoaks TN14 7DQ
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <style jsx>{`
        .about-container {
          min-height: 138vh;
          padding: 0.0rem;
          margin-top: 9.0rem;

        }

        main {
          padding: 0.2rem;
          margin 0.1rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

        }

        .row {
          margin: 0.1rem;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          width: 100%;
          align-items: center;
          justify-content: center;
        }

        .column {
          margin: 1rem;
          flex-basis: 45%;
          padding: 0.2rem;
          display: flex;
          flex-direction: column;
          flex-basis: 100%;
          flex: 1;
          text-align: left;
          text-decoration: none;
          transition: color 0.15s ease, border-color 0.15s ease;
          background-color: white;
        }
          .contact-description{
          margin: 0;
          font-size: 1.25rem;
        }
        .business-description {

          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }
                code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

      `}</style>
    </div>
  );
}
export default Contact;
