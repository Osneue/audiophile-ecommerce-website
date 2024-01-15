import { useState } from 'react'
import Overlay from 'src/components/overlay/overlay'
import Advertisement from '../../components/advertisement'
import CategoryShopNav from '../../components/categoryShopNav'
import Footer from '../../containers/footer'
import Navbar from '../../containers/navbar'
import Product from './components/product'
import Header from './containers/header'
import data from './data'

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
