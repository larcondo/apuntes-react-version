import './index.css'
import { useState } from 'react'

import { topics } from './topics'

import Title from '../../components/Title'
import PageContainer from '../../components/PageContainer'
import Slices from './Slices'
import Arrays from './Arrays'

const Go = () => {
  const [subpage, setSubpage] = useState('Slices')

  const changeTopic = (e) => setSubpage(e.target.innerText)

  return(
    <PageContainer>
      <div>
        <Title type='h1'>Go (Golang)</Title>
        <div className='go-topics-container'>
          { topics.map( t => {
            return <button
              key={t.title}
              disabled={t.status === null}
              className='go-topic'
              onClick={changeTopic}>
                { t.title }
              </button>
          })}
        </div>
        
        { subpage === 'Slices' && <Slices /> }
        { subpage === 'Arrays' && <Arrays /> }
        
      </div>
    </PageContainer>
  )
}

export default Go