import './index.css'
import { useState } from 'react'
import { MdMenu } from 'react-icons/md'
import TopicLinks from '@components/TopicLinks'

const Navigation = () => {
  const [visible, setVisible] = useState(false)

  const toggleVisibility = () => setVisible(!visible)
  const hideMenu = () => setVisible(false)

  return(
    <nav>
      <button className='menu-button' onClick={toggleVisibility}>
        <MdMenu size={24} className='menu-icon' />
      </button>
      <TopicLinks onClick={hideMenu} className={visible ? 'topic-links' : 'topic-links hidden'} />
    </nav>
  )
}

export default Navigation