import './App.css'
import { Outlet } from 'react-router-dom'
import Navigation from '@components/Navigation'

function App() {
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