import gearDesktop from 'src/assets/shared/desktop/image-best-gear.jpg'
import gearMobile from 'src/assets/shared/mobile/image-best-gear.jpg'
import gearTablet from 'src/assets/shared/tablet/image-best-gear.jpg'
import './advertisement.css'

const Advertisement = () => {
  return (
    <div className='ad-container'>
      <div className='ad-image'>
        <img src={gearMobile} alt='listening music' />
        <img src={gearTablet} alt='listening music' />
        <img src={gearDesktop} alt='listening music' />
      </div>
      <div className='ad-content'>
        <h2>
          Bringing you the <strong>best</strong> audio gear
        </h2>
        <p>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </div>
  )
}
export default Advertisement
