import { useState } from 'react'
import Advertisement from '../../components/advertisement'
import CategoryShopNav from '../../components/categoryShopNav'
import Footer from '../../containers/footer'
import Header from './containers/header'
import Recommendation from './containers/recommendation'
import './home.css'

const Overlay = () => {
  return <div className='overlay'></div>
}

const Home = () => {
  const [menu, setMenu] = useState(false)

  return (
    <section className='home-page'>
      {menu && <Overlay />}
      <Header menu={menu} setMenu={setMenu} />
      <CategoryShopNav />
      <Recommendation />
      <Advertisement />
      <Footer />
    </section>
  )
}
export default Home
