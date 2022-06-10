import Head from 'next/head'
import Image from 'next/image'
import styles from './Contact.module.css'
import { socialdata } from '../../data/social-data';
const phoneTitleStyles = {
  fontSize: "1.0rem",
  color: "black",
  margin: "0.1rem",
  padding: "0.1rem",
  textDecoration: "none",
};

const phoneIconStyles = {
  fontSize: "1.0rem",
  color: "olive",
  margin: "0.1rem",
  textDecoration: "none",
};

const phoneLinksStyles = {
  fontSize: "1.0rem",
  color: "teal",
  margin: "0.1rem",
  padding: "0.1rem",
  textDecoration: "none",
  display: "flex",
};
const emailIconStyles = {
  fontSize: "1.0rem",
  color: "olive",
  margin: "0.1rem",
  textDecoration: "none",
};
const emailLinksStyles = {
  fontSize: "1.0rem",
  color: "#008080",
  margin: "0.1rem",
  textDecoration: "none",
};

const socialIconStyles = {
  fontSize: "3.0rem",
  color: "black",
  margin: "0.8rem",
  padding: "0.5rem",
};
export default function Contact() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Contact &rarr;</h2>
            <p>
              Email us at info@electricalsurrey.com
              <br />
              We are also on Facebook and Instagram.
            </p>
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
            <>
            <div className="contact-details">
                  <p className="business-description">
                    Business Hours
                    <br />
                    Monday-Friday from 07:30am - 7pm
                    <br />
                    Saturday-Sunday from 07:30am - 7pm
                  </p>
                </div>            
            
            </>

          </div>
        </div>
      </main>
    </div>
  )
}
