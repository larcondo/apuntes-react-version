import codeStrings from './codeStrings'

import PageContainer from '../../components/PageContainer'
import Title from '../../components/Title'
import CodeBlock from '../../components/CodeBlock'
import HighlightedNav from '../../components/HighlightedNav'

const links = [
  { id: 'section-1', text: 'HTML code' },
  { id: 'section-2', text: 'JavaScript code' },
]

const HighlightActiveNav = () => {
  return(
    <PageContainer>
      
      <div>
        <Title type='h1'>Highlight Active Nav Link On Page Scroll</Title>
        <section id='section-1'>
          <Title type='h2'>HTML code:</Title>
          <CodeBlock language='htmlbars' codeString={codeStrings.code1} />
        </section>

        <section id='section-2'>
          <Title type='h2'>JavaScript code:</Title>
          <CodeBlock language='javascript' codeString={codeStrings.code2} />
        </section>
      </div>
      
      <HighlightedNav links={links} />

    </PageContainer>
  )
}

export default HighlightActiveNav