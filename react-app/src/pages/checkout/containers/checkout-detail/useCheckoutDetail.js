import { useState } from 'react'

const useCheckoutDetail = () => {
  const radio = ['e-Money', 'Cash on Delivery']
  const [selectedRadio, setSelectedRadio] = useState(radio[0])
  const isRadioSelected = (radio) => {
    return radio == selectedRadio
  }

  const [buyer, setBuyer] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    zipCode: '',
    city: '',
    country: '',
    eMoneyNum: '',
    eMoneyPin: '',

    isEmailValid: true,
    isZIPCodeValid: true,
    isPhoneValid: true,
    isEMoneyNumValid: true,
    isEMoneyPinValid: true,
  })

  const regExps = [
    /^[0-9a-zA-Z_]{3,}@[0-9a-zA-Z]+.[a-zA-Z]{2,}$/,
    /^[0-9]{5}$/,
    /\+?[0-9 -]{11,}$/,
    /[0-9]{6,}$/,
    /[0-9]{6,8}$/,
  ]

  const handleChange = (e) => {
    let newBuyer = { ...buyer, [e.target.name]: e.target.value }

    if (e.target.name === 'email')
      newBuyer = __handleChange(
        regExps[0],
        e.target.value,
        'isEmailValid',
        newBuyer
      )
    if (e.target.name === 'zipCode')
      newBuyer = __handleChange(
        regExps[1],
        e.target.value,
        'isZIPCodeValid',
        newBuyer
      )
    if (e.target.name === 'phone')
      newBuyer = __handleChange(
        regExps[2],
        e.target.value,
        'isPhoneValid',
        newBuyer
      )
    if (e.target.name === 'eMoneyNum')
      newBuyer = __handleChange(
        regExps[3],
        e.target.value,
        'isEMoneyNumValid',
        newBuyer
      )
    if (e.target.name === 'eMoneyPin')
      newBuyer = __handleChange(
        regExps[4],
        e.target.value,
        'isEMoneyPinValid',
        newBuyer
      )

    setBuyer(newBuyer)
  }

  const __handleChange = (regExp, text, attr, newBuyer) => {
    if (regExp.test(text)) {
      return { ...newBuyer, [attr]: true }
    }
    return newBuyer
  }

  const handleBlur = (e) => {
    if (e.target.name === 'email')
      __handleBlur(regExps[0], e.target.value, 'isEmailValid')
    if (e.target.name === 'zipCode')
      __handleBlur(regExps[1], e.target.value, 'isZIPCodeValid')
    if (e.target.name === 'phone')
      __handleBlur(regExps[2], e.target.value, 'isPhoneValid')
    if (e.target.name === 'eMoneyNum')
      __handleBlur(regExps[3], e.target.value, 'isEMoneyNumValid')
    if (e.target.name === 'eMoneyPin')
      __handleBlur(regExps[4], e.target.value, 'isEMoneyPinValid')
  }

  const __handleBlur = (regExp, text, attr) => {
    if (!regExp.test(text)) {
      setBuyer({ ...buyer, [attr]: false })
      return
    }
    setBuyer({ ...buyer, [attr]: true })
  }

  const isBuyerValid = () => {
    if (!buyer.isEmailValid) return false
    if (!buyer.isZIPCodeValid) return false
    if (!buyer.isPhoneValid) return false
    if (!buyer.isEMoneyNumValid) return false
    if (!buyer.isEMoneyPinValid) return false

    if (!buyer.name.length) return false
    if (!buyer.email.length) return false
    if (!buyer.phone.length) return false
    if (!buyer.address.length) return false
    if (!buyer.zipCode.length) return false
    if (!buyer.city.length) return false
    if (!buyer.country.length) return false

    if (selectedRadio === radio[0]) {
      if (!buyer.eMoneyNum.length) return false
      if (!buyer.eMoneyPin.length) return false
    }

    return true
  }

  return {
    buyer,
    isBuyerValid,
    handleChange,
    handleBlur,
    radio,
    isRadioSelected,
    setSelectedRadio,
  }
}
export default useCheckoutDetail
