import * as React from 'react'
import Link from 'next/link'

import { motion } from 'framer-motion'

const images = ["/images/logo.webp"]


const transition = {
    duration: 1,
    ease: [0.43, 0.13, 0.23, 0.96],
}

const imageVariants = {
    exit: { y: '50%', opacity: 0, transition },
    enter: {
        y: '0%',
        opacity: 1,
        transition,
    },
}
const thumbnailVariants = {
    initial: { scale: 0.9, opacity: 0 },
    enter: { scale: 1, opacity: 1, transition },
    exit: {
      scale: 0.5,
      opacity: 0,
      transition: { duration: 1.5, ...transition },
    },
    hover: { scale: 0.95 },
  }
  


const backVariants = {
    exit: { x: 100, opacity: 0, transition },
    enter: { x: 0, opacity: 1, transition: { delay: 1, ...transition } },
    hover: { scale: 0.95 },
}

const LogoText = ({ index }) => (
    <>
        <motion.div className="logo-div" initial="exit" animate="enter" exit="exit">
            <motion.div className="back" variants={imageVariants}>
                    <h1 className="logo-title">
                        Electrical specialists serving surrey and surrounding areas.
                    </h1>
            </motion.div>
        </motion.div>
        <style>
            {`
        .logo-div {
            overflow: hidden;
            padding: 0 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        .logo-title{
            background: linear-gradient(
                to left, 
                hsl(98 100% 62%), 
                hsl(204 100% 89%)
              );
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            padding: 0.5rem;
            text-align: left;
        }

        .logo-div img {
            max-width: 100%;
            max-height: 100vh;
            margin-top: 4rem;
            flex-basis: 45%;
            box-shadow: 1px 1px #fff;
        }

        @media (max-width: 600px) {
            .logo-title {
            font-size: 1.5rem;
              flex-direction: column;
            }
          }

`}
        </style>
    </>
)

export default LogoText