import classNames from 'classnames'
import css from './feature.module.css'

const Feature = ({ text }) => {
  return (
    <div className={classNames(css.feature)}>
      <h2 className={classNames(css.feature__title)}>Features</h2>
      <p className={classNames(css.feature__content, 'text-style')}>
        {text[0]}
      </p>
      <br />
      <p className={classNames(css.feature__content, 'text-style')}>
        {text[1]}
      </p>
    </div>
  )
}
export default Feature
