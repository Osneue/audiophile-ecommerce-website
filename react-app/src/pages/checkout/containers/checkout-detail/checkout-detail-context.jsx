import { createContext, useContext } from 'react'
import useCheckoutDetail from './useCheckoutDetail'

const CheckoutDetailContext = createContext()

export const useCheckoutDetailContext = () => {
  return useContext(CheckoutDetailContext)
}

export const CheckoutDetailContextProvider = ({ children }) => {
  const detail = useCheckoutDetail()
  return (
    <CheckoutDetailContext.Provider value={detail}>
      {children}
    </CheckoutDetailContext.Provider>
  )
}
