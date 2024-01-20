import { useNavigate } from 'react-router-dom'
import orangeBtnStyle from 'src/components/button/theme/orange.module.css'
import Button from '../../../../components/button'
import './header.css'

const Header = ({ productLink }) => {
  const navigate = useNavigate()

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
          <div className='header-info-button-container'>
            <Button
              theme={orangeBtnStyle}
              onClick={() => navigate(`/${productLink}`)}
            >
              See Product
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
export default Header
