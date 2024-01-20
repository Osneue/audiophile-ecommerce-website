import classNames from 'classnames'
import { useNavigate } from 'react-router-dom'
import Advertisement from 'src/components/advertisement/Advertisement'
import Button from 'src/components/button'
import goBackStyle from 'src/components/button/theme/go-back.module.css'
import CategoryShopNav from 'src/components/category-shop-nav/CategoryShopNav'
import Product from 'src/components/product'
import ProductStyles from 'src/components/product/product-detail.module.css'
import AlsoLike from './containers/alsoLike'
import Feature from './containers/feature'
import InTheBox from './containers/inTheBox'
import Picture from './containers/picture'
import css from './detail.module.css'

const GoBack = () => {
  const navigate = useNavigate()

  return (
    <div className={classNames(css.back, 'container-centre')}>
      <Button
        theme={goBackStyle}
        onClick={() => {
          navigate(-1)
        }}
      >
        Go Back
      </Button>
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
    </div>
  )
}
export default Detail
