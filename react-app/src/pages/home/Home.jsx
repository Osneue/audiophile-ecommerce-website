import Footer from '../../containers/footer'
import Advertisement from './containers/advertisement'
import CategoryShopNav from './containers/categoryShopNav'
import Header from './containers/header'
import Recommendation from './containers/recommendation'

const Home = () => {
  return (
    <section className='home-page'>
      <Header />
      <CategoryShopNav />
      <Recommendation />
      <Advertisement />
      <Footer />
    </section>
  )
}
export default Home
