import codes from './codeStrings'
import codeComplete from './codeStringsComplete'

import Title from '@components/Title'
import Paragraph from '@components/Paragraph'
import GoCode from '../GoCode'

const Range = () => {
  return(
    <div>
      <section id='section-1'>
        <Title type='h2'>Range</Title>
        <Paragraph><code>range</code> itera sobre elementos en una variedad de estructuras de datos.</Paragraph>

        <Paragraph>En el siguiente ejemplo, utilizamos <code>range</code> para sumar los números de un slice. Funciona de la misma manera para los arrays.</Paragraph>
        <GoCode codeString={codes.ranges1} />

        <Paragraph>Utilizando <code>range</code> en arrays y slices obtenemos el índice y el valor de cada entrada. En el ejemplo anterior no necesitamos el índice, así que lo ignoramos con el identificador vacío <code className='resaltado'>_</code>. Sin embargo, a veces necesitamos el índice también:</Paragraph>
        <GoCode codeString={codes.ranges2} />

        <Paragraph>Al utilizar <code>range</code> en maps podemos iterar sobre los pares key/value.</Paragraph>
        <GoCode codeString={codes.ranges3} />

        <Paragraph><code>range</code> se puede utilizar también para iterar solo las keys de un map:</Paragraph>
        <GoCode codeString={codes.ranges4} />

        <Paragraph>Cuando usamos <code>range</code> en strings se itera sobre puntos Unicode. El primer valor es el byte índice de la <code>runa (rune)</code> y el segundo es la <code>runa</code> en sí. Para más detalles, ver <a href="https://gobyexample.com/strings-and-runes" target='_blank'>Strings and Runes</a>.</Paragraph>
        <GoCode codeString={codes.ranges5} />

        <Title type='h3'>Código completo</Title>
        <GoCode codeString={codeComplete} />

        <Paragraph>Fuente: <a href="https://gobyexample.com/range" target='_blank'>gobyexample.com/range</a></Paragraph>
      </section>
    </div>
  )
}

export default Range