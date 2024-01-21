import classNames from 'classnames'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from 'src/components/button'
import orangeBtnStyle from 'src/components/button/theme/orange.module.css'
import { useNavbar } from 'src/containers/navbar/navbar-context'
import { showPrice } from 'src/utility'
import { useCart } from '../cart/cart-context'
import NumAdjust from '../num-adjust'
import { useProduct } from './product-context'
import previewStyle from './product-preview.module.css'

const Product = ({ product, isRightPhoto, styles = previewStyle }) => {
  const navigate = useNavigate()
  const productPhoto = useRef(null)
  const productPhotoImg = useRef(null)

  return (
    <div className={classNames(styles.product, 'container-centre')}>
      <div
        ref={productPhoto}
        className={
          isRightPhoto
            ? classNames(styles.product__photo, styles.photo_last)
            : styles.product__photo
        }
      >
        <img
          ref={productPhotoImg}
          src={product.photo.preview}
          alt={product.name}
        />
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
          <Price
            styles={styles}
            target={product}
            productPhoto={productPhoto}
            productPhotoImg={productPhotoImg}
          />
        )}
      </div>
    </div>
  )
}
export default Product

const Price = ({ styles, target, productPhoto, productPhotoImg }) => {
  const { getNum: getProductNum, setNum: setProductNum } = useProduct()
  const { addNum: addCartNum } = useCart()
  const { cartRef } = useNavbar()

  const flyToCart = () => {
    const img = productPhotoImg.current.cloneNode()
    const container = productPhoto.current
    const cart = cartRef.current

    img.classList.add(styles.product_animation)
    container.appendChild(img)

    const getCentre = (pos) => {
      return { x: (pos.left + pos.right) / 2, y: (pos.top + pos.bottom) / 2 }
    }

    const cartPos = cart.getBoundingClientRect()
    const imgPos = img.getBoundingClientRect()

    const cartCentre = getCentre(cartPos)
    const imgCentre = getCentre(imgPos)

    const xOffset = cartCentre.x - imgCentre.x
    const yOffset = cartCentre.y - imgCentre.y

    img.style.setProperty('--x-offset', `${xOffset.toFixed(2)}px`)
    img.style.setProperty('--y-offset', `${yOffset.toFixed(2)}px`)

    setTimeout(() => {
      container.removeChild(img)
    }, 1000)
  }

  const handleAddToCart = () => {
    const num = getProductNum(target.name)
    addCartNum(target, num)
    setProductNum(target.name, 1)
    flyToCart()
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
