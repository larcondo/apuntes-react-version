import './App.css'
import { Outlet, useLocation } from 'react-router-dom'
import Navigation from '@components/Navigation'
import { useEffect } from 'react'

function App() {
  const location = useLocation()

  useEffect(() => window.scrollTo({ top: 0 }), [location])

  return (
    <main>
      <Navigation />
      <div className='content'>
        <Outlet />
      </div>
    </main>
  )
}

export default App