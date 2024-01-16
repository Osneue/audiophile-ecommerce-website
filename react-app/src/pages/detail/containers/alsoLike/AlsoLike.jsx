import classNames from 'classnames'
import Button from 'src/components/button'
import data from 'src/data/data'
import css from './alsoLike.module.css'

const AlsoLike = ({ alsoLike }) => {
  // console.log(alsoLike)
  return (
    <div className={classNames(css.alsoLike, 'container-centre')}>
      <h2 className={classNames(css.alsoLike__title)}>You May Also Like</h2>
      <div className={classNames(css.alsoLike__content)}>
        {alsoLike.map((item, index) => {
          // console.log(data[item.category][item.id])
          return (
            <div key={index} className={classNames(css.alsoLike__item)}>
              <div className={classNames(css.alsoLike__imgContainer)}>
                <img
                  src={data[item.category][item.id].photo_also_like}
                  alt=''
                />
              </div>
              <h2 className={classNames(css.alsoLike__itemName)}>
                {item.name}
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
