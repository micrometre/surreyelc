
import { Flex, Heading, Box } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
export const Carousel = ({ title }) => (
  <Flex
    mt="10rem"
    justifyContent="center" alignItems="center">
    <Heading
      fontSize="20rem"
      bgGradient="linear(to-l, #7928CA, #FF0080)"
      bgClip="text"
    >
    </Heading>
    <Flex>
          <Image
            src="/img/logo.png"
            alt="Picture of the logo"
            width={342}
            height={172}
            loading="lazy"
            className={'image'}
          />
    </Flex>
  </Flex>
)

Carousel.defaultProps = {
  title: 'Professional Painters and Decorators in Elmbridge and surrounding areas.',
}
