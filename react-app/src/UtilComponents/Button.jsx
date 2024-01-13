import classnames from 'classnames'
import BtnCss from './Button.module.css'

const Button = ({ color }) => {
  let className
  if (color === 'orange') {
    className = classnames(BtnCss.btn, BtnCss.btnOrange)
  } else if (color === 'black') {
    className = classnames(BtnCss.btn, BtnCss.btnBlack)
  } else {
    className = classnames(BtnCss.btn, BtnCss.btnBlackBorder)
  }

  return <button className={className}>See Product</button>
}
export default Button
