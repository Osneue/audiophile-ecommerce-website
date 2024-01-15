import { useNavigate } from 'react-router-dom'
import { IconArrowRight } from '../svgs'
import './CategoryShopNav.css'

function lowerInitial(str) {
  // console.log(str.slice(0, 1).toLowerCase() + str.slice(1))
  return str.slice(0, 1).toLowerCase() + str.slice(1)
}

const CategoryShopNavItem = ({ name, photo, menu, setMenu }) => {
  const navigate = useNavigate()

  return (
    <div
      className='category-shop-nav'
      onClick={() => {
        setMenu(false)
        navigate('/' + lowerInitial(name))
      }}
    >
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

const CategoryShopNav = ({ menu, setMenu }) => {
  return (
    <div className='category-shop-nav-container'>
      <CategoryShopNavItem
        name='Headphones'
        photo='./assets/shared/desktop/image-category-thumbnail-headphones.png'
        menu={menu}
        setMenu={setMenu}
      />
      <CategoryShopNavItem
        name='Speakers'
        photo='./assets/shared/desktop/image-category-thumbnail-speakers.png'
        menu={menu}
        setMenu={setMenu}
      />
      <CategoryShopNavItem
        name='Earphones'
        photo='./assets/shared/desktop/image-category-thumbnail-earphones.png'
        menu={menu}
        setMenu={setMenu}
      />
    </div>
  )
}

export default CategoryShopNav