import { useState } from 'react'
import { Link as ChakraLink, Button } from '@chakra-ui/react'
import { Flex, Text, Box } from '@chakra-ui/react'
import Link from 'next/link'
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
export const Header = () => {
  const [show, setShow] = useState(false)
  const toggleMenu = () => setShow(!show)
  return (
  <Flex
    flexDirection="row"
    position="fixed"
    top="0"
    width="100%"
    maxWidth="51rem"
    py={4}
    bgGradient="linear(to-tr, teal.300,yellow.400)"
    justify={[ 'space-between']}
    pt={[4, 4, 0, 0]}
       >

     <Box display={{ base: 'block', md: 'none' }} onClick={toggleMenu}>
        {show ? <CloseIcon /> : <HamburgerIcon />}
      </Box>

          <ChakraLink href="/">Home</ChakraLink>
          <ChakraLink href="/interior">Interior</ChakraLink>
          <ChakraLink href="/exterior">Exterior</ChakraLink>
          <ChakraLink href="/river">River Access</ChakraLink>
          <ChakraLink href="/painting">Painting and Decoration </ChakraLink>
          <ChakraLink href="/commercial">Commercial</ChakraLink>
          <ChakraLink href="/contact">Contact</ChakraLink>
  </Flex>
)
}
