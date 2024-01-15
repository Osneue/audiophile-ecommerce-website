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
  const [menu, setMenu] = useState(false)

  // console.log(menu, setMenu)

  return (
    <div className='category page-relative'>
      {menu && <Overlay />}
      <Navbar menu={menu} setMenu={setMenu} />
      <Header category={category} />
      <Products category={category} />
      <CategoryShopNav setMenu={setMenu} />
      <Advertisement />
      <Footer />
    </div>
  )
}
export default Category
