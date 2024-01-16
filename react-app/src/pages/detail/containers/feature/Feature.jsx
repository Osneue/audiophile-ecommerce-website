import classNames from 'classnames'
import css from './feature.module.css'

const Feature = ({ text }) => {
  return (
    <div className={classNames(css.feature, 'container-centre')}>
      <h2 className={classNames(css.feature__title)}>Features</h2>
      <p className={classNames(css.feature__content, 'text-style')}>{text}</p>
    </div>
  )
}
export default Feature
