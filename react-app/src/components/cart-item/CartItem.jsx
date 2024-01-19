import { showPrice } from 'src/utility'
import NumAdjust from '../num-adjust/NumAdjust'
import styles from './cart-item.module.css'
import themeCart from './theme-cart.module.css'
import themeSummary from './theme-summary.module.css'

const CartItem = ({ item, setNum, getNum, theme = 'cart' }) => {
  return (
    <div className={styles.cart__item}>
      <div className={styles.cart__item__imgContainer}>
        <img src={item.photo.preview} alt='' />
      </div>
      <div className={styles.cart__item__nameContainer}>
        <h3>{item.shortName}</h3>
        <p>{`$ ${showPrice(item.price)}`}</p>
      </div>
      {theme == 'cart' && (
        <div className={themeCart.cart__item__adjustContainer}>
          <NumAdjust name={item.name} setNum={setNum} getNum={getNum} />
        </div>
      )}
      {theme == 'summary' && (
        <div className={themeSummary.cart__item__adjustContainer}>
          <p>{`x${getNum(item.name)}`}</p>
        </div>
      )}
    </div>
  )
}

export default CartItem
