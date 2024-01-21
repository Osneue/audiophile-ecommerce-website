import { useEffect, useState } from 'react'
import Button from 'src/components/button/Button'
import orangeBtnStyle from 'src/components/button/theme/orange.module.css'
import CartItem from 'src/components/cart-item'
import { useCart } from 'src/components/cart/cart-context'
import { showPrice } from 'src/utility'
import { useCheckoutDetailContext } from '../checkout-detail/checkout-detail-context'
import { useSummary } from './summary-context'
import styles from './summary.module.css'

const Summary = ({ setIsModalOpen }) => {
  const { cart, getNum, setNum, getTotalPrice } = useCart()
  const { setGrandTotal } = useSummary()
  const { isBuyerValid } = useCheckoutDetailContext()
  const [isWarningOpen, setIsWarningOpen] = useState(false)
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
          <p className={styles.grandTotalFigure}>{`$ ${showPrice(
            grandTotal
          )}`}</p>
        </div>
      </div>
      <Button
        theme={orangeBtnStyle}
        onClick={() => {
          if (!isBuyerValid()) {
            setIsWarningOpen(true)
            return
          }
          setGrandTotal(grandTotal)
          setIsModalOpen(true)
        }}
      >
        CONTINUE & PAY
      </Button>
      {isWarningOpen && (
        <p className={styles.warning}>Please fill your information first!</p>
      )}
    </div>
  )
}
export default Summary
