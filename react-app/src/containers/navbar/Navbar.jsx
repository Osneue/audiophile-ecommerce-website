import { Link, useNavigate } from 'react-router-dom'
import CategoryShopNav from '../../components/categoryShopNav'
import './Navbar.css'

const Navbar = ({ menu, setMenu }) => {
  const navigate = useNavigate()

  return (
    <nav>
      <div className='nav-container'>
        {menu && (
          <div className='nav-menu'>
            <CategoryShopNav setMenu={setMenu} />
          </div>
        )}
        <div className='nav-icon nav-hamburger' onClick={() => setMenu(!menu)}>
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
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/headphones'>Headphones</Link>
          </li>
          <li>
            <Link to='/speakers'>Speakers</Link>
          </li>
          <li>
            <Link to='/earphones'>Earphones</Link>
          </li>
        </ul>
        <div className='nav-icon'>
          <img src='./assets/shared/desktop/icon-cart.svg' alt='cart' />
        </div>
      </div>
    </nav>
  )
}
export default Navbar
