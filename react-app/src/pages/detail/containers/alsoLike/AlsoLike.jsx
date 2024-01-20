import classNames from 'classnames'
import { useNavigate } from 'react-router-dom'
import Button from 'src/components/button'
import orangeBtnStyle from 'src/components/button/theme/orange.module.css'
import products from 'src/data'
import css from './alsoLike.module.css'

const AlsoLike = ({ alsoLike }) => {
  const navigate = useNavigate()
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
              <div className={css.alsoLike__btnContainer}>
                <Button
                  theme={orangeBtnStyle}
                  onClick={() => navigate(`/${liked.name}`)}
                >
                  See Product
                </Button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default AlsoLike
