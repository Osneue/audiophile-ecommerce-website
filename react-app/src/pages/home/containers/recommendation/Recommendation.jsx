import { useNavigate } from 'react-router-dom'
import blackBtnStyle from 'src/components/button/theme/black.module.css'
import transparentBtnStyle from 'src/components/button/theme/transparent.module.css'
import { PRODUCT_NAME } from 'src/data'
import Button from '../../../../components/button'
import './recommendation.css'

const TopRecommendation = () => {
  const navigate = useNavigate()

  return (
    <div className='top-recommendation'>
      {/* <div className='top-recommendation-circle'></div> */}
      <div className='top-recommendation-photo'></div>
      <div className='top-recommendation-info'>
        <h2>ZX9 SPEAKER</h2>
        <p>
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <div className='top-recommendation-btn-container'>
          <Button
            theme={blackBtnStyle}
            onClick={() => navigate(`/${PRODUCT_NAME.ZX9}`)}
          >
            See Product
          </Button>
        </div>
      </div>
    </div>
  )
}

const MiddleRecommendation = () => {
  const navigate = useNavigate()

  return (
    <div className='middle-recommendation'>
      <h2>ZX7 SPEAKER</h2>
      <div className='middle-recommendation-btn-container'>
        <Button
          theme={transparentBtnStyle}
          onClick={() => navigate(`/${PRODUCT_NAME.ZX7}`)}
        >
          See Product
        </Button>
      </div>
    </div>
  )
}

const BottomRecommendation = () => {
  const navigate = useNavigate()

  return (
    <div className='bottom-recommendation'>
      <div className='bottom-recommendation-photo'></div>
      <div className='bottom-recommendation-info'>
        <h2>YX1 EARPHONES</h2>
        <div className='bottom-recommendation-btn-container'>
          <Button
            theme={transparentBtnStyle}
            onClick={() => navigate(`/${PRODUCT_NAME.YX1}`)}
          >
            See Product
          </Button>
        </div>
      </div>
    </div>
  )
}

const Recommendation = () => {
  return (
    <div className='recommendation'>
      <TopRecommendation />
      <MiddleRecommendation />
      <BottomRecommendation />
    </div>
  )
}
export default Recommendation
