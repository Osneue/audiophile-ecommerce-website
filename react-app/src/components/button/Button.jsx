import classnames from 'classnames'
import { useNavigate } from 'react-router-dom'
import BtnCss from './Button.module.css'

const Button = ({ color, to }) => {
  const navigate = useNavigate()
  let className
  if (color === 'orange') {
    className = classnames(BtnCss.btn, BtnCss.btnOrange)
  } else if (color === 'black') {
    className = classnames(BtnCss.btn, BtnCss.btnBlack)
  } else {
    className = classnames(BtnCss.btn, BtnCss.btnBlackBorder)
  }

  return (
    <button className={className} onClick={() => navigate(to)}>
      See Product
    </button>
  )
}
export default Button
