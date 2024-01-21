import classNames from 'classnames'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from 'src/components/button'
import goBackStyle from 'src/components/button/theme/go-back.module.css'
import Overlay from 'src/components/overlay'
import styles from './checkout.module.css'
import Modal from './components/modal/Modal'
import CheckoutDetail from './containers/checkout-detail'
import { CheckoutDetailContextProvider } from './containers/checkout-detail/checkout-detail-context'
import Summary from './containers/summary'
import { SummaryContextProvider } from './containers/summary/summary-context'

const Checkout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const navigate = useNavigate()

  return (
    <CheckoutDetailContextProvider>
      <SummaryContextProvider>
        {isModalOpen && <Overlay />}
        {isModalOpen && <Modal />}
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
              <Summary setIsModalOpen={setIsModalOpen} />
            </div>
          </div>
        </div>
      </SummaryContextProvider>
    </CheckoutDetailContextProvider>
  )
}
export default Checkout
