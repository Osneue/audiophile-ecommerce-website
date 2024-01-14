import { useState } from 'react'
import Overlay from 'src/components/overlay/overlay'
import Advertisement from '../../components/advertisement'
import CategoryShopNav from '../../components/categoryShopNav'
import Footer from '../../containers/footer'
import Header from './containers/header'
import Recommendation from './containers/recommendation'
import './home.css'

const Home = ({ menu, setMenu }) => {
  // const [menu, setMenu] = useState(false)

  return (
    <section className='page-relative'>
      {menu && <Overlay />}
      <Header menu={menu} setMenu={setMenu} />
      <CategoryShopNav menu={menu} setMenu={setMenu} />
      <Recommendation />
      <Advertisement />
      <Footer />
    </section>
  )
}
export default Home
