import codes from './codeStrings'
import codeComplete from './codeStringsComplete'

import Title from '@components/Title'
import Paragraph from '@components/Paragraph'
import GoCode from '../GoCode'
import CodeCompleteDetails from '@components/CodeCompleteDetails'

const Recursion = () => {
  return(
    <div>
      <section id='section-1'>
        <Title type='h2'>Recursion</Title>

        <Paragraph>Go soporta funciones recursivas (<u>recursive functions</u>).</Paragraph>

        <Paragraph>A continuación se muestra un ejemplo clásico. La función <code>fact</code> se invoca a sí misma hasta que alcanza el caso base de <code>fact(0)</code>.</Paragraph>
        <GoCode codeString={codes.recursion1}></GoCode>
        
        <Paragraph>Los cierres (closures) pueden ser recursivos también, pero esto requiere que el cierre sea declarado con el tipo explícito <code className='resaltado'>var</code> antes de ser definido. Ya que <code>fib</code> fue previamente declarada en <code>main</code>, Go ya sabe qué función invocar cuando aparece <code>fib</code>.</Paragraph>
        <GoCode codeString={codes.recursion2}></GoCode>

        <CodeCompleteDetails>
          <GoCode codeString={codeComplete} />
        </CodeCompleteDetails>

        <Paragraph>Fuente: <a href='https://gobyexample.com/recursion'>gobyexample.com/recursion</a></Paragraph>
      </section>
    </div>
  )
}

export default Recursion