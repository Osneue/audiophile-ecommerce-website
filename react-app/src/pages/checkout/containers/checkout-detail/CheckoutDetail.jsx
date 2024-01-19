import classNames from 'classnames'
import Radio from '../../components/radio/Radio'
import styles from './checkout-detail.module.css'
import useCheckout from './useCheckout'

const CheckoutDetail = () => {
  const {
    buyer,
    handleChange,
    handleBlur,
    radio,
    isRadioSelected,
    setSelectedRadio,
  } = useCheckout()

  const inputProps = {
    buyer,
    handleChange,
    handleBlur,
    isRadioSelected,
    setSelectedRadio,
  }

  return (
    <form className={styles.checkout}>
      <h2 className={styles.checkoutTittle}>Check out</h2>

      <div className={styles.checkoutTypeContainer}>
        <h3 className={styles.checkoutType}>Billing Details</h3>
        <div className={styles.billing}>
          <Name {...inputProps} />
          <Email {...inputProps} />
          <Phone {...inputProps} />
        </div>
      </div>

      <div className={styles.checkoutTypeContainer}>
        <h3 className={styles.checkoutType}>shipping info</h3>
        <div className={styles.shipping}>
          <Address {...inputProps} />
          <ZIPCode {...inputProps} />
          <City {...inputProps} />
          <Country {...inputProps} />
        </div>
      </div>

      <div className={styles.checkoutTypeContainer}>
        <h3 className={styles.checkoutType}>payment details</h3>
        <div>
          <div className={styles.payment}>
            <h4 className={styles.paymentTitle}>Payment Method</h4>
            <div className={styles.paymentMethod}>
              <RadioBox label={radio[0]} {...inputProps} />
              <RadioBox label={radio[1]} {...inputProps} />
            </div>
          </div>
          <div className={styles.eMoney}>
            {isRadioSelected(radio[0]) && (
              <>
                <EMoneyNum {...inputProps} />
                <EMoneyPin {...inputProps} />
              </>
            )}
          </div>
        </div>
      </div>
    </form>
  )
}
export default CheckoutDetail

const Name = ({ buyer, handleChange, handleBlur }) => {
  return (
    <div className={styles.checkoutInputContainer}>
      <label className={styles.checkoutLabel} htmlFor='name'>
        Name
      </label>
      <input
        type='text'
        id='name'
        name='name'
        value={buyer.name}
        placeholder='Alexei Ward'
        onChange={(e) => handleChange(e)}
      />
    </div>
  )
}

const Email = ({ buyer, handleChange, handleBlur }) => {
  return (
    <div
      className={classNames(
        styles.checkoutInputContainer,
        buyer.isEmailValid ? '' : styles.error
      )}
    >
      <label className={styles.checkoutLabel} htmlFor='email'>
        Email Address
        {buyer.isEmailValid || (
          <strong className={styles.wrongFormat}>Wrong format</strong>
        )}
      </label>
      <input
        type='email'
        id='email'
        name='email'
        value={buyer.email}
        placeholder='alexei@mail.com'
        onChange={(e) => handleChange(e)}
        onBlur={(e) => handleBlur(e)}
      />
    </div>
  )
}

const Phone = ({ buyer, handleChange, handleBlur }) => {
  return (
    <div
      className={classNames(
        styles.checkoutInputContainer,
        buyer.isPhoneValid ? '' : styles.error
      )}
    >
      <label className={styles.checkoutLabel} htmlFor='phone'>
        Phone Number
        {buyer.isPhoneValid || (
          <strong className={styles.wrongFormat}>Wrong format</strong>
        )}
      </label>
      <input
        type='tel'
        id='phone'
        name='phone'
        value={buyer.phone}
        placeholder='+1 202-555-0136'
        onChange={(e) => handleChange(e)}
        onBlur={(e) => handleBlur(e)}
      />
    </div>
  )
}

