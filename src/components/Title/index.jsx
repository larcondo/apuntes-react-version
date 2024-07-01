import './index.css'

const Title = ({ type, children }) => {
  if (!type) return null

  if (type === 'h1') return <h1 className='title-h1'>{ children }</h1>
  if (type === 'h2') return <h2 className='title-h2'>{ children }</h2>
  if (type === 'h3') return <h3 className='title-h3'>{ children }</h3>

  return <h1>{ children }</h1>
}

export default Title