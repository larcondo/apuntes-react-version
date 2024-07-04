import { useLocation, Link } from 'react-router-dom'

const TopicLink = ({ path, text, onClick, hasSubRoutes = false }) => {
  const { pathname } = useLocation()

  const isActive = hasSubRoutes ? pathname.startsWith(path) : pathname === path

  return (
    <Link to={path}
      onClick={onClick}
      className={ isActive ? 'topic-link active' : 'topic-link' }
    >
      { text }
    </Link>
  )
}

export default TopicLink