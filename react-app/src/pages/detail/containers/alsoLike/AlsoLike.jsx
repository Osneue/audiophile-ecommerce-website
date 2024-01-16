import classNames from 'classnames'
import Button from 'src/components/button'
import products from 'src/data'
import css from './alsoLike.module.css'

const AlsoLike = ({ alsoLike }) => {
  // console.log(alsoLike)
  return (
    <div className={classNames(css.alsoLike, 'container-centre')}>
      <h2 className={classNames(css.alsoLike__title)}>You May Also Like</h2>
      <div className={classNames(css.alsoLike__content)}>
        {alsoLike.map((item, index) => {
          const liked = products.find((product) => product.name === item)
          // console.log(item, liked)

          return (
            <div key={index} className={classNames(css.alsoLike__item)}>
              <div className={classNames(css.alsoLike__imgContainer)}>
                <img src={liked.photo.product} alt='' />
              </div>
              <h2 className={classNames(css.alsoLike__itemName)}>
                {liked.name}
              </h2>
              <Button color='orange' />
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default AlsoLike
