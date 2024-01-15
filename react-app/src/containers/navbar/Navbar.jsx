import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CustomLink from 'src/components/customLink/CustomLink'
import Overlay from 'src/components/overlay/overlay'
import CategoryShopNav from '../../components/categoryShopNav'
import './Navbar.css'

const Navbar = () => {
  const [menu, setMenu] = useState(false)

  const navigate = useNavigate()

  return (
    <>
      {menu && <Overlay />}
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
          <div className='nav-icon'>
            <img src='./assets/shared/desktop/icon-cart.svg' alt='cart' />
          </div>
        </div>
      </nav>
    </>
  )
}
export default Navbar
