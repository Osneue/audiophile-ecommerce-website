import { useNavigate } from 'react-router-dom'
import orangeBtnStyle from 'src/components/button/theme/orange.module.css'
import { useNavbar } from 'src/containers/navbar/navbar-context'
import { showPrice } from 'src/utility'
import Button from '../button/Button'
import CartItem from '../cart-item/CartItem'
import { useCart } from './cart-context'
import styles from './cart.module.css'

const Cart = () => {
  const { cart, getNum, setNum, clearNum, getTotalPrice } = useCart()
  const { closeCart } = useNavbar()
  const navigate = useNavigate()

  const handleClick = () => {
    clearNum()
  }

  return (
    <div className={styles.cart}>
      <div className={styles.cart__title}>
        <h2>{`cart (${cart.length})`}</h2>
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
        <p>{`$ ${showPrice(getTotalPrice())}`}</p>
      </div>
      {!!cart.length && (
        <Button
          theme={orangeBtnStyle}
          onClick={() => {
            closeCart()
            navigate('/checkout')
          }}
        >
          checkout
        </Button>
      )}
    </div>
  )
}

export default Cart
