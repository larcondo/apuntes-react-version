import PageContainer from "../../components/PageContainer"
import Title from "../../components/Title"
import Paragraph from "../../components/Paragraph"
import HighlightedNav from "../../components/HighlightedNav"
import CodeBlock from "../../components/CodeBlock"
import codeStrings from "./codeStrings"

const links = [
  { id: 'section-1', text: 'Crear usuario'},
  { id: 'section-2', text: 'Conectarse a mongosh'},
  { id: 'section-3', text: 'Connection string'},
  { id: 'section-4', text: 'Agregar rol en usuario'},
  { id: 'section-5', text: 'Revocar rol en usuario'},
]

const MongoDB = () => {
  return(
    <PageContainer>
      <div>
        <Title type='h1'>Mongo DB</Title>
        <section id='section-1'>
          <Title type='h2'>Crear usuario en mongodb</Title>

          <CodeBlock language='javascript' codeString={codeStrings.code1} />

          <Paragraph>Luego habilitar la seguriad en:</Paragraph>
          <CodeBlock language='dos' codeString={codeStrings.code2} />

          <Paragraph>Descomentar la línea <q>#security:</q> y agregar la siguiente línea:</Paragraph>
          <CodeBlock language='dos' codeString={codeStrings.code3} />
          <Paragraph>
            Ver video: <a href='https://www.youtube.com/watch?v=NdFGzC53aGY&ab_channel=HappyGhost' target='_blank'>MongoDB - Enable Authentication with Username and Password for Secure on MongoDB</a>
          </Paragraph>
        </section>

        <section id='section-2'>
          <Title type='h2'>Conectarse a mongosh con usuario y contraseña</Title>
          <Paragraph>En cmd ejectuar el comando:</Paragraph>
          <CodeBlock language='dos' codeString={codeStrings.code4} />
          <Paragraph>Se pedirá el password, ingresarlo y dar enter.</Paragraph>
        </section>

        <section id='section-3'>
          <Title type='h2'>Connection string mongoDB con usuario y contraseña</Title>
          <CodeBlock language='javascript' codeString={codeStrings.code5} />
        </section>

        <section id='section-4'>
          <Title type='h2'>Agregar rol en usuario</Title>
          <CodeBlock language='javascript' codeString={codeStrings.code6} />
        </section>

        <section id='section-5'>
          <Title type='h2'>Revocar rol en usuario</Title>
          <CodeBlock language='javascript' codeString={codeStrings.code7} />
        </section>
      </div>

      <HighlightedNav links={links} />
    </PageContainer>
  )
}

export default MongoDB