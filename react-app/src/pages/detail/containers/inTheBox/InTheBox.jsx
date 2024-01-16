import classNames from 'classnames'
import css from './inTheBox.module.css'

const InTheBox = ({ inners }) => {
  return (
    <div className={classNames(css.inTheBox, 'container-centre')}>
      <h2 className={classNames(css.inTheBox__title)}>IN THE BOX</h2>
      {inners.map((inner, index) => {
        return (
          <div key={index} className={classNames(css.inTheBox__content)}>
            <p>{`${inner.num}x`}</p>
            <p className='text-style'>{inner.item}</p>
          </div>
        )
      })}
    </div>
  )
}
export default InTheBox
