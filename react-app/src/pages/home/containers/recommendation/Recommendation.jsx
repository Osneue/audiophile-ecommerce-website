import { PRODUCT_NAME } from 'src/data'
import Button from '../../../../components/button'
import './recommendation.css'

const TopRecommendation = () => {
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
        <Button color='black' to={`/${PRODUCT_NAME.ZX9}`} />
      </div>
    </div>
  )
}

const MiddleRecommendation = () => {
  return (
    <div className='middle-recommendation'>
      <h2>ZX7 SPEAKER</h2>
      <Button color='black-border' to={`/${PRODUCT_NAME.ZX7}`} />
    </div>
  )
}

const BottomRecommendation = () => {
  return (
    <div className='bottom-recommendation'>
      <div className='bottom-recommendation-photo'></div>
      <div className='bottom-recommendation-info'>
        <h2>YX1 EARPHONES</h2>
        <Button color='black-border' to={`/${PRODUCT_NAME.YX1}`} />
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
