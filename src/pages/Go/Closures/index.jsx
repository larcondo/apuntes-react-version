import codes from './codeStrings'
import codeComplete from './codeStringsComplete'

import Title from '@components/Title'
import Paragraph from '@components/Paragraph'
import CodeCompleteDetails from '@components/CodeCompleteDetails'
import GoCode from '../GoCode'

const Closures = () => {
  return(
    <div>
      <section id='section-1'>
        <Title type='h2'>Closures</Title>

        <Paragraph>Go soporta funciones anónimas (<u>anonymous functions</u>), las cuales pueden formar cierres (<u>closures</u>). Las funciones anónimas son útiles cuando queremos definir una función sin tener que ponerle un nombre.</Paragraph>

        <Paragraph>La función <code>intSeq</code> devuelve otra función, la cual definimos anónimamente en el cuerpo de <code>intSeq</code>. La función devuelta <i>cierra sobre</i> la variable <code>i</code> para formar un cierre (<code>closure</code>).</Paragraph>
        <GoCode codeString={codes.closures1} />
        
        <Paragraph>Invocamos <code>intSeq</code> asignando el resultado (una función) a <code>nextInt</code>. Esta función captura su propio valor de <code>i</code>, el cual será actualizado cada vez que se invoque <code>nextInt</code>.</Paragraph>
        <GoCode codeString={codes.closures2} />
        
        <Paragraph>Podemos ver el efecto del cierre invocando varias veces la función <code>nextInt</code>.</Paragraph>
        <GoCode codeString={codes.closures3} />
        
        <Paragraph>Para confirmar que el estado es único para esas función en particular, creamos y evaluamos una nueva.</Paragraph>
        <GoCode codeString={codes.closures4} />

        <CodeCompleteDetails>
          <GoCode codeString={codeComplete} />
        </CodeCompleteDetails>

        <Paragraph>Fuente: <a href='https://gobyexample.com/closures' target='_blank'>gobyexample.com/closures</a></Paragraph>
      </section>
    </div>
  )
}

export default Closures