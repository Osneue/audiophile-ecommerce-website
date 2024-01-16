import classNames from 'classnames'
import Advertisement from 'src/components/advertisement/Advertisement'
import CategoryShopNav from 'src/components/categoryShopNav/CategoryShopNav'
import Product from 'src/components/product'
import Footer from 'src/containers/footer/Footer'
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

const Detail = ({ product }) => {
  return (
    <div className={classNames(css.detail)}>
      <GoBack />
      <Product product={product} isRightPhoto={false} />
      <Price price={product.price} />
      <Feature text={product.feature} />
      <InTheBox inners={product.inTheBox} />
      <Picture gallery={product.photo.gallery} />
      <AlsoLike alsoLike={product.alsoLike} />
      <CategoryShopNav />
      <Advertisement />
      <Footer />
    </div>
  )
}
export default Detail
