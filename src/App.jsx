import './App.css'
import { useState } from 'react'

import Sample from './pages/Sample'
import FetchUse from './pages/FetchUse'
import HighlightActiveNav from './pages/HighlightActiveNav'
import MongoDB from './pages/MongoDB'
import Go from './pages/Go'

function App() {
  const [page, setPage] = useState('Sample')

  const navClick = (e) => setPage(e.target.innerText)

  return (
    <main>
      <div>
        <button type='button' onClick={navClick}>Sample</button>
        <button type='button' onClick={navClick}>FetchUse</button>
        <button type='button' onClick={navClick}>Highlight Active Nav</button>
        <button type='button' onClick={navClick}>Mongo DB</button>
        <button type='button' onClick={navClick}>Go</button>
      </div>
      <div>
        {page === 'Sample' && <Sample />}
        {page === 'FetchUse' && <FetchUse />}
        {page === 'Highlight Active Nav' && <HighlightActiveNav />}
        {page === 'Mongo DB' && <MongoDB />}
        {page === 'Go' && <Go />}
      </div>
    </main>
  )
}

export default App