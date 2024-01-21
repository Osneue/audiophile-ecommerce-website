import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Cart from 'src/components/cart'
import CustomLink from 'src/components/custom-link/CustomLink'
import Overlay from 'src/components/overlay/overlay'
import { IconCart, IconHamburger, Logo } from 'src/components/svgs'
import CategoryShopNav from '../../components/category-shop-nav'
import { useNavbar } from './navbar-context'
import './navbar.css'

const Navbar = () => {
  const [menu, setMenu] = useState(false)
  const { isCartOpen, setIsCartOpen, cartRef } = useNavbar()

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
      {(menu || isCartOpen) && <Overlay />}
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
            <IconHamburger className='nav-hamburger-svg' />
          </div>
          <div
            className='nav-icon nav-logo'
            onClick={() => {
              setMenu(false)
              navigate('/')
            }}
          >
            <Logo className='nav-logo-svg' />
          </div>
          <ul>
            <CustomLink to='/'>Home</CustomLink>
            <CustomLink to='/headphones'>Headphones</CustomLink>
            <CustomLink to='/speakers'>Speakers</CustomLink>
            <CustomLink to='/earphones'>Earphones</CustomLink>
          </ul>
          <div
            ref={cartRef}
            className='nav-icon nav-icon-cart-container'
            onClick={() => setIsCartOpen(!isCartOpen)}
          >
            <IconCart className='nav-icon-cart' />
          </div>
          {isCartOpen && <Cart />}
        </div>
      </nav>
    </>
  )
}
export default Navbar
