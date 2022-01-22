import MainLayout from '../components/layout'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'


export default function Home(initialData) {
  return (
    <MainLayout>
          <Navbar />
          <Carousel />
    </MainLayout>

  )
}

