import Head from 'next/head'
import Image from 'next/image'
import styles from './Logo.module.css'




export function LogoCard() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.grid}>
          <div className={styles.card} >
            <Image
              src="/images/logo.webp"
              alt="The surreyelc"
              width={640}
              height={248}
              priority
            />
          </div>
        </div>
      </main>
    </div>
  )
}

export default LogoCard;