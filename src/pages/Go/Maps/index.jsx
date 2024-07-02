import codes from './codeStrings'
import codeComplete from './codeStringsComplete'

import Title from '@components/Title'
import Paragraph from '@components/Paragraph'
import GoCode from '../GoCode'
import CodeCompleteDetails from '@components/CodeCompleteDetails'

const Maps = () => {
  return(
    <div>
      <section id='section-1'>
        <Title type='h2'>Maps</Title>
        <Paragraph>Los <i>Maps</i> son los <u>tipos de datos asociativos</u> de Go (a veces llamados <i>hashes</i> o <i>dicts</i> en otros lenguajes).</Paragraph>

        <Paragraph>Para crear un map vacío utilizamos la función integrada <code>make</code>: <code className='resaltado'>make(map[key-type]val-type)</code>.</Paragraph>
        <GoCode codeString={codes.maps1} />

        <Paragraph>Podemos establecer los pares key/value utilizando la sintaxis típica <code className='resaltado'>name[key] = val</code>.</Paragraph>
        <GoCode codeString={codes.maps2} />

        <Paragraph>Al imprimir un map con, por ejemplo, <code>fmt.Println</code>, mostrará todos sus pares key/value.</Paragraph>
        <GoCode codeString={codes.maps3} />
        
        <Paragraph>Podemos obtener el valor de una key con <code className='resaltado'>name[key]</code></Paragraph>
        <GoCode codeString={codes.maps4} />
        
        <Paragraph>Si la key no existe, devuelve un <u>valor cero</u> del tipo de dato definido para el map.</Paragraph>
        <GoCode codeString={codes.maps5} />
        
        <Paragraph><code className='resaltado'>len</code> devuelve el número de pares key/value cuando lo aplicamos a un map.</Paragraph>
        <GoCode codeString={codes.maps6} />
        
        <Paragraph>La función integrada <code className='resaltado'>delete</code> se utiliza para eliminar pares key/value de un map.</Paragraph>
        <GoCode codeString={codes.maps7} />
        
        <Paragraph>Para eliminar <i>todos</i> los pares key/value de un map usamos la función integrada <code className='resaltado'>clear</code>.</Paragraph>
        <GoCode codeString={codes.maps8} />
        
        <Paragraph>El segundo valor opcional devuelto cuando obtenemos un valor de un map indica si la key está presente en el map. Esto puede ser usado para diferenciar entre keys no encontradas o keys con valor cero como <code>0</code> o <q></q>. En el siguiente ejemplo no necesitamos el valor en sí, así que lo podemos ignorar con el <i>identificador vacío (blank identifier)</i> <code className='resaltado'>_</code>.</Paragraph>
        <GoCode codeString={codes.maps9} />
        
        <Paragraph>También podemos declarar e inicializar un nuevo map en una sola línea con la siguiente sintaxis:</Paragraph>
        <GoCode codeString={codes.maps10} />
        
        <Paragraph>El paquete <code>maps</code> contiene un número de funciones útiles para los maps.</Paragraph>
        <GoCode codeString={codes.maps11} />
        
        <Paragraph>Por último, tener en cuenta que los maps aparecerán en la forma <code>map[k:v k:v]</code> cuando los imprimimos con <code>fmt.Println</code>.</Paragraph>

        <CodeCompleteDetails>
          <GoCode codeString={codeComplete} />
        </CodeCompleteDetails>

        <Paragraph>Fuente: <a href="https://gobyexample.com/maps" target='_blank'>gobyexample.com/maps</a></Paragraph>
      </section>
    </div>
  )
}

export default Maps