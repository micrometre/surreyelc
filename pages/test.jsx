import * as React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Marquee from "react-fast-marquee"
import { images } from '../data/images-data'
import Image from 'next/image'

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
export function LogoThumbnail({ id, i }) {
  return (
    <>
      <motion.div className="thumbnail" variants={thumbnailVariants}>
        <motion.div
          className="frame"
          whileHover="hover"
          variants={frameVariants}
          transition={transition}
        >
          <motion.img
            src={`/images/${id}?auto=format&fit=crop&w=1500`}
            alt="The Barbican"
            variants={imageVariants}
            transition={transition} />
        </motion.div>
      </motion.div>
      <style>
        {`
            .thumbnail {
            }

            .frame {
                overflow: hidden;
            }

            .thumbnail img {
                width: 100%;
                height: 100%;
            }
        `}
      </style>
    </>
  )
}

function LogoImage() {
  return (
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
            <LogoThumbnail key={id} id={id} i={i} />
          ))}
        </motion.div>
      </div>
      <style>
        {`
        .gallery {
            padding: 40px;
            margin: 0 auto;
            width: 100%;
        }

        .thumbnails {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            width: 100%;
        }
        `}
      </style>
    </>
  )
}


export  function ServicesEv() {
  return (
    <div className="marquee">
      <Marquee
        gradient={false}
        style={{
          backgroundColor: "#fff",
        }}
      >

<LogoImage />
      </Marquee>
      <style jsx>{`
              `}</style>

    </div>
  )
}


export default ServicesEv