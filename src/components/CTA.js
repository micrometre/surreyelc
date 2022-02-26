import { Link as ChakraLink, Button } from '@chakra-ui/react'

import { Container } from './Container'
import { NavBar } from '../components/NavBar'

export const CTA = () => (
  <Container
    flexDirection="row"
    position="fixed"
    bottom="0"
    width="100%"
    maxWidth="48rem"
    py={2}
  >
    <ChakraLink isExternal href="https://chakra-ui.com" flexGrow={1} mx={2}>
    </ChakraLink>

    <ChakraLink
      isExternal
      href="https://github.com/vercel/next.js/blob/canary/examples/with-chakra-ui"
      flexGrow={3}
      mx={2}
    >
      <Button width="100%" bgGradient="linear(to-tr, teal.300,yellow.400)">
        View Repo
      </Button>
    </ChakraLink>
  </Container>
)
