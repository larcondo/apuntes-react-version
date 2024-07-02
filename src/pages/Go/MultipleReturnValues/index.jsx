import codes from './codeStrings'
import codeComplete from './codeStringsComplete'

import Title from '@components/Title'
import Paragraph from '@components/Paragraph'
import GoCode from '../GoCode'


const MultipleReturnValues = () => {
  return(
    <div>
      <section id='section-1'>
        <Title type='h2'>Multiple Return Values</Title>

        <Paragraph>Go tiene de manera integrada soporte para <i>devolver múltiples valores</i>. Esta característica se utiliza a menudo en Go idiomático, por ejemplo para devolver tanto valores de resultado como de error de una función.</Paragraph>

        <Paragraph>La sintaxis <code>(int, int)</code> en la siguiente función muestra que la misma devuelve 2 <code>ints</code>.</Paragraph>
        <GoCode codeString={codes.mrv1} />

        <Paragraph>En el siguiente ejemplo se muestra cómo usar los dos valores devueltos por la función con una <i>asignación múltiple</i>.</Paragraph>
        <GoCode codeString={codes.mrv2} />
        
        <Paragraph>Si solo queremos algunos de los valores devueltos (no todos), podemos utilizar el identificador vacío <code className='resaltado'>_</code>:</Paragraph>
        <GoCode codeString={codes.mrv3} />

        <Paragraph>Aceptar un número variable de argumentos o parámetros es otra buena característica de las funciones en Go. Dichas funciones se denominan Variádicas (<code>variadic functions</code>).</Paragraph>

        <Title type='h3'>Código completo</Title>
        <GoCode codeString={codeComplete} />

        <p>Fuente: <a href="https://gobyexample.com/multiple-return-values" target='_blank'>gobyexample.com/multiple-return-values</a></p>
      </section>
    </div>
  )
}

export default MultipleReturnValues