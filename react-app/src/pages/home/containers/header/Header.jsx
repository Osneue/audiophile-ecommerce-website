import Button from '../../../../components/button'
import './header.css'

const Header = ({ productLink }) => {
  return (
    <header>
      <div className='header-info-container'>
        <div className='header-info'>
          <h4>NEW PRODUCT</h4>
          <h2>XX99 Mark II Headphones</h2>
          <p>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Button color='orange' to={`/${productLink}`} />
        </div>
      </div>
    </header>
  )
}
export default Header
