import './Recommendation.css'

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
        <button>See Product</button>
      </div>
    </div>
  )
}

const MiddleRecommendation = () => {
  return (
    <div className='middle-recommendation'>
      <h2>ZX7 SPEAKER</h2>
      <button>See Product</button>
    </div>
  )
}

const BottomRecommendation = () => {
  return (
    <div className='bottom-recommendation'>
      <div className='bottom-recommendation-photo'></div>
      <div className='bottom-recommendation-info'>
        <h2>YX1 EARPHONES</h2>
        <button>See Product</button>
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
