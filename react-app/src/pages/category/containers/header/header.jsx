import headerCss from './header.module.css'

const header = ({ title }) => {
  return <h1 className={headerCss.header___title}>{title}</h1>
}
export default header
