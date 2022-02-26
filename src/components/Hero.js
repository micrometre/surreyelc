import { Flex, Heading } from '@chakra-ui/react'

export const Hero = ({ title }) => (
  <Flex justifyContent="center" alignItems="center" >
    <Heading
      fontSize="3rem"
      bgGradient="linear(to-l, #7928CA, #FF0080)"
      bgClip="text"
    >
      {title}
    </Heading>
  </Flex>
)

Hero.defaultProps = {
  title: 'Professional Painters and Decorators in Elmbridge and surrounding areas.',
}
