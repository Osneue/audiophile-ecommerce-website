import Navbar from '../../Navbar'
import './Header.css'

const Header = () => {
  return (
    <header>
      <Navbar />
      <div className='header-info-container'>
        <div className='header-info'>
          <h4>NEW PRODUCT</h4>
          <h2>XX99 Mark II Headphones</h2>
          <p>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <div>
            <button>See Product</button>
          </div>
        </div>
      </div>
    </header>
  )
}
export default Header
