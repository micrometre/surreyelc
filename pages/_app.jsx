import '../styles/index.css'
import { AnimatePresence } from "framer-motion";

function SurreyApp({ Component, pageProps, router }) {

  return (
    <AnimatePresence>
      <Component key={router.route} {...pageProps} />
    </AnimatePresence>
  )
}

export default SurreyApp
