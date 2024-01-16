import classNames from 'classnames'
import css from './price.module.css'

const Price = ({ price }) => {
  return (
    <div className={classNames(css.price, 'container-centre')}>
      <h3 className={classNames(css.price__figure)}>${price}</h3>
      <div className={classNames(css.price__check)}>
        <div className={classNames(css.price__adjust)}>
          <p>-</p>
          <p>1</p>
          <p>+</p>
        </div>
        <button type='button' className={classNames(css.price__add)}>
          ADD TO CART
        </button>
      </div>
    </div>
  )
}
export default Price
