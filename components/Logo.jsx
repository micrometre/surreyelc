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

const backVariants = {
    exit: { x: 100, opacity: 0, transition },
    enter: { x: 0, opacity: 1, transition: { delay: 1, ...transition } },
}

const Logo = ({ index }) => (
    <>
        <motion.div className="logo-div" initial="exit" animate="enter" exit="exit">
            <motion.img
                variants={imageVariants}
                src={images}
                alt="The Barbican"
            />
            <motion.div className="back" variants={backVariants}>
                    <h1 className="logo-title">
                        Electrical specialists serving surrey and surrounding areas.
                    </h1>
            </motion.div>
        </motion.div>
        <style>
            {`
        .logo-div {
            overflow: hidden;
            height: 100vh;
            padding: 0 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        .logo-title{
            background: linear-gradient(
                to right, 
                hsl(98 100% 62%), 
                hsl(204 100% 59%)
              );
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              text-align: center;
            padding: 5rem 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin: 1rem;
            flex-basis: 45%;
            padding: 0.5rem;
            text-align: left;
            color: #fff;
            text-decoration: none;
            transition: color 0.15s ease, border-color 0.15s ease;
        }

        .logo-div img {
            max-width: 100%;
            max-height: 100vh;
            margin-top: 4rem;
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

export default Logo