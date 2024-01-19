import { useState } from 'react'

const useCheckout = () => {
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
    payment: '',
    eMoneyNum: '',
    eMoneyPin: '',

    isEmailValid: true,
    isZIPCodeValid: true,
    isPhoneValid: true,
    isEMoneyNumValid: true,
    isEMoneyPinValid: true,
  })

  const handleChange = (e) => {
    // console.log(e.target.id, e.target.name, e.target.value)
    setBuyer({ ...buyer, [e.target.name]: e.target.value })
  }

  const handleBlur = (e) => {
    if (e.target.name === 'email') handleEmail(e.target.value)
    if (e.target.name === 'zipCode') handleZipCode(e.target.value)
    if (e.target.name === 'phone') handlePhone(e.target.value)
    if (e.target.name === 'eMoneyNum') handleEMoneyNum(e.target.value)
    if (e.target.name === 'eMoneyPin') handleEMoneyPin(e.target.value)
  }

  const handleEmail = (address) => {
    if (!/^[0-9a-zA-Z_]{3,}@[0-9a-zA-Z]+.[a-zA-Z]{2,}$/.test(address)) {
      setBuyer({ ...buyer, isEmailValid: false })
      return
    }
    setBuyer({ ...buyer, isEmailValid: true })
  }

  const handleZipCode = (code) => {
    if (!/^[0-9]{5}$/.test(code)) {
      setBuyer({ ...buyer, isZIPCodeValid: false })
      return
    }
    setBuyer({ ...buyer, isZIPCodeValid: true })
  }

  const handlePhone = (phone) => {
    if (!/\+?[0-9 -]{11,}$/.test(phone)) {
      setBuyer({ ...buyer, isPhoneValid: false })
      return
    }
    setBuyer({ ...buyer, isPhoneValid: true })
  }

  const handleEMoneyNum = (num) => {
    if (!/[0-9]{6,}$/.test(num)) {
      setBuyer({ ...buyer, isEMoneyNumValid: false })
      return
    }
    setBuyer({ ...buyer, isEMoneyNumValid: true })
  }

  const handleEMoneyPin = (pin) => {
    if (!/[0-9]{6,8}$/.test(pin)) {
      setBuyer({ ...buyer, isEMoneyPinValid: false })
      return
    }
    setBuyer({ ...buyer, isEMoneyPinValid: true })
  }

  return {
    buyer,
    handleChange,
    handleBlur,
    radio,
    isRadioSelected,
    setSelectedRadio,
  }
}
export default useCheckout
