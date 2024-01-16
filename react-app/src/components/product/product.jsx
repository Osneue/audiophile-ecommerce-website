import classNames from 'classnames'
import Button from 'src/components/button'
import data from 'src/data/data'
import productCss from './product.module.css'

const product = ({ category, productId }) => {
  // console.log(
  //   productId % 2
  //     ? classNames(productCss.product__photo, productCss.photo_last)
  //     : productCss.product__photo
  // )
  return (
    <div className={classNames(productCss.product, 'container-centre')}>
      <div
        className={
          productId % 2
            ? classNames(productCss.product__photo, productCss.photo_last)
            : productCss.product__photo
        }
      >
        <img
          src={data[category][productId].photo}
          alt='data[category][productId].name'
        />
      </div>
      <div
        className={
          productId % 2
            ? classNames(productCss.product__content, productCss.padding_right)
            : classNames(productCss.product__content, productCss.padding_left)
          // productCss.product__content
        }
      >
        <h3 className='new-product-style'>NEW PRODUCT</h3>
        <div className={productCss.product__name}>
          <h2 className='product-name-style'>
            {data[category][productId].name}
          </h2>
          <h2 className='product-name-style'>{category}</h2>
        </div>
        <p className={classNames(productCss.product__text, 'text-style')}>
          {data[category][productId].intro}
        </p>
        <Button color='orange' />
      </div>
    </div>
  )
}
export default product
