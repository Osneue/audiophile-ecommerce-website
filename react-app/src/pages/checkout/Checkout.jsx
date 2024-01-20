import classNames from 'classnames'
import { useNavigate } from 'react-router-dom'
import Button from 'src/components/button'
import goBackStyle from 'src/components/button/theme/go-back.module.css'
import styles from './checkout.module.css'
import CheckoutDetail from './containers/checkout-detail'
import Summary from './containers/summary'

const Checkout = () => {
  const navigate = useNavigate()

  return (
    <div className={classNames(styles.checkout, 'container-centre')}>
      <div className={styles.goBack}>
        <Button
          theme={goBackStyle}
          onClick={() => {
            navigate(-1)
          }}
        >
          Go Back
        </Button>
      </div>
      <div className={styles.content}>
        <div className={styles.detail}>
          <CheckoutDetail />
        </div>
        <div className={styles.summary}>
          <Summary />
        </div>
      </div>
    </div>
  )
}
export default Checkout
