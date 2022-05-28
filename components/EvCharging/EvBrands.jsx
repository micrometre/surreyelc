import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { images } from "../../data/images-data";
import Image from "next/image";
import { Parallax } from "./EvCharging";
const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };
const thumbnailVariants = {
  initial: { scale: 0.9, opacity: 0 },
  enter: { scale: 1, opacity: 1, transition },
  exit: {
    scale: 0.5,
    opacity: 0,
    transition: { duration: 1.5, ...transition },
  },
};
const frameVariants = {
  hover: { scale: 0.95 },
};

const imageVariants = {
  hover: { scale: 1.1 },
};
export function EvBrands({ id, i }) {
  return (
    <>
    <div className="evbrandsSection">
      <motion.div className="thumbnail" variants={thumbnailVariants}>
        <motion.div />
        <motion.div
          className="frame"
          whileHover="hover"
          variants={frameVariants}
          transition={transition}
        >
          <motion.img
            src={`/images/${id}?auto=format&fit=crop&w=1500`}
            alt="The surreyelc"
            variants={imageVariants}
            transition={transition}
          />
        </motion.div>
      </motion.div>
    </div>
      <style>
        {`
        .evbrandsSection{
              border: 0.0.1rem solid teal;

        }
            .thumbnail {
              border: 0.0.1rem solid red;

            }

            .frame {
              border: 0.0.1rem solid yellow;
                overflow: hidden;
            }

            .thumbnail img {
              border: 0.0.1rem solid blue;
                width: 100%;
                height: 100%;
            }
        `}
      </style>
    </>
  );
}

export function EvBrandsImages() {
  return (
    <>
      <div className="eVgallery">
        <motion.div
          className="eVthumbnails"
          initial="initial"
          animate="enter"
          exit="exit"
          variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
        >
          {images.map((id, i) => (
            <EvBrands key={id} id={id} i={i} />
          ))}
        </motion.div>
      </div>
      <style>
        {`
        .eVgallery {
              border: 0.0.1rem solid teal;
            padding: 40px;
            margin: 1rem;
            width: 100%;
        }

        .eVthumbnails {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            width: 100%;
        }
        `}
      </style>
    </>
  );
}

export function EvBrandsMarquee() {
  return (
    <div className="evBrandMarquee">
      <Marquee gradient={false} style={{}}>
        <EvBrandsImages />
      </Marquee>
      <style jsx>{`
        .evBrandMarquee {
              background: white;
        }
      `}</style>
    </div>
  );
}

export default EvBrandsMarquee;