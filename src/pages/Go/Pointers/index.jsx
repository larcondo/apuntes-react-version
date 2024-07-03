import codes from './codeStrings'
import codeComplete from './codeStringsComplete'

import Title from '@components/Title'
import Paragraph from '@components/Paragraph'
import GoCode from '../GoCode'
import CodeCompleteDetails from '@components/CodeCompleteDetails'

const Pointers = () => {
  return(
    <div>
      <section id='section-1'>
        <Title type='h2'>Pointers</Title>

        <Paragraph>Go soporta punteros (<u>pointers</u>), permitiéndonos pasar referencias a valores y registros dentro de nuestro programa.</Paragraph>

        <Paragraph>Mostraremos cómo funcionan los punteros a diferencia de valores con 2 funciones: <code>zeroval</code> y <code>zeroptr</code>. <code>zeroval</code> tiene un parámetro tipo <code>int</code>, así que los argumentos se pasarán por su valor. <code>zeroval</code> tomará una copia de <code>ival</code> distinta a la que llamó la función.</Paragraph>
        <GoCode codeString={codes.pointers1} />
        
        <Paragraph>En cambio, <code>zeroptr</code> tiene un parámetro <code>*int</code>, que significa que tomará un puntero tipo <code>int</code>. El código <code>*iptr</code> en el cuerpo de la función <i>des-referencia</i> la dirección de memoria del puntero con el valor actual en esa dirección. Entonces, asignando un valor a un puntero des-referenciado cambia el valor en la dirección referenciada.</Paragraph>
        <GoCode codeString={codes.pointers2} />
        
        <Paragraph>La sintaxis <code className='resaltado'>&i</code> nos da la dirección de memoria de <code>i</code>, es decir, un puntero a i. Los punteros también se pueden imprimir en pantalla.</Paragraph>
        <GoCode codeString={codes.pointers3} />

        <Paragraph><code>zeroval</code> no cambia a <code>i</code> en <code>main</code>, pero <code>zeroptr</code> sí ya que tiene una referencia a la dirección de memoria para dicha variable.</Paragraph>

        <CodeCompleteDetails>
          <GoCode codeString={codeComplete} />
        </CodeCompleteDetails>

        <Paragraph>Fuente: <a href='https://gobyexample.com/pointers'>gobyexample.com/pointers</a></Paragraph>
      </section>
    </div>
  )
}

export default Pointers