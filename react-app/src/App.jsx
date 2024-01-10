import { useState } from 'react'
import Category from './Category'
import Checkout from './Checkout'
import Home from './Home'

const PAGE_HOME = 'HOME'
const PAGE_CATEGORY = 'CATEGORY'
const PAGE_CHECKOUT = 'CHECKOUT'

const App = () => {
  const [page, setPage] = useState(PAGE_HOME)

  return (
    <>
      {page === PAGE_HOME && <Home />}
      {page === PAGE_CATEGORY && <Category />}
      {page === PAGE_CHECKOUT && <Checkout />}
    </>
  )
}
export default App
