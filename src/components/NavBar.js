import { useState } from 'react'
import { Link as ChakraLink, Button } from '@chakra-ui/react'
import { Flex, Text, Box } from '@chakra-ui/react'
import Link from 'next/link'
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import { Phonedata } from "../data/phone-data";
import { SocialData } from "../data/social-data";
import { FaPhone} from 'react-icons/fa';
import { Container } from './Container'

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
export const NavBar = () => {
    const [show, setShow] = useState(false)
    const toggleMenu = () => setShow(!show)
    const phoneIconStyles = {fontSize: "1.5em",color: "black"};
    const socialIconStyles = {fontSize: "2.5em",color: "#ffff"};
    const hamburgerBoxStyles = {fontSize: "2.0em",color: "#ffff"};
    const hamburgerIconStyles = {fontSize: "2.0em",color: "#ffff"};
    const closeIconStyles = {fontSize: "1.3em",color: "#ffff"};
  return (
    <Container
      bgGradient="linear(to-tr, teal.300,yellow.400)"
      mt={0}
      bgColor="#ffffff"
      position="fixed"
      top="0rem"
      align="center"
      as="nav"
      wrap="wrap"
      width="100%"
      align="center"
      justify={['space-between']}
      direction={['column', 'row', 'row', 'row']}
      pt={[4, 4, 0, 0]}
        >
<>
      {Phonedata.map((e, i) => {
        return (
          <div
            className="phonesdiv"
            key={i}>
           {e.contact.map((e, i) => {
             return (
               <a
                href={e.href}
                key={i}  title={e.title}>
               <e.icons
                style={phoneIconStyles}
                />
                  {e.name}
              </a>
                    );
                    })}
          </div>
          );
          })}
  <Container
    py={1}
    width="100%"
    bgColor="#6c757d">
      {SocialData.map((e, i) => {
        return (
          <div
            className="socialdiv"
            key={i}>
           {e.socialLinks.map((e, i) => {
             return (
               <a
                href={e.href}
                key={i}  title={e.title}>
               <e.icons
                style={socialIconStyles}
                />
                  {e.name}
              </a>
                    );
                    })}
          </div>
          );
      })}
          </Container>
  <Container width="100%" bgGradient="linear(to-tr, teal.300,yellow.400)">
    <Box
     style={hamburgerBoxStyles}
      display={{ base: 'block', md: 'none' }} onClick={toggleMenu}>
      {show ? <CloseIcon style={closeIconStyles} /> : <HamburgerIcon style={hamburgerIconStyles}/>}
      </Box>
      <Box
        display={{ base: show ? 'block' : 'none', md: 'block' }}
        flexBasis={{ base: '100%', md: 'auto' }}
      >
        <Container
          m={2}
          p={1}
          py={2}
          align="center"
          justify={['space-between']}
          direction={['column', 'row', 'row', 'row']}
          pt={[4, 4, 0, 0]}
          fontSize="1.5rem"
        >
          <MenuItem to="/">Home</MenuItem>
          <MenuItem to="/interior">Interior</MenuItem>
          <MenuItem to="/exterior">Exterior</MenuItem>
          <MenuItem to="/river">River Access</MenuItem>
          <MenuItem to="/painting">Painting and Decoration </MenuItem>
          <MenuItem to="/commercial">Commercial</MenuItem>
          <MenuItem to="/contact">Contact</MenuItem>
        </Container>
      </Box>
  </Container>
 <style jsx>{`
.socialdiv{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
.phonesdiv{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
.phoneIconText {
  color: black;
  text-decoration: none;
  font-size: 0.8em;
}
      `}</style>
    </>
        </Container>
)
}
