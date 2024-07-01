import SyntaxHighlighter from 'react-syntax-highlighter'
// import { stackoverflowDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const CodeBlock = ({ codeString, language }) => {
  const customStyle = {
    borderRadius: '10px',
    border: '1px solid #333333',
    margin: 0,
  }

  const lines = (String(codeString).match(/\n/g) || '').length + 1

  const lineNumberStyle = {
    minWidth: lines > 9 ? '3ch' : '2ch',
    color: '#606060',
  }

  return(
    <SyntaxHighlighter
      language={language}
      style={vs2015}
      showLineNumbers
      customStyle={customStyle}
      lineNumberStyle={lineNumberStyle}
    >
      { codeString }
    </SyntaxHighlighter>
  )
}

export default CodeBlock