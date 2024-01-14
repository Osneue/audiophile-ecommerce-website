import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Category from './pages/category'
import Home from './pages/home'

const App = () => {
  const [menu, setMenu] = useState(false)

  return (
    <Routes>
      <Route path='/' element={<Home menu={menu} setMenu={setMenu} />} />
      <Route
        path='/headphones'
        element={
          <Category category='HEADPHONES' menu={menu} setMenu={setMenu} />
        }
      />
      <Route
        path='/earphones'
        element={
          <Category category='EARPHONES' menu={menu} setMenu={setMenu} />
        }
      />
      <Route
        path='/speakers'
        element={<Category category='SPEAKERS' menu={menu} setMenu={setMenu} />}
      />
    </Routes>
  )
}
export default App
