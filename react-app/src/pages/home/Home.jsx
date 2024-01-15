import { useState } from 'react'
import Overlay from 'src/components/overlay/overlay'
import Navbar from 'src/containers/navbar/Navbar'
import Advertisement from '../../components/advertisement'
import CategoryShopNav from '../../components/categoryShopNav'
import Footer from '../../containers/footer'
import Header from './containers/header'
import Recommendation from './containers/recommendation'
import './home.css'

const Home = () => {
  const [menu, setMenu] = useState(false)

  return (
    <section>
      <Header />
      <CategoryShopNav />
      <Recommendation />
      <Advertisement />
      <Footer />
    </section>
  )
}
export default Home
