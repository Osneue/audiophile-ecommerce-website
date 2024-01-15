import Button from '../../../../components/button'
import Navbar from '../../../../containers/navbar'
import './Header.css'

const Header = (props) => {
  return (
    <header>
      <Navbar {...props} />
      <div className='header-info-container'>
        <div className='header-info'>
          <h4>NEW PRODUCT</h4>
          <h2>XX99 Mark II Headphones</h2>
          <p>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Button color='orange' />
        </div>
      </div>
    </header>
  )
}
export default Header