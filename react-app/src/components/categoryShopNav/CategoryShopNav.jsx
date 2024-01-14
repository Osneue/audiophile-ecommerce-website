import { IconArrowRight } from '../svgs'
import './CategoryShopNav.css'

const CategoryShopNavItem = ({ name, photo }) => {
  return (
    <div className='category-shop-nav'>
      <div className='category-shop-nav-photo'>
        <img src={photo} alt='' />
      </div>
      <h3>{name}</h3>
      <div className='category-shop-nav-link'>
        <p>SHOP</p>
        <IconArrowRight style={{ transform: 'translateY(2px)' }} />
      </div>
    </div>
  )
}

const CategoryShopNav = () => {
  return (
    <div className='category-shop-nav-container'>
      <CategoryShopNavItem
        name='Headphones'
        photo='./assets/shared/desktop/image-category-thumbnail-headphones.png'
      />
      <CategoryShopNavItem
        name='Speakers'
        photo='./assets/shared/desktop/image-category-thumbnail-speakers.png'
      />
      <CategoryShopNavItem
        name='Earphones'
        photo='./assets/shared/desktop/image-category-thumbnail-earphones.png'
      />
    </div>
  )
}

export default CategoryShopNav
