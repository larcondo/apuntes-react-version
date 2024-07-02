import codeStrings from './codeStrings'

import PageContainer from '@components/PageContainer'
import Title from '@components/Title'
import CodeBlock from '@components/CodeBlock'
import HighlightedNav from '@components/HighlightedNav'

const links = [
  { id: 'section-1', text: 'Method: POST' },
  { id: 'section-2', text: 'Method: GET' },
  { id: 'section-3', text: 'Simular fetch' },
]

const FetchUse = () => {

  return(
    <PageContainer>
      <div>
        <Title type='h1'>Uso del Fetch</Title>

        <section id='section-1'>
          <Title type='h2'>Method: POST</Title>
          <CodeBlock language='javascript' codeString={codeStrings.code1} />
        </section>

        <section id='section-2'>
          <Title type='h2'>Method: GET</Title>
          <CodeBlock language='javascript' codeString={codeStrings.code2} />
        </section>      
        
        <section id='section-3'>
          <Title type='h2'>Simular fetch</Title>
          <CodeBlock language='javascript' codeString={codeStrings.code3} />
        </section>
        
      </div>

      <HighlightedNav links={links} />

    </PageContainer>
  )
}

export default FetchUse