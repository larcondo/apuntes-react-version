import codes from './codeStrings'
import codeComplete from './codeStringsComplete'

import Title from '@components/Title'
import Paragraph from '@components/Paragraph'
import GoCode from '../GoCode'

const Functions = () => {
  return(
    <div>
      <section id='section-1'>
        <Title type='h2'>Funciones</Title>
        <Paragraph>Las <i>funciones</i> son fundamentales en Go.</Paragraph>

        <Paragraph>La siguiente es una función que toma dos <code>int</code> y devuelve su suma como un <code>int</code>. Go requiere una devolución de valor explícito (<code>return</code>), es decir, no devolverá automáticamente el valor de la suma para el caso del ejemplo.</Paragraph>
        <GoCode codeString={codes.functions1} />

        <Paragraph>Cuando tenemos múltiples parámetros consecutivos de un mismo tipo, podemos omitir la declaración del tipo para los parámetros y declararlo luego del último parámetro (del mismo tipo).</Paragraph>
        <GoCode codeString={codes.functions2} />
        
        <Paragraph>La llamada a la función se realiza con la típica sintaxis <code>name(args)</code>:</Paragraph>
        <GoCode codeString={codes.functions3} />

        <Title type='h3'>Código completo</Title>
        <GoCode codeString={codeComplete} />

        <Paragraph>Fuente: <a href="https://gobyexample.com/functions" target='_blank'>gobyexample.com/functions</a></Paragraph>
      </section>
    </div>
  )
}

export default Functions