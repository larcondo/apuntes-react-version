import { useLocation, Link } from 'react-router-dom'

const TopicLink = ({ path, text, onClick }) => {
  const { pathname } = useLocation()

  return (
    <Link to={path}
      onClick={onClick}
      className={ pathname === path ? 'topic-link active' : 'topic-link' }
    >
      { text }
    </Link>
  )
}

export default TopicLink