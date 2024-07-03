import codeComplete from './codeStringsComplete'
import codes from './codeStrings'

import Title from '@components/Title'
import Paragraph from '@components/Paragraph'
import GoCode from '../GoCode'
import CodeCompleteDetails from '@components/CodeCompleteDetails'

const VariadicFunctions = () => {
  return(
    <div>
      <section id='section-1'>
        <Title type='h2'>Variadic Functions</Title>

        <Paragraph>Las funciones variádicas pueden invocarse con cualquier número de argumentos. Por ejemplo, <code>fmt.Println</code> es una función variádica común.</Paragraph>
        
        <Paragraph>La función <code>sum</code> que se muestra a continuación toma un número arbitrario de argumentos tipo <code>int</code>. Dentro de la función, el tipo de <code className='resaltado'>nums</code> es equivalente a <code className='resaltado'>[]int</code>. Podemos utilizar <code>len(nums)</code>, iterar sobre el mismo con <code>range</code>, etc.</Paragraph>
        <GoCode codeString={codes.vf1} />
        
        <Paragraph>Las funciones variádicas pueden invocarse de la manera habitual con argumentos individuales. Si tenemos múltiples argumentos en un slice, podemos aplicarlos a una función variádica utilizando la sintaxis <code className='resaltado'>func(slice...)</code>.</Paragraph>
        <GoCode codeString={codes.vf2} />

        <CodeCompleteDetails>
          <GoCode codeString={codeComplete} />
        </CodeCompleteDetails>

        <Paragraph>Fuente: <a href="https://gobyexample.com/variadic-functions" target='_blank'>gobyexample.com/variadic-functions</a></Paragraph>
      </section>
    </div>
  )
}

export default VariadicFunctions