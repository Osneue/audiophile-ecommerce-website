import classNames from 'classnames'
import Button from 'src/components/button'
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
          <Price styles={styles} price={product.price} name={product.name} />
        )}
      </div>
    </div>
  )
}
export default product

const Price = ({ styles, price, name }) => {
  const [products, setProducts] = useProduct()

  // console.log(name, products)

  const getAmount = () => {
    const index = products.findIndex((i) => i.name == name)
    if (index < 0) return 1
    return products[index].num
  }

  const addAmount = () => {
    const newProducts = [...products]
    const index = newProducts.findIndex((i) => i.name == name)
    if (index < 0) throw new Error(`Can't find this product`)
    if (newProducts[index].num < 99) newProducts[index].num++
    setProducts(newProducts)
    // console.log(newProducts)
  }

  const subAmount = () => {
    const newProducts = [...products]
    const index = newProducts.findIndex((i) => i.name == name)
    if (index < 0) throw new Error(`Can't find this product`)
    if (newProducts[index].num > 1) newProducts[index].num--
    setProducts(newProducts)
    // console.log(newProducts)
  }

  const handleInput = (input) => {
    if (!/^\d*$/.test(input.value)) return
    const newProducts = [...products]
    const index = newProducts.findIndex((i) => i.name == name)
    if (index < 0) throw new Error(`Can't find this product`)
    newProducts[index].num = input.value
    setProducts(newProducts)
  }

  const handleInputLoseFocus = () => {
    const newProducts = [...products]
    const index = newProducts.findIndex((i) => i.name == name)
    if (index < 0) throw new Error(`Can't find this product`)
    if (newProducts[index].num > 99) newProducts[index].num = 99
    if (newProducts[index].num < 1) newProducts[index].num = 1
    setProducts(newProducts)
  }

  return (
    <div className={classNames(styles.price)}>
      <h3 className={classNames(styles.price__figure)}>${price}</h3>
      <div className={classNames(styles.price__check)}>
        <div className={classNames(styles.price__adjust)}>
          <p className={styles.price__minus} onClick={() => subAmount()}>
            -
          </p>
          {/* <p contentEditable='true'>{getAmount()}</p> */}
          <input
            type='text'
            className={styles.price__num}
            value={getAmount()}
            onChange={(e) => handleInput(e.target)}
            onBlur={() => handleInputLoseFocus()}
          />
          <p className={styles.price__plus} onClick={() => addAmount()}>
            +
          </p>
        </div>
        <button type='button' className={classNames(styles.price__add)}>
          ADD TO CART
        </button>
      </div>
    </div>
  )
}
