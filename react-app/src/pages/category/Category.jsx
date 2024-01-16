import Product from 'src/components/product'
import products from 'src/data'
import Advertisement from '../../components/advertisement'
import CategoryShopNav from '../../components/categoryShopNav'
import Footer from '../../containers/footer'
import Header from './containers/header'

const Products = ({ category }) => {
  return (
    <>
      {products
        .filter((product) => product.category === category)
        .map((product, index) => {
          return (
            <Product
              key={product.name}
              product={product}
              isRightPhoto={index % 2}
            />
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
