import { Route, Routes } from 'react-router-dom'
import products from 'src/data'
import './App.css'
import Navbar from './containers/navbar'
import { PRODUCT_CATEGORY } from './data'
import Category from './pages/category'
import Detail from './pages/detail/Detail'
import Home from './pages/home'

const ScrollToTop = () => {
  window.scrollTo(0, 0)
}

const App = () => {
  // return (
  //   <>
  //     <Navbar />
  //     <Detail product={products[0]} />
  //   </>
  // )
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Home products={products} />
              <ScrollToTop />
            </>
          }
        />
        <Route
          path='/headphones'
          element={
            <>
              <Category category={PRODUCT_CATEGORY.HEADPHONES} />
              <ScrollToTop />
            </>
          }
        />
        <Route
          path='/earphones'
          element={
            <>
              <Category category={PRODUCT_CATEGORY.EARPHONES} />
              <ScrollToTop />
            </>
          }
        />
        <Route
          path='/speakers'
          element={
            <>
              <Category category={PRODUCT_CATEGORY.SPEAKER} />
              <ScrollToTop />
            </>
          }
        />
        {products.map((product) => {
          return (
            <Route
              key={product.name}
              path={`/${product.name}`}
              element={
                <>
                  <Detail product={product} />
                  <ScrollToTop />
                </>
              }
            />
          )
        })}
      </Routes>
    </>
  )
}
export default App
