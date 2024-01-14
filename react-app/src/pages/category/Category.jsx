import Advertisement from '../../components/advertisement'
import CategoryShopNav from '../../components/categoryShopNav'
import Footer from '../../containers/footer'
import Navbar from '../../containers/navbar'
import Header from './containers/header'
import Products from './containers/products'

const Category = ({ title }) => {
  return (
    <div className='category'>
      <Navbar />
      <Header title={title} />
      <Products />
      <CategoryShopNav />
      <Advertisement />
      <Footer />
    </div>
  )
}
export default Category
