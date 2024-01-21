import classNames from 'classnames'
import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from 'src/components/button'
import orangeBtnStyle from 'src/components/button/theme/orange.module.css'
import CartItem from 'src/components/cart-item/CartItem'
import { useCart } from 'src/components/cart/cart-context'
import { IconOrderConfirmation } from 'src/components/svgs'
import { showPrice } from 'src/utilities'
import { useSummary } from '../../containers/summary/summary-context'
import styles from './modal.module.css'
import useModalScroll from './useModalScroll'

const Modal = () => {
  const { grandTotal } = useSummary()
  const navigate = useNavigate()
  const { clearNum } = useCart()
  const [isSticky, setIsSticky] = useState(false)
  const modalRef = useRef(null)
  useModalScroll((width, scrollY) => {
    handleModalScroll(width, scrollY, modalRef, setIsSticky)
  })

  return (
    <div
      ref={modalRef}
      className={classNames(styles.modal, isSticky ? styles.sticky : '')}
    >
      <IconOrderConfirmation className={styles.iconOrderConf} />

      <h2 className={styles.title}>THANK YOU</h2>
      <h2 className={styles.title}>FOR YOUR ORDER</h2>

      <p className={styles.emailConf}>
        You will receive an email confirmation shortly.
      </p>

      <div className={styles.content}>
        <LeftContent />
        <div className={styles.rightContent}>
          <h3>GRAND TOTAL</h3>
          <p>{`$ ${showPrice(grandTotal)}`}</p>
        </div>
      </div>

      <div>
        <Button
          theme={orangeBtnStyle}
          onClick={() => {
            clearNum()
            navigate('/')
          }}
        >
          BACK TO HOME
        </Button>
      </div>
    </div>
  )
}
export default Modal

const handleModalScroll = (width, scrollY, modalRef, setIsSticky) => {
  const getFontSize = () => {
    const element = modalRef.current
    if (element) {
      // Get the computed style of the element
      const computedStyle = window.getComputedStyle(element)
      // Get the font size from the computed style
      const fontSize = computedStyle.getPropertyValue('font-size')
      return parseFloat(fontSize) // The font size as a string, e.g., "16px"
    }
  }
  const fontSize = getFontSize()
  let initialOffset

  if (width < 600) initialOffset = fontSize * 15
  else if (width < 850) initialOffset = fontSize * 12
  else initialOffset = fontSize * 6.5

  if (scrollY > initialOffset) setIsSticky(true)
  else setIsSticky(false)
}

const LeftContent = () => {
  const { cart, setNum, getNum } = useCart()
  const remain = cart.length - 1
  const [isItemsOpen, setIsItemsOpen] = useState(false)

  return (
    <div className={styles.leftContent}>
      {isItemsOpen ? (
        <>
          <div>
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
          {remain > 0 && (
            <p
              className={styles.otherItems}
              onClick={() => setIsItemsOpen(!isItemsOpen)}
            >
              View less
            </p>
          )}
        </>
      ) : (
        <>
          <div>
            {cart.map((item, index) => {
              if (index > 0) return null
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
          {remain > 0 && (
            <p
              className={styles.otherItems}
              onClick={() => setIsItemsOpen(!isItemsOpen)}
            >
              and {remain} other item(s)
            </p>
          )}
        </>
      )}
    </div>
  )
}
