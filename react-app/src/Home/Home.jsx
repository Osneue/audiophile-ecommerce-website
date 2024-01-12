import Advertisement from './Advertisement'
import CategoryShopNav from './CategoryShopNav'
import Header from './Header'
import './Home.css'
import Recommendation from './Recommendation'

const Home = () => {
  return (
    <section className='home-page'>
      <Header />
      <CategoryShopNav />
      <Recommendation />
      <Advertisement />
    </section>
  )
}
export default Home
