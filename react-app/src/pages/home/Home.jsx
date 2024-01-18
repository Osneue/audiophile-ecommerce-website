import Advertisement from '../../components/advertisement'
import CategoryShopNav from '../../components/category-shop-nav'
import Footer from '../../containers/footer'
import Header from './containers/header'
import Recommendation from './containers/recommendation'
import './home.css'

const Home = ({ products }) => {
  return (
    <section>
      <Header productLink={products[0].name} />
      <div className='home__category-shop-nav-container'>
        <CategoryShopNav />
      </div>
      <Recommendation />
      <Advertisement />
      <Footer />
    </section>
  )
}
export default Home
