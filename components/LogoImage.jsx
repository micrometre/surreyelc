import * as React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { images } from '../data/logo-images-data'
const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }
const thumbnailVariants = {
  initial: { scale: 0.9, opacity: 0 },
  enter: { scale: 1, opacity: 1, transition },
  exit: {
    scale: 0.5,
    opacity: 0,
    transition: { duration: 1.5, ...transition },
  },
}
const frameVariants = {
  hover: { scale: 0.95 },
}

const imageVariants = {
  hover: { scale: 1.1 },
}
export function Thumbnail({ id, i }) {
  return (
    <>
      <motion.div className="logo-thumbnail" variants={thumbnailVariants}>
        <motion.div
          className="logo-frame"
          whileHover="hover"
          variants={frameVariants}
          transition={transition}
        >
          <motion.img
            src={`/images/${id}?auto=format&fit=crop&w=1500`}
            alt="surreyelc"
            variants={imageVariants}
            transition={transition} />
        </motion.div>
      </motion.div>
      <style>
        {`
            .logo-thumbnail {
            margin-top: 6rem;
                flex: 1 0 33%;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .logo-frame {
                overflow: hidden;
            }

            .logo-thumbnail img {
                width: 100%;
                height: 100%;
            }
        `}
      </style>
    </>
  )
}

const LogoImage = () => (
  <>
    <div className="gallery">
      <motion.div
        className="thumbnails"
        initial="initial"
        animate="enter"
        exit="exit"
        variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
      >
        {images.map((id, i) => (
          <Thumbnail key={id} id={id} i={i} />
        ))}
      </motion.div>
    </div>
    <style>
      {`
        .gallery {
            margin-top: 12rem;
            width: 100%;
            max-width: 1200px;
        }

        .thumbnails {
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            justify-content: space-between;
        }
        `}
    </style>
  </>
)

export default LogoImage