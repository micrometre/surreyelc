import Image from "next/image";
import Link from "next/link";
import { data } from "../data/phone-data";
import { emaildata } from "../data/email-data";
import { socialdata } from "../data/social-data";
import { FaPhone } from "react-icons/fa";
const emailIconStyles = {
  fontSize: "1.4rem",
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
};
function Contact() {
  return (
    <div className="about-container">
      <main>
        <div className="page-wrapper"></div>

        <div className="row">
          <div className="column">
            <div className="blue-column">Some Text in Column One</div>
          </div>
          <div className="column">
            <div className="green-column">Some Text in Column Two</div>
          </div>
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
          border: 0.4rem solid green;
        }

        main {
          padding: 2rem;
          margin: 1rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          border: 0.4rem solid cyan;
        }

        .row {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          width: 100%;
          align-items: center;
          justify-content: center;
          margin: 3rem;
          border: 0.4rem solid red;
        }

        .column {
          margin: 1rem;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          flex-basis: 100%;
          flex: 1;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .blue-column {
          background-color: blue;
          height: 100px;
        }

        .green-column {
          background-color: green;
          height: 100px;
        }
      `}</style>
    </div>
  );
}
export default Contact;
