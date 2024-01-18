import { Link, useMatch, useResolvedPath } from 'react-router-dom'

const CustomLink = ({ to, children, ...props }) => {
  const absPath = useResolvedPath(to)
  const isActive = useMatch({ path: absPath.pathname, end: true })

  return (
    <li>
      <Link to={to} className={isActive ? 'link--active' : ''} {...props}>
        {children}
      </Link>
    </li>
  )
}
export default CustomLink
