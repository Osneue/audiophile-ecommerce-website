import classNames from 'classnames'
import Button from 'src/components/button'
import css from './product.module.css'

const product = ({ product, isRightPhoto, styles = css }) => {
  return (
    <div className={classNames(styles.product, 'container-centre')}>
      <div
        className={
          isRightPhoto
            ? classNames(styles.product__photo, styles.photo_last)
            : styles.product__photo
        }
      >
        <img src={product.photo.preview} alt={product.name} />
      </div>
      <div
        className={
          isRightPhoto
            ? classNames(styles.product__content, styles.padding_right)
            : classNames(styles.product__content, styles.padding_left)
        }
      >
        <h3 className='new-product-style'>NEW PRODUCT</h3>
        <div className={styles.product__name}>
          <h2 className='product-name-style'>{product.name}</h2>
          <h2 className='product-name-style'>{product.category}</h2>
        </div>
        <p className={classNames(styles.product__text, 'text-style')}>
          {product.intro}
        </p>
        {styles === css ? (
          <Button color='orange' to={`/${product.name}`} />
        ) : (
          <Price styles={styles} price={product.price} />
        )}
      </div>
    </div>
  )
}
export default product

const Price = ({ styles, price }) => {
  return (
    <div className={classNames(styles.price)}>
      <h3 className={classNames(styles.price__figure)}>${price}</h3>
      <div className={classNames(styles.price__check)}>
        <div className={classNames(styles.price__adjust)}>
          <p>-</p>
          <p>1</p>
          <p>+</p>
        </div>
        <button type='button' className={classNames(styles.price__add)}>
          ADD TO CART
        </button>
      </div>
    </div>
  )
}
