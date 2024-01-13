import { useState } from 'react'
import Home from './Home'

const PAGE_HOME = 'HOME'
const PAGE_CATEGORY = 'CATEGORY'
const PAGE_CHECKOUT = 'CHECKOUT'

const App = () => {
  const [page, setPage] = useState(PAGE_HOME)

  return <>{page === PAGE_HOME && <Home />}</>
}
export default App
