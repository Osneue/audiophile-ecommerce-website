import productData from 'src/data'

import { createContext, useContext, useEffect, useState } from 'react'

const ProductContext = createContext()

export const useProduct = () => {
  const [products, setProducts] = useContext(ProductContext)

  const getNum = (name) => {
    const index = products.findIndex((i) => i.name == name)
    if (index < 0) return 1
    return products[index].num
  }

  const setNum = (name, num) => {
    const newProducts = [...products]
    const index = newProducts.findIndex((i) => i.name == name)
    if (index < 0) throw new Error(`Can't find this product`)
    newProducts[index].num = num
    setProducts(newProducts)
  }

  return { getNum, setNum }
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
