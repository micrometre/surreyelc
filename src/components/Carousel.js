import React, { useEffect, useState } from "react";
import { Image } from '@chakra-ui/react'
import Slider from 'react-slick';
import {
  Flex,
  Heading,
  Box ,
  IconButton,
  useBreakpointValue
} from '@chakra-ui/react'
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};


export const Carousel = ({ title }) => {
const cards = ["/img/exterior.webp ", "/img/leavingroom-0.webp",  "/img/hair-drasers.webp"]
  const [slider, setSlider] = useState();
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '10px' });
  return (
  <Flex
    bgGradient="linear(to-tr, teal.300,yellow.400)"
    mb="30rem"
    alignItems="center"
  >
        <Flex>
          <Image
            src="/img/sky.jpg"
            alt="Picture of the logo"
            width={342}
            height={1172}
            loading="lazy"
            className={'image'}
          />
    </Flex>
  </Flex>
  )
}

Carousel.defaultProps = {
  title: 'Professional Painters and Decorators in Elmbridge and surrounding areas.',
}
