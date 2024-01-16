import Product from 'src/components/product'
import data from 'src/data'
import Advertisement from '../../components/advertisement'
import CategoryShopNav from '../../components/categoryShopNav'
import Footer from '../../containers/footer'
import Header from './containers/header'

const Products = ({ category }) => {
  return (
    <>
      {data[category].map((product, idx) => {
        return (
          <Product key={product.name} category={category} productId={idx} />
        )
      })}
    </>
  )
}

const Category = ({ category }) => {
  return (
    <div className='category'>
      <Header category={category} />
      <Products category={category} />
      <CategoryShopNav />
      <Advertisement />
      <Footer />
    </div>
  )
}
export default Category
