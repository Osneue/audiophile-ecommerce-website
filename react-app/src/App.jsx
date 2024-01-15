import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './containers/navbar'
import Category from './pages/category'
import Home from './pages/home'

const ScrollToTop = () => {
  window.scrollTo(0, 0)
}

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Home />
              <ScrollToTop />
            </>
          }
        />
        <Route
          path='/headphones'
          element={
            <>
              <Category category='HEADPHONES' />
              <ScrollToTop />
            </>
          }
        />
        <Route
          path='/earphones'
          element={
            <>
              <Category category='EARPHONES' />
              <ScrollToTop />
            </>
          }
        />
        <Route
          path='/speakers'
          element={
            <>
              <Category category='SPEAKERS' />
              <ScrollToTop />
            </>
          }
        />
      </Routes>
    </>
  )
}
export default App
