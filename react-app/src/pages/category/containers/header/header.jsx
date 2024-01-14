import headerCss from './header.module.css'

const header = ({ category }) => {
  return <h1 className={headerCss.header___title}>{category}</h1>
}
export default header
