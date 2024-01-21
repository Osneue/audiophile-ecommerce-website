import { createContext, useContext, useRef, useState } from 'react'

const NavbarContext = createContext()

export const useNavbar = () => {
  const { isCartOpen, setIsCartOpen, cartRef } = useContext(NavbarContext)

  const openCart = () => setIsCartOpen(true)
  const closeCart = () => setIsCartOpen(false)
  return { isCartOpen, setIsCartOpen, openCart, closeCart, cartRef }
}

export const NavbarContextProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const cartRef = useRef(null)

  return (
    <NavbarContext.Provider value={{ isCartOpen, setIsCartOpen, cartRef }}>
      {children}
    </NavbarContext.Provider>
  )
}
