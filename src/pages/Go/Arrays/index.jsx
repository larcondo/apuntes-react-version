import codes from './codeStrings'
import codeComplete from './codeStringsComplete'

import Title from '@components/Title'
import Paragraph from '@components/Paragraph'
import GoCode from '../GoCode'

const Arrays = () => {
  return(
    <div>
      <section id='section-1'>
        <Title type='h2'>Arrays</Title>
        <Paragraph>En Go, un <i>array</i> es una secuencia numerada de elementos de una longitud específica. En Go, los <u>slices</u> son mucho más comunes; los arrays son útiles en algunos escenarios especiales.</Paragraph>

        <Paragraph>En el siguiente código, creamos un array <code>a</code> que tendrá exactamente 5 <code>ints</code>. El tipo de elementos y la longitud son ambos partes del tipo del array. Por defecto un array tiene valor cero, lo cual significa que para un array tipo <code>int</code> sus elementos serán todos <code>0</code>.</Paragraph>
        <GoCode codeString={codes.arrays1} />
        
        <Paragraph>Podemos cambiar/establecer un valor en un índice específico utilizando la sintaxis <code className='resaltado'>array[index] = value</code> y obtener un valor con <code className='resaltado'>array[index]</code>.</Paragraph>
        <GoCode codeString={codes.arrays2} />
        
        <Paragraph><code className='resaltado'>len</code> devuelve la longitud de un array.</Paragraph>
        <GoCode codeString={codes.arrays3} />

        <Paragraph>Podemos utilizar la siguiente sintaxis para declarar e inicializar un array en una sola línea:</Paragraph>
        <GoCode codeString={codes.arrays4} />

        <Paragraph>También podemos dejar que el compilador cuente el número de elementos por nosotros con <code className='resaltado'>...</code></Paragraph>
        <GoCode codeString={codes.arrays5} />

        <Paragraph>Si especificamos el índice con <code>:</code>, los elementos intermedios serán de valor cero.</Paragraph>
        <GoCode codeString={codes.arrays6} />

        <Paragraph>Los tipos array son unidimensionales, pero se pueden componer tipos para construir estructuras de datos multidimensionales.</Paragraph>
        <GoCode codeString={codes.arrays7} />

        <Paragraph>Podemos crear e inicializar arrays multidimensionales de una sola vez así:</Paragraph>
        <GoCode codeString={codes.arrays8} />
        
        <Paragraph>Cuando imprimimos con <code>fmt.Println</code> un array aparecerá en la forma <code>[v1 v2 v3 ...]</code>.</Paragraph>

        <Title type='h3'>Código completo</Title>
        <GoCode codeString={codeComplete} />

        <p>Fuente: <a href="https://gobyexample.com/arrays" target='_blank'>gobyexample.com/arrays</a></p>

      </section>
    </div>
  )
}

export default Arrays