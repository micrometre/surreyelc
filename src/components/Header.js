import { useState } from 'react'
import { Link as ChakraLink, Button } from '@chakra-ui/react'
import { Flex, Text, Box } from '@chakra-ui/react'
import Link from 'next/link'
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'


const MenuItem = ({ children, isLast, to = '/' }) => {
  return (
    <Text
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display="block"
    >
      <Link href={to}>{children}</Link>
    </Text>
  )
}
export const Header = () => {
  const [show, setShow] = useState(false)
  const toggleMenu = () => setShow(!show)
  return (
        <Flex
      bgGradient="linear(to-tr, teal.300,yellow.400)"
      position="fixed"
      top="6rem"
      right="0rem"
      align="center"
      mb={8}
      p={4}
      py={1}
      as="nav"
      wrap="wrap"
          justify={[ 'space-between']}
      width="100%"
    py={4}
    >
      <Box display={{ base: 'block', md: 'none' }} onClick={toggleMenu}>
        {show ? <CloseIcon /> : <HamburgerIcon />}
      </Box>
      <Box
        display={{ base: show ? 'block' : 'none', md: 'block' }}
        flexBasis={{ base: '100%', md: 'auto' }}
      >
        <Flex
        >
          <MenuItem to="/">Home</MenuItem>
          <MenuItem to="/interior">Interior</MenuItem>
          <MenuItem to="/exterior">Exterior</MenuItem>
          <MenuItem to="/river">River Access</MenuItem>
          <MenuItem to="/painting">Painting and Decoration </MenuItem>
          <MenuItem to="/commercial">Commercial</MenuItem>
          <MenuItem to="/contact">Contact</MenuItem>
        </Flex>
      </Box>
    </Flex>
)
}
