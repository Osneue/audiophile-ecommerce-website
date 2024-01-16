import classNames from 'classnames'
import Advertisement from 'src/components/advertisement/Advertisement'
import CategoryShopNav from 'src/components/categoryShopNav/CategoryShopNav'
import Product from 'src/components/product'
import Footer from 'src/containers/footer/Footer'
import data from 'src/data'
import Price from './components/price'
import AlsoLike from './containers/alsoLike'
import Feature from './containers/feature'
import InTheBox from './containers/inTheBox'
import Picture from './containers/picture'
import css from './detail.module.css'

const GoBack = () => {
  return (
    <div className={classNames(css.back, 'container-centre')}>
      <button className={css.back__button}>Go Back</button>
    </div>
  )
}

const Detail = ({ category, productId }) => {
  return (
    <div className={classNames(css.detail)}>
      <GoBack />
      <Product category={category} productId={productId} />
      <Price price={data[category][productId].price} />
      <Feature text={data[category][productId].feature} />
      <InTheBox inners={data[category][productId].inTheBox} />
      <Picture gallery={data[category][productId].gallery} />
      <AlsoLike alsoLike={data[category][productId].alsoLike} />
      <CategoryShopNav />
      <Advertisement />
      <Footer />
    </div>
  )
}
export default Detail
