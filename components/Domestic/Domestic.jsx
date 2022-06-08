
import Link from "next/link";
import Image from "next/image";
import * as styles from "../../components/Domestic/Domestic.module.css";

export function Domestic() {
  return (
    <div className={styles.container}>
      <div
        className={styles.main}>
        <div
          className={styles.description}>
          <h1 className={styles.description}>
            Surrey electrical and car charging offer a full
            electrical service for all domestic and commercial properties.
            Our fully qualified engineers work to regulation standards in design,
            installation and niceic certification.
          </h1>
        </div>
        <div className={styles.row}>
          <div className={styles.column}>
            <div className={styles.card}>
              <Image
                src="/images/1.webp"
                alt="About picture"
                width={500}
                height={300}
              />
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.card}>
              <Image
                src="/images/3.webp"
                alt="About picture"
                width={500}
                height={300}
              />
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.card}>
              <Image
                src="/images/2.webp"
                alt="About picture"
                width={500}
                height={300}
              />
            </div>
          </div>
        </div>
        <h1 className={styles.description}>
          We work a very high standard and pride  ourselves on being 100% honest.
          We are always dependable and time keeping is one of strongest points.
          Care and attention to our clients is something that
          sets us apart from other companies and we are always
          contactable and at the end of the phone to sort out any
          problems or explain any processes
          for the job being undertaken.
        </h1>
      </div>
    </div>
  );
}
export default Domestic;