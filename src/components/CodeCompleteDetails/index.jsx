import './index.css'

const CodeCompleteDetails = ({ summaryTitle = 'Código Completo', children }) => {
  return(
    <details>
      <summary>{ summaryTitle }</summary>
      { children }
    </details>
  )
}

export default CodeCompleteDetails