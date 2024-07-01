import './App.css'
import { useState } from 'react'
import { MdMenu } from 'react-icons/md'

import Sample from './pages/Sample'
import FetchUse from './pages/FetchUse'
import HighlightActiveNav from './pages/HighlightActiveNav'
import MongoDB from './pages/MongoDB'
import Go from './pages/Go'

function App() {
  const [page, setPage] = useState('Sample')
  const [menuVisible, setMenuVisible] = useState(false)

  const navClick = (e) => {
    setPage(e.target.innerText)
    setMenuVisible(false)
  }

  return (
    <main>
      <div className='mobile-menu'>
        <button onClick={() => setMenuVisible(!menuVisible)}><MdMenu size={24} className='menu-icon' /></button>
        { menuVisible &&
          <div className='links'>
            <TopicLinks navClick={navClick} />
          </div>
        }
      </div>
      <nav>
        <TopicLinks navClick={navClick} />
      </nav>
      <div className='content'>
        {page === 'Sample' && <Sample />}
        {page === 'FetchUse' && <FetchUse />}
        {page === 'Highlight Active Nav' && <HighlightActiveNav />}
        {page === 'Mongo DB' && <MongoDB />}
        {page === 'Go' && <Go />}
      </div>
    </main>
  )
}

const TopicLinks = ({ navClick }) => {
  return(
    <>
        <button type='button' onClick={navClick}>Sample</button>
        <button type='button' onClick={navClick}>FetchUse</button>
        <button type='button' onClick={navClick}>Highlight Active Nav</button>
        <button type='button' onClick={navClick}>Mongo DB</button>
        <button type='button' onClick={navClick}>Go</button>
    </>
  )
}

export default App