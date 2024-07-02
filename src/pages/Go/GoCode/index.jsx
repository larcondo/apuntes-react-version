import CodeBlock from '@components/CodeBlock'

const GoCode = ({ codeString }) => {
  return(
    <CodeBlock language='go' codeString={codeString} />
  )
}

export default GoCode