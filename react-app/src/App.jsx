import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Category from './pages/category'
import Home from './pages/home'

const ScrollToTop = () => {
  window.scrollTo(0, 0)
}

const App = () => {
  const [menu, setMenu] = useState(false)

  return (
    <Routes>
      <Route
        path='/'
        element={
          <>
            <Home menu={menu} setMenu={setMenu} />
            <ScrollToTop />
          </>
        }
      />
      <Route
        path='/headphones'
        element={
          <>
            <Category category='HEADPHONES' menu={menu} setMenu={setMenu} />
            <ScrollToTop />
          </>
        }
      />
      <Route
        path='/earphones'
        element={
          <>
            <Category category='EARPHONES' menu={menu} setMenu={setMenu} />
            <ScrollToTop />
          </>
        }
      />
      <Route
        path='/speakers'
        element={
          <>
            <Category category='SPEAKERS' menu={menu} setMenu={setMenu} />
            <ScrollToTop />
          </>
        }
      />
    </Routes>
  )
}
export default App
