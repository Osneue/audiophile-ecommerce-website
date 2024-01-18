import classNames from 'classnames'
import Button from 'src/components/button'
import { showPrice } from 'src/utility'
import { useCart } from '../cart/cart-context'
import NumAdjust from '../num-adjust'
import { useProduct } from './product-context'
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
          <Price styles={styles} target={product} />
        )}
      </div>
    </div>
  )
}
export default product

const Price = ({ styles, target }) => {
  const [products, setProducts] = useProduct()
  const [cart, setCart] = useCart()

  const handleAddToCart = () => {
    // console.log('add to cart')

    const newProducts = [...products]
    const productIndex = newProducts.findIndex((i) => i.name == target.name)
    if (productIndex < 0) throw new Error(`Can't find this product`)

    const newCart = [...cart]
    const cartIndex = newCart.findIndex((i) => i.name == target.name)
    if (cartIndex < 0) {
      newCart.push({ ...target, num: newProducts[productIndex].num })
    } else {
      newCart[cartIndex].num += newProducts[productIndex].num
      newCart[cartIndex].num = Math.min(99, newCart[cartIndex].num)
      newCart[cartIndex].num = Math.max(0, newCart[cartIndex].num)
    }

    newProducts[productIndex].num = 1

    setProducts(newProducts)
    setCart(newCart)

    // console.log(newProducts, newCart)
  }

  return (
    <div className={classNames(styles.price)}>
      <h3 className={classNames(styles.price__figure)}>{`$ ${showPrice(
        target.price
      )}`}</h3>
      <div className={classNames(styles.price__check)}>
        <NumAdjust
          name={target.name}
          products={products}
          setProducts={setProducts}
        />
        <button
          type='button'
          className={classNames(styles.price__add)}
          onClick={() => handleAddToCart()}
        >
          ADD TO CART
        </button>
      </div>
    </div>
  )
}
