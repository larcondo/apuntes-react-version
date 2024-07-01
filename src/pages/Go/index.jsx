import './index.css'
import { useState } from 'react'
import { MdFormatListBulleted } from 'react-icons/md'

import { topics } from './topics'

import Title from '../../components/Title'
import PageContainer from '../../components/PageContainer'
import Slices from './Slices'
import Arrays from './Arrays'
import Maps from './Maps'

const Go = () => {
  const [subpage, setSubpage] = useState('Slices')
  const [topicsVisible, setTopicsVisible] = useState(false)

  const changeTopic = (e) => {
    setSubpage(e.target.innerText)
    setTopicsVisible(false)
  }

  const showTopics = () => setTopicsVisible(true)

  return(
    <PageContainer>
      <div>
        <Title type='h1'>Go (Golang)</Title>
        <button onClick={showTopics}>
          <MdFormatListBulleted size={20} className='topics-icon' />  Topics
        </button>
        { topicsVisible && <GoTopics topics={topics} onClick={changeTopic} />
        }
        
        { subpage === 'Slices' && <Slices /> }
        { subpage === 'Arrays' && <Arrays /> }
        { subpage === 'Maps' && <Maps /> }
        
      </div>
    </PageContainer>
  )
}

const GoTopics = ({ topics, onClick }) => {
  return(
    <div className='go-topics-container'>
      <h1>Topicos disponibles</h1>
      { topics.map( t => {
        return <button
          key={t.title}
          disabled={t.status === null}
          className='go-topic'
          onClick={onClick}>
            { t.title }
          </button>
      })}
    </div>
  )
}

export default Go