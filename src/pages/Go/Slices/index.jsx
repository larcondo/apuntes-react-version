import codes from './codeStrings'
import codeComplete from './codeStringsComplete'

import Title from '@components/Title'
import Paragraph from '@components/Paragraph'
import GoCode from '../GoCode'
import CodeCompleteDetails from '@components/CodeCompleteDetails'

const Slices = () => {
  return(
    <div>
      <section id='section-1'>
        <Title type='h2'>Slices</Title>
        <Paragraph>Los <i>slices</i> son un tipo de datos importantes en Go, ya que proporcionan una interfaz más potente para las secuencias que los <i>arrays</i>.</Paragraph>
        <Paragraph>A diferencia de los arrays, los <i>slices</i> son tipados solo por los elementos que contienen (no por el número de elementos).</Paragraph>
        <Paragraph>El siguiente es un slice no inicializado igual a <b>nil</b> que tiene longitud 0.</Paragraph>

        <GoCode codeString={codes.slices1} />

        <Paragraph>Para crear un slice vacío con una longitud distinta a 0, podemos utilizar la función integrada <code className='resaltado'>make</code>. Podemos crear un slice de <code className='resaltado'>strings</code> de longitud 3 (inicialmente de valor cero). Por defecto, la capacidad de un nuevo slice es igual a su longitud; si supiéramos de antemano que el slice crecerá a lo largo del tiempo, es posible pasar la <q>capacidad</q> explícitamente como un parámetro adicional en la función <code className='resaltado'>make</code></Paragraph>
        <GoCode codeString={codes.slices2} />

        <Paragraph>Podemos establecer u obtener elementos específicos al igual que con los arrays.</Paragraph>
        <GoCode codeString={codes.slices3} />

        <Paragraph><code className="resaltado">len</code> devuelve la longitud de un slice:</Paragraph>
        <GoCode codeString={codes.slices4} />

        <Paragraph>In addition to these basic operations, slices support several more that make them richer than arrays. One is the builtin append, which returns a slice containing one or more new values. Note that we need to accept a return value from append as we may get a new slice value.</Paragraph>
        <GoCode codeString={codes.slices5} />

        <Paragraph>Los slices también se pueden copiar. En el ejemplo siguiente creamos un slice vacío <code className='resaltado'>c</code> de la misma longitud de <code className='resaltado'>s</code> y copiamos en <code className='resaltado'>c</code> el slice <code className='resaltado'>s</code>.</Paragraph>
        <GoCode codeString={codes.slices6} />
        
        <Paragraph>Los slices soportan el operador <q>slice</q> con la sintaxis <code className='resaltado'>slice[low:high]</code>. Por ejemplo, <code className='resaltado'>l</code> corresponde a un slice con los elementos <code>s[2]</code>, <code>s[3]</code> y <code>s[4]</code>.</Paragraph>
        <GoCode codeString={codes.slices7} />

        <Paragraph>El siguiente slice <code className='resaltado'>l</code> se crea a partir del slice <code className='resaltado'>s</code> hasta (pero excluyendo) <code>s[5]</code>.</Paragraph>
        <GoCode codeString={codes.slices8} />

        <Paragraph>Y el siguiente slice se crea a partir del slice <code className='resaltado'>s</code> desde (e incluyendo) <code>s[2]</code>.</Paragraph>
        <GoCode codeString={codes.slices9} />
        
        <Paragraph>Podemos declarar e inicializar una variable slice en una sola línea también.</Paragraph>
        <GoCode codeString={codes.slices10} />
        
        <Paragraph>El paquete <code>slices</code> contiene un número de funciones de utilidad para los slices.</Paragraph>
        <GoCode codeString={codes.slices11} />
        
        <Paragraph>Los slices pueden estar compuestos por estructuras de datos multi-dimensionales. La longitud de los slices internos puede variar, a diferencia de los arrays multi-dimensionales.</Paragraph>
        <GoCode codeString={codes.slices12} />

        <Paragraph>Notar que si bien los slices son tipos diferentes a los arrays, se muestran de igual forma por <code>fmt.Println</code>.</Paragraph>
        <Paragraph>Ver <a href="https://go.dev/blog/slices-intro" target="_blank">este post</a> del team Go para más detalles del diseño e implementación de slices en Go.</Paragraph>

        <CodeCompleteDetails>
          <GoCode codeString={codeComplete} />
        </CodeCompleteDetails>

        <Paragraph>Fuente: <a href="https://gobyexample.com/slices" target='_blank'>gobyexample.com/slices</a></Paragraph>
      </section>
    </div>
  )
}

export default Slices