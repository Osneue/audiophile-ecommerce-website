import productData from 'src/data'

import { createContext, useContext, useEffect, useState } from 'react'

const ProductContext = createContext()

export const useProduct = () => {
  return useContext(ProductContext)
}

export const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  // console.log(111)

  useEffect(() => {
    const newProducts = []
    productData.forEach((item) => {
      newProducts.push({ ...item, num: 1 })
    })
    setProducts(newProducts)
    // console.log('init product state', newProducts)
  }, [])

  return (
    <ProductContext.Provider value={[products, setProducts]}>
      {children}
    </ProductContext.Provider>
  )
}
