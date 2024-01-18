import { useProduct } from '../product/product-context'
import styles from './num-adjust.module.css'

const NumAdjust = ({ name, products, setProducts }) => {
  // const [products, setProducts] = useProduct()

  const getAmount = () => {
    const index = products.findIndex((i) => i.name == name)
    if (index < 0) return 1
    return products[index].num
  }

  const addAmount = () => {
    const newProducts = [...products]
    const index = newProducts.findIndex((i) => i.name == name)
    if (index < 0) throw new Error(`Can't find this product`)
    if (newProducts[index].num < 99) newProducts[index].num++
    setProducts(newProducts)
    // console.log(newProducts)
  }

  const subAmount = () => {
    const newProducts = [...products]
    const index = newProducts.findIndex((i) => i.name == name)
    if (index < 0) throw new Error(`Can't find this product`)
    if (newProducts[index].num > 1) newProducts[index].num--
    setProducts(newProducts)
    // console.log(newProducts)
  }

  const handleInput = (input) => {
    if (!/^\d*$/.test(input.value)) return
    const newProducts = [...products]
    const index = newProducts.findIndex((i) => i.name == name)
    if (index < 0) throw new Error(`Can't find this product`)
    newProducts[index].num = input.value
    setProducts(newProducts)
  }

  const handleInputLoseFocus = () => {
    const newProducts = [...products]
    const index = newProducts.findIndex((i) => i.name == name)
    if (index < 0) throw new Error(`Can't find this product`)
    if (newProducts[index].num > 99) newProducts[index].num = 99
    if (newProducts[index].num < 1) newProducts[index].num = 1
    setProducts(newProducts)
  }

  return (
    <div className={styles.price__adjust}>
      <p className={styles.price__minus} onClick={() => subAmount()}>
        -
      </p>
      <input
        type='text'
        className={styles.price__num}
        value={getAmount()}
        onChange={(e) => handleInput(e.target)}
        onBlur={() => handleInputLoseFocus()}
      />
      <p className={styles.price__plus} onClick={() => addAmount()}>
        +
      </p>
    </div>
  )
}
export default NumAdjust
