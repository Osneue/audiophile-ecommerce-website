import CartItem from 'src/components/cart-item'
import { useCart } from 'src/components/cart/cart-context'
import { showPrice } from 'src/utility'
import styles from './summary.module.css'

const Summary = () => {
  const { cart, getNum, setNum, getTotalPrice } = useCart()
  const totalPrice = getTotalPrice()
  const shippingPrice = 50
  const vat = Math.floor(totalPrice * 0.2)
  const grandTotal = totalPrice + shippingPrice + vat

  return (
    <div className={styles.summary}>
      <h2 className={styles.title}>Summary</h2>
      <div className={styles.cartItems}>
        {cart.map((item) => {
          return (
            <CartItem
              key={item.name}
              theme='summary'
              item={item}
              setNum={setNum}
              getNum={getNum}
            />
          )
        })}
      </div>
      <div className={styles.feeContainer}>
        <div className={styles.fee}>
          <h3>TOTAL</h3>
          <p>{`$ ${totalPrice}`}</p>
        </div>
        <div className={styles.fee}>
          <h3>SHIPPING</h3>
          <p>{`$ ${showPrice(shippingPrice)}`}</p>
        </div>
        <div className={styles.fee}>
          <h3>VAT (INCLUDED)</h3>
          <p>{`$ ${showPrice(vat)}`}</p>
        </div>
        <div className={styles.fee}>
          <h3>GRAND TOTAL</h3>
          <p>{`$ ${showPrice(grandTotal)}`}</p>
        </div>
      </div>
      <button className={styles.button}>CONTINUE & PAY</button>
    </div>
  )
}
export default Summary