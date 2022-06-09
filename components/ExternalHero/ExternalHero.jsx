import styles from './ExternalHero.module.css'

export function ExternalCard() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h1 className={styles.externaltitle}>
              <br />
              Garden sheds
              <br />
              <br />
              Out houses
              <br />
              <br />
              Garden lighting
              <br />
              <br />
              Driveway lighting
              <br />
              <br />
              Decking areas
              <br />
              <br />
              External living Areas
            </h1>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ExternalCard;