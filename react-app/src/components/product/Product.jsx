import classNames from 'classnames'
import { useNavigate } from 'react-router-dom'
import Button from 'src/components/button'
import orangeBtnStyle from 'src/components/button/theme/orange.module.css'
import { showPrice } from 'src/utility'
import { useCart } from '../cart/cart-context'
import NumAdjust from '../num-adjust'
import { useProduct } from './product-context'
import previewStyle from './product-preview.module.css'

const product = ({ product, isRightPhoto, styles = previewStyle }) => {
  const navigate = useNavigate()

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
        {styles === previewStyle ? (
          <div className={styles.product__buttonContainer}>
            <Button
              theme={orangeBtnStyle}
              onClick={() => navigate(`/${product.name}`)}
            >
              See Product
            </Button>
          </div>
        ) : (
          <Price styles={styles} target={product} />
        )}
      </div>
    </div>
  )
}
export default product

const Price = ({ styles, target }) => {
  const { getNum: getProductNum, setNum: setProductNum } = useProduct()
  const { addNum: addCartNum } = useCart()

  const handleAddToCart = () => {
    const num = getProductNum(target.name)
    addCartNum(target, num)
    setProductNum(target.name, 1)
  }

  return (
    <div className={classNames(styles.price)}>
      <h3 className={classNames(styles.price__figure)}>{`$ ${showPrice(
        target.price
      )}`}</h3>
      <div className={classNames(styles.price__check)}>
        <NumAdjust
          name={target.name}
          setNum={setProductNum}
          getNum={getProductNum}
        />
        <div className={styles.price__btnContainer}>
          <Button theme={orangeBtnStyle} onClick={() => handleAddToCart()}>
            ADD TO CART
          </Button>
        </div>
      </div>
    </div>
  )
}
