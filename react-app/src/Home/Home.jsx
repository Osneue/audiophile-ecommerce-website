import Footer from '../Footer'
import Advertisement from './Advertisement'
import CategoryShopNav from './CategoryShopNav'
import Header from './Header'
import Recommendation from './Recommendation'

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
