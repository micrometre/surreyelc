import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
              <Head>
          {/* Styled-JSX will add this `nonce` to style tags on Client Side Rendering */}
          {/* https://github.com/vercel/styled-jsx/blob/master/src/lib/stylesheet.js#L31 */}
          {/* https://github.com/vercel/styled-jsx/blob/master/src/lib/stylesheet.js#L240 */}
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
