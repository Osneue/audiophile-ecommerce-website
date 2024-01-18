import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Cart from 'src/components/cart'
import CustomLink from 'src/components/custom-link/CustomLink'
import Overlay from 'src/components/overlay/overlay'
import CategoryShopNav from '../../components/category-shop-nav'
import './navbar.css'

const Navbar = () => {
  const [menu, setMenu] = useState(false)
  const [cart, setCart] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 850) {
        setMenu(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const navigate = useNavigate()

  return (
    <>
      {(menu || cart) && <Overlay />}
      <nav>
        <div className='nav-container'>
          {menu && (
            <div className='nav-menu'>
              <CategoryShopNav setMenu={setMenu} />
            </div>
          )}
          <div
            className='nav-icon nav-hamburger'
            onClick={() => setMenu(!menu)}
          >
            <img
              src='./assets/shared/tablet/icon-hamburger.svg'
              alt='hamburger'
            />
          </div>
          <div
            className='nav-icon nav-logo'
            onClick={() => {
              setMenu(false)
              navigate('/')
            }}
          >
            <img src='./assets/shared/desktop/logo.svg' alt='logo' />
          </div>
          <ul>
            <CustomLink to='/'>Home</CustomLink>
            <CustomLink to='/headphones'>Headphones</CustomLink>
            <CustomLink to='/speakers'>Speakers</CustomLink>
            <CustomLink to='/earphones'>Earphones</CustomLink>
          </ul>
          <div className='nav-icon' onClick={() => setCart(!cart)}>
            <img src='./assets/shared/desktop/icon-cart.svg' alt='cart' />
          </div>
          {cart && <Cart />}
        </div>
      </nav>
    </>
  )
}
export default Navbar
