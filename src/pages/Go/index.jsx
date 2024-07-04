import './index.css'
import { useState } from 'react'
import { MdFormatListBulleted } from 'react-icons/md'
import { Outlet, Link } from 'react-router-dom'
import { topics } from './topics'

import Title from '@components/Title'
import PageContainer from '@components/PageContainer'

const Go = () => {
  const [topicsVisible, setTopicsVisible] = useState(false)

  const changeTopic = () => {
    // setSubpage(e.target.innerText)
    setTopicsVisible(false)
  }

  const toggleTopics = () => setTopicsVisible(!topicsVisible)

  return(
    <PageContainer>
      <div>
        <Title type='h1'>Go (Golang)</Title>
        <button onClick={toggleTopics}>
          <MdFormatListBulleted size={20} className='topics-icon' />  Topics
        </button>
        { topicsVisible && <GoTopics topics={topics} onClick={changeTopic} /> }
        
        <Outlet />
        
      </div>
    </PageContainer>
  )
}

const GoTopics = ({ topics, onClick }) => {
  return(
    <div className='go-topics-container'>
      <Title type='h2'>Tópicos disponibles</Title>
      { topics.map( t => {
        return(
          <Link to={t.path}
            key={t.title}
            onClick={onClick}
          >
              {t.title}
          </Link>
        )
      })}
    </div>
  )
}

export default Go