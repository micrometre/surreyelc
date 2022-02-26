import { Flex, Heading, Box } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
export const Logo = ({ title }) => (
  <Flex justifyContent="center" alignItems="center" height="100vh">
    <Heading
      fontSize="10vw"
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

Logo.defaultProps = {
  title: 'with-chakra-ui',
}
