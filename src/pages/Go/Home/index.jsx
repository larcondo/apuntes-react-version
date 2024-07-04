import './index.css'
import { topics } from '../topics'
import { Link } from 'react-router-dom'

const Home = () => {
  return(
    <div>
      <section className='home-sections-container'>
        { topics.map(topic => {
          return(
            <Link to={topic.path} key={topic.title} title={topic.title}>
              { topic.title }
            </Link>
          )
        })}
      </section>
    </div>
  )
}

export default Home