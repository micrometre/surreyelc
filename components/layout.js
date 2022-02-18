import Head from 'next/head'
import Link from 'next/link'
import styles from './layout.module.css'


export const siteTitle = 'Elmbridge Painting and Decorating Services Ltd'

export default function Layout({ children, home }) {
  return (
    <div className="section">
      <Head>
        <link rel="icon" href="/logo.png" />
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Professional Painters and Decorators in Elmbridge and surrounding areas." />
          <meta name="og:title" content={siteTitle} />
          <meta name="Elmbridge Painting and Decorating Services Ltd" content={siteTitle} />
            <title>{siteTitle}</title>
      </Head>
      <main>{children}</main>
    </div>
  )
}