import { useNavigate } from 'react-router-dom'
import earphones from 'src/assets/shared/desktop/image-category-thumbnail-earphones.png'
import headphones from 'src/assets/shared/desktop/image-category-thumbnail-headphones.png'
import speakers from 'src/assets/shared/desktop/image-category-thumbnail-speakers.png'
import { IconArrowRight } from '../svgs'
import './category-shop-nav.css'

function lowerInitial(str) {
  // console.log(str.slice(0, 1).toLowerCase() + str.slice(1))
  return str.slice(0, 1).toLowerCase() + str.slice(1)
}

const CategoryShopNavItem = ({ name, photo, setMenu }) => {
  const navigate = useNavigate()

  return (
    <div
      className='category-shop-nav'
      onClick={() => {
        setMenu && setMenu(false)
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

const CategoryShopNav = ({ setMenu }) => {
  return (
    <div className='category-shop-nav-container'>
      <CategoryShopNavItem
        name='Headphones'
        photo={headphones}
        setMenu={setMenu}
      />
      <CategoryShopNavItem name='Speakers' photo={speakers} setMenu={setMenu} />
      <CategoryShopNavItem
        name='Earphones'
        photo={earphones}
        setMenu={setMenu}
      />
    </div>
  )
}

export default CategoryShopNav
