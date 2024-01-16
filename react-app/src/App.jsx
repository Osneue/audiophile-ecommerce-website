import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './containers/navbar'
import Category from './pages/category'
import Detail from './pages/detail/Detail'
import Home from './pages/home'

const ScrollToTop = () => {
  window.scrollTo(0, 0)
}

const App = () => {
  return (
    <>
      <Navbar />
      <Detail category='HEADPHONES' productId={0} />
      {/* <Detail category='HEADPHONES' productId={1} /> */}
      {/* <Detail category='HEADPHONES' productId={2} /> */}
      {/* <Detail category='SPEAKERS' productId={0} /> */}
      {/* <Detail category='SPEAKERS' productId={1} /> */}
      {/* <Detail category='EARPHONES' productId={0} /> */}
    </>
  )
  // return (
  //   <>
  //     <Navbar />
  //     <Routes>
  //       <Route
  //         path='/'
  //         element={
  //           <>
  //             <Home />
  //             <ScrollToTop />
  //           </>
  //         }
  //       />
  //       <Route
  //         path='/headphones'
  //         element={
  //           <>
  //             <Category category='HEADPHONES' />
  //             <ScrollToTop />
  //           </>
  //         }
  //       />
  //       <Route
  //         path='/earphones'
  //         element={
  //           <>
  //             <Category category='EARPHONES' />
  //             <ScrollToTop />
  //           </>
  //         }
  //       />
  //       <Route
  //         path='/speakers'
  //         element={
  //           <>
  //             <Category category='SPEAKERS' />
  //             <ScrollToTop />
  //           </>
  //         }
  //       />
  //     </Routes>
  //   </>
  // )
}
export default App
