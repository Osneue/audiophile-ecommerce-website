import classNames from 'classnames'
import Button from 'src/components/button'
import css from './product.module.css'

const product = ({ product, isRightPhoto }) => {
  return (
    <div className={classNames(css.product, 'container-centre')}>
      <div
        className={
          isRightPhoto
            ? classNames(css.product__photo, css.photo_last)
            : css.product__photo
        }
      >
        <img src={product.photo.preview} alt={product.name} />
      </div>
      <div
        className={
          isRightPhoto
            ? classNames(css.product__content, css.padding_right)
            : classNames(css.product__content, css.padding_left)
        }
      >
        <h3 className='new-product-style'>NEW PRODUCT</h3>
        <div className={css.product__name}>
          <h2 className='product-name-style'>{product.name}</h2>
          <h2 className='product-name-style'>{product.category}</h2>
        </div>
        <p className={classNames(css.product__text, 'text-style')}>
          {product.intro}
        </p>
        <Button color='orange' />
      </div>
    </div>
  )
}
export default product
