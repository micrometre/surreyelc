import Image from "next/image";
import Link from "next/link";

function Contact() {
  return (
    <div className="contact-container">
      <main>
        <div className="river-title">
          <h1 className="river-header">Exterior Decoration</h1>
        </div>
      </main>
      <div className="description">
        <p>
          The easiest way to contact us is by giving us a call to arrange a viewing of the work and a no-obligation quote. Alternatively, you can email us at info@elmbridgepainting.com.
Please provide your name and telephone contact details in the email so we can get back to you at the very earliest opportunity. We are also on Facebook, Instagram and Twitter.
        </p>
      </div>
      <style jsx>{`
        .contact-container {
          min-height: 24vh;
          padding: 1rem;
          margin: 1rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        main {
          padding: 1rem;
          margin: 1rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 100%;
        }
        .river-title,
        river-description {
          margin: 1rem;
          color: white;
          font-weight: 300;
          font-size: 1.5rem;
        }
        .description {
               padding: 0.45rem;
          margin: 0.45rem;
        }
        p {
          line-height: 1.7;
          font-size: 1.09rem;
          margin: 0.1rem;
          padding: 0.1rem;
          text-decoration: none;
        }
      `}</style>
    </div>
  );
}
export default Contact;
