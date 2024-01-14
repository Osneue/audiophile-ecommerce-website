import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
      <div className='nav-icon nav-hamburger'>
        <img src='./assets/shared/tablet/icon-hamburger.svg' alt='hamburger' />
      </div>
      <div className='nav-icon nav-logo'>
        <img src='./assets/shared/desktop/logo.svg' alt='logo' />
      </div>
      <ul>
        <li>
          <a href=''>Home</a>
        </li>
        <li>
          <a href=''>Headphones</a>
        </li>
        <li>
          <a href=''>Speakers</a>
        </li>
        <li>
          <a href=''>Earphones</a>
        </li>
      </ul>
      <div className='nav-icon'>
        <img src='./assets/shared/desktop/icon-cart.svg' alt='cart' />
      </div>
    </nav>
  )
}
export default Navbar
