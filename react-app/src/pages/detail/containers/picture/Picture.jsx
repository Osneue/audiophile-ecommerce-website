import classNames from 'classnames'
import css from './picture.module.css'

const Picture = ({ gallery }) => {
  return (
    <div className={classNames(css.gallery, 'container-centre')}>
      {gallery.mobile.map((picture, index) => {
        return (
          <div key={index}>
            <img src={picture} alt='gallery picture' />
          </div>
        )
      })}
    </div>
  )
}
export default Picture
