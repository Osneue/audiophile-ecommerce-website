import { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export const useCart = () => {
  const [cart, setCart] = useContext(CartContext)

  const getNum = (name) => {
    const index = cart.findIndex((i) => i.name == name)
    if (index < 0) return 1
    return cart[index].num
  }

  const setNum = (name, num) => {
    const newCart = [...cart]
    const index = newCart.findIndex((i) => i.name == name)
    if (index < 0) throw new Error(`Can't find this product`)
    newCart[index].num = num
    setCart(newCart)
  }

  const clearNum = () => {
    setCart([])
  }

  const addNum = (product, num) => {
    const newCart = [...cart]
    const cartIndex = newCart.findIndex((i) => i.name == product.name)
    if (cartIndex < 0) {
      newCart.push({ ...product, num })
    } else {
      newCart[cartIndex].num += num
      newCart[cartIndex].num = Math.min(99, newCart[cartIndex].num)
      newCart[cartIndex].num = Math.max(0, newCart[cartIndex].num)
    }
    setCart(newCart)
  }

  const getTotalPrice = () => {
    let amount = 0
    cart.forEach((item) => {
      amount += Number(item.price) * Number(item.num)
    })
    return amount
  }

  return { cart, getNum, setNum, clearNum, addNum, getTotalPrice }
}

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  return (
    <CartContext.Provider value={[cart, setCart]}>
      {children}
    </CartContext.Provider>
  )
}
