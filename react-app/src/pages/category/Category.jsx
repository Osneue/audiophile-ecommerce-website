import Product from 'src/components/product'
import products from 'src/data'
import Advertisement from '../../components/advertisement'
import CategoryShopNav from '../../components/category-shop-nav'
import Footer from '../../containers/footer'
import './category.css'
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
      <div className='category__category-shop-nav-container'>
        <CategoryShopNav />
      </div>
      <Advertisement />
      <Footer />
    </div>
  )
}
export default Category
