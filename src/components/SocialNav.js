import { useState } from 'react'
import { Link as ChakraLink, Button } from '@chakra-ui/react'
import { Flex, Text, Box } from '@chakra-ui/react'
import Link from 'next/link'
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import { SocialData } from "../data/social-data";
import { FaPhone} from 'react-icons/fa';

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
export const SocialNav = () => {
    const phoneIconStyles = {
    fontSize: "2.5em",
    color: "#ffffff"
  };
  return (
        <Flex
      bgColor="#6c757d"
      position="fixed"
      top="3rem"
      align="center"
      mb={0}
      p={0}
      as="nav"
      wrap="wrap"
      width="100%"
      py={1}
      align="center"
      justify={['space-between']}
      direction={['column', 'row', 'row', 'row']}
      pt={[4, 4, 0, 0]}
        >
<>
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
                style={phoneIconStyles}
                />
                  {e.name}
              </a>
                    );
                    })}
          </div>
          );
          })}
 <style jsx>{`
.socialdiv{
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
        </Flex>
)
}
