import './index.css'
import TopicLink from './TopicLink'

const TopicLinks = ({ onClick, ...props }) => {
  return(
    <div {...props}>
      <TopicLink path='/' text='Sample' onClick={onClick} />
      <TopicLink path='/fetchuse' text='FetchUse' onClick={onClick} />
      <TopicLink path='/highlight-active-nav' text='Highlight Active Nav' onClick={onClick} />
      <TopicLink path='/mongodb' text='Mongo DB' onClick={onClick} />
      <TopicLink path='/go' text='Go' onClick={onClick} hasSubRoutes />
    </div>
  )
}

export default TopicLinks