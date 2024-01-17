import classNames from 'classnames'
import Advertisement from 'src/components/advertisement/Advertisement'
import CategoryShopNav from 'src/components/categoryShopNav/CategoryShopNav'
import Product from 'src/components/product'
import ProductStyles from 'src/components/product/product-detail.module.css'
import Footer from 'src/containers/footer/Footer'
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
      <Product product={product} isRightPhoto={false} styles={ProductStyles} />
      <div className={classNames(css.featureAndInBox, 'container-centre')}>
        <Feature text={product.feature} />
        <InTheBox inners={product.inTheBox} />
      </div>
      <Picture gallery={product.photo.gallery} />
      <AlsoLike alsoLike={product.alsoLike} />
      <div className={css.categoryShopNavContainer}>
        <CategoryShopNav />
      </div>
      <Advertisement />
      <Footer />
    </div>
  )
}
export default Detail
