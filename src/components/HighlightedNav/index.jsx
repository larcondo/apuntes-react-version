import './index.css'
import { useEffect } from 'react'

const HighlightedNav = ({ links }) => {
  
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')

    // sections.forEach( section => console.log({
    //   id: section.getAttribute('id'),
    //   top: section.offsetTop,
    //   height: section.offsetHeight,
    //   min: section.offsetTop,
    //   max: section.offsetHeight + section.offsetTop
    // }))

    const navHighlighter = () => {
      let scrollY = window.scrollY

      // document.getElementById('nav-scroll').innerText = scrollY

      sections.forEach( current => {
        const sectionHeight = current.offsetHeight
        // const sectionTop = current.offsetTop - 50
        const sectionTop = current.offsetTop - 80
        const sectionId = current.getAttribute('id')

        const navLink = document.querySelector('nav a[href*=' + sectionId + ']')
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          // document.querySelector('nav a[href*=' + sectionId + ']').classList.add('active')
          navLink ? navLink.classList.add('active') : null
        } else {
          // document.querySelector('nav a[href*=' + sectionId + ']').classList.remove('active')
          navLink ? navLink.classList.remove('active') : null
        }
      })
    }
    window.addEventListener('scroll', navHighlighter)
    return () => {
      document.removeEventListener('scroll', navHighlighter)
    }
  }, [])
  
  if (!links) return null
  
  return(
    <div className='section-links'>
      <nav>
        <ul>
          { links.map( l =>
              <li key={l.id}>
                <a href={`#${l.id}`}>{ l.text }</a>
              </li>
          )}
        </ul>
      {/* <p id='nav-scroll'>Hola</p> */}
      </nav>
    </div>
  )
}

export default HighlightedNav