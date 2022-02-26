import Head from 'next/head'
import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
} from '@chakra-ui/react'
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons'
import { Hero } from '../components/Hero'
import { Container } from '../components/Container'
import { Main } from '../components/Main'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import { CTA } from '../components/CTA'
import { Footer } from '../components/Footer'
import { NavBar } from '../components/NavBar'
import { SocialNav } from '../components/SocialNav'
import { Header } from '../components/Header'
import { Logo } from '../components/Logo'
import { Carousel } from '../components/Carousel'
export const siteTitle = 'Elmbridge Painting and Decorating Services Ltd'

const Index = () => (
  <Container
  >
      <Head>
        <link rel="icon" href="/logo.png" />
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Professional Painters and Decorators in Elmbridge and surrounding areas." />
          <meta name="og:title" content={siteTitle} />
          <meta name="Elmbridge Painting and Decorating Services Ltd" content={siteTitle} />
            <title>{siteTitle}</title>
      </Head>
    <NavBar />
    <Carousel />
    <Main>
      <Text>
      </Text>
    </Main>
    <Main>
    </Main>
    <CTA />
  </Container>
)

export default Index