const Address = ({ buyer, handleChange, handleBlur }) => {
  return (
    <div className={classNames(styles.checkoutInputContainer, styles.address)}>
      <label className={styles.checkoutLabel} htmlFor='address'>
        Address
      </label>
      <input
        type='text'
        id='address'
        name='address'
        value={buyer.address}
        placeholder='1137 Williams Avenue'
        onChange={(e) => handleChange(e)}
      />
    </div>
  )
}

const ZIPCode = ({ buyer, handleChange, handleBlur }) => {
  return (
    <div
      className={classNames(
        styles.checkoutInputContainer,
        buyer.isZIPCodeValid ? '' : styles.error
      )}
    >
      <label className={styles.checkoutLabel} htmlFor='zipCode'>
        ZIPCode
        {buyer.isZIPCodeValid || (
          <strong className={styles.wrongFormat}>Wrong format</strong>
        )}
      </label>
      <input
        type='text'
        id='zipCode'
        name='zipCode'
        value={buyer.zipCode}
        placeholder='10001'
        onChange={(e) => handleChange(e)}
        onBlur={(e) => handleBlur(e)}
      />
    </div>
  )
}

const City = ({ buyer, handleChange, handleBlur }) => {
  return (
    <div className={styles.checkoutInputContainer}>
      <label className={styles.checkoutLabel} htmlFor='city'>
        City
      </label>
      <input
        type='text'
        id='city'
        name='city'
        value={buyer.city}
        placeholder='New York'
        onChange={(e) => handleChange(e)}
      />
    </div>
  )
}

const Country = ({ buyer, handleChange, handleBlur }) => {
  return (
    <div className={styles.checkoutInputContainer}>
      <label className={styles.checkoutLabel} htmlFor='country'>
        Country
      </label>
      <input
        type='text'
        id='country'
        name='country'
        value={buyer.country}
        placeholder='United States'
        onChange={(e) => handleChange(e)}
      />
    </div>
  )
}

const EMoneyNum = ({ buyer, handleChange, handleBlur }) => {
  return (
    <div
      className={classNames(
        styles.eMoneyNum,
        styles.checkoutInputContainer,
        buyer.isEMoneyNumValid ? '' : styles.error
      )}
    >
      <label className={styles.checkoutLabel} htmlFor='eMoneyNum'>
        e-Money Number
        {buyer.isEMoneyNumValid || (
          <strong className={styles.wrongFormat}>Wrong format</strong>
        )}
      </label>
      <input
        type='text'
        id='eMoneyNum'
        name='eMoneyNum'
        value={buyer.eMoneyNum}
        onChange={(e) => handleChange(e)}
        onBlur={(e) => handleBlur(e)}
      />
    </div>
  )
}

const EMoneyPin = ({ buyer, handleChange, handleBlur }) => {
  return (
    <div
      className={classNames(
        styles.eMoneyPin,
        styles.checkoutInputContainer,
        buyer.isEMoneyPinValid ? '' : styles.error
      )}
    >
      <label className={styles.checkoutLabel} htmlFor='pin'>
        e-Money PIN
        {buyer.isEMoneyPinValid || (
          <strong className={styles.wrongFormat}>Wrong format</strong>
        )}
      </label>
      <input
        type='password'
        id='eMoneyPin'
        name='eMoneyPin'
        value={buyer.eMoneyPin}
        onChange={(e) => handleChange(e)}
        onBlur={(e) => handleBlur(e)}
      />
    </div>
  )
}

const RadioBox = ({ label, isRadioSelected, setSelectedRadio }) => {
  return (
    <div
      className={classNames(
        styles.radioContainer,
        isRadioSelected(label) ? styles.active : ''
      )}
      onClick={() => setSelectedRadio(label)}
    >
      <Radio
        label={label}
        name='payment'
        checked={isRadioSelected(label)}
        onChange={setSelectedRadio}
      />
    </div>
  )
}
