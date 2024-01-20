import classnames from 'classnames'
import styles from './button.module.css'

const Button = ({ theme, children, onClick }) => {
  const className = classnames(styles.btn, theme.btnTheme)

  return (
    <button className={className} onClick={() => onClick()}>
      {children}
    </button>
  )
}
export default Button
