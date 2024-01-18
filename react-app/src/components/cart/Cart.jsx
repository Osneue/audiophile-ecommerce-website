import { showPrice } from 'src/utility'
import NumAdjust from '../num-adjust/NumAdjust'
import { useCart } from './cart-context'
import styles from './cart.module.css'

const CartItem = ({ item, setNum, getNum }) => {
  // console.log(item)
  return (
    <div className={styles.cart__item}>
      <div className={styles.cart__item__imgContainer}>
        <img src={item.photo.preview} alt='' />
      </div>
      <div className={styles.cart__item__nameContainer}>
        <h3>{item.shortName}</h3>
        <p>{`$ ${item.price}`}</p>
      </div>
      <div className={styles.cart__item__adjustContainer}>
        <NumAdjust name={item.name} setNum={setNum} getNum={getNum} />
      </div>
    </div>
  )
}

const Cart = () => {
  const { cart, getNum, setNum, clearNum } = useCart()

  const getAmount = () => {
    let amount = 0
    cart.forEach((item) => {
      amount += Number(item.price) * Number(item.num)
    })
    return showPrice(amount)
  }

  const handleClick = () => {
    clearNum()
  }

  return (
    <div className={styles.cart}>
      <div className={styles.cart__title}>
        <h2>cart (3)</h2>
        <button
          onClick={() => {
            handleClick()
          }}
        >
          Remove all
        </button>
      </div>
      <div className={styles.cart__content}>
        {cart.map((item) => {
          return (
            <CartItem
              key={item.name}
              item={item}
              setNum={setNum}
              getNum={getNum}
            />
          )
        })}
      </div>
      <div className={styles.cart__amount}>
        <h3>Total</h3>
        <p>{`$ ${getAmount()}`}</p>
      </div>
      <button className={styles.cart__checkout}>checkout</button>
    </div>
  )
}

export default Cart
