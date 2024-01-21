import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Cart from 'src/components/cart'
import { useCart } from 'src/components/cart/cart-context'
import CustomLink from 'src/components/custom-link/CustomLink'
import Overlay from 'src/components/overlay/overlay'
import { IconCart, IconHamburger, Logo } from 'src/components/svgs'
import useWindowWidth from 'src/utilities/useWindowWidth'
import CategoryShopNav from '../../components/category-shop-nav'
import { useNavbar } from './navbar-context'
import './navbar.css'

const Navbar = () => {
  const [menu, setMenu] = useState(false)
  const { isCartOpen, setIsCartOpen, cartRef } = useNavbar()
  const { cart, getTotalNum } = useCart()
  const width = useWindowWidth()

  useEffect(() => {
    if (width >= 850) {
      setMenu(false)
    }
  }, [width])

  useEffect(() => {
    const cartElement = cartRef.current
    cartElement.setAttribute('cart-items', getTotalNum())
  }, [cart])

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
            cart-items='0'
            className={
              'nav-icon nav-icon-cart-container' +
              (getTotalNum() ? '' : ' empty')
            }
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
