import { createContext, useContext, useState } from 'react'

const NavbarContext = createContext()

export const useNavbar = () => {
  const [isCartOpen, setIsCartOpen] = useContext(NavbarContext)

  const openCart = () => setIsCartOpen(true)
  const closeCart = () => setIsCartOpen(false)
  return { isCartOpen, setIsCartOpen, openCart, closeCart }
}

export const NavbarContextProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false)

  return (
    <NavbarContext.Provider value={[isCartOpen, setIsCartOpen]}>
      {children}
    </NavbarContext.Provider>
  )
}
