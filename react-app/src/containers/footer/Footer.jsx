import CustomLink from 'src/components/custom-link/CustomLink'
import { IconFacebook, IconInstagram, IconTwitter } from '../../components/svgs'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <div className='footer-content-container'>
        <div className='footer-logo'>
          <img src='/assets/shared/desktop/logo.svg' alt='' />
        </div>
        <ul className='footer-list'>
          <CustomLink to='/'>Home</CustomLink>
          <CustomLink to='/headphones'>Headphones</CustomLink>
          <CustomLink to='/speakers'>Speakers</CustomLink>
          <CustomLink to='/earphones'>Earphones</CustomLink>
        </ul>
        <p>
          Audiophile is an all in one stop to fulfill your audio needs. We're
          Link small team of music lovers and sound specialists who are devoted
          to helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days Link week.
        </p>
        <p>Copyright 2021. All Rights Reserved</p>
        <div className='footer-icon-container'>
          <IconFacebook className='footer-icon' />
          <IconTwitter className='footer-icon' />
          <IconInstagram className='footer-icon' />
        </div>
      </div>
    </footer>
  )
}
export default Footer
