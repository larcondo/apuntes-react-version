import { useState } from 'react'
import { MdMenu } from 'react-icons/md'
import TopicLinks from '@components/TopicLinks'

const MobileMenu = () => {
  const [visible, setVisible] = useState(false)
  
  const toggleVisibility = () => setVisible(!visible)
  const hideMenu = () => setVisible(false)

  return(
    <div className='mobile-menu'>
      <button onClick={toggleVisibility}>
        <MdMenu size={24} className='menu-icon' />
      </button>
      { visible && 
        <div className='links'>
          <TopicLinks onClick={hideMenu} />
        </div>
      }
    </div>
  )
}

export default MobileMenu