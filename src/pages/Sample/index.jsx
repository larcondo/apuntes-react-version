import Title from '@components/Title'
import CodeBlock from '@components/CodeBlock'
import Paragraph from '@components/Paragraph'
import HighlightedNav from '@components/HighlightedNav'
import PageContainer from '@components/PageContainer'

const links = [
  { id: 'section-1', text: 'Section 1' },
  { id: 'section-2', text: 'Section 2' },
  { id: 'section-3', text: 'Section 3' },
  { id: 'section-4', text: 'Section 4' },
  { id: 'section-5', text: 'Section 5' },
]

const Sample = () => {
  const codeString = `const miVar = 1;
const miFunc = (arg) => {
  return arg && true;
}`
  
  return(
    <PageContainer>
      <div>
      <Title type='h1'>Sample Page</Title>

      <section id='section-1'>
        <Title type='h2'>Section 1</Title>
        <Paragraph>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus nemo praesentium, quam vero rem magnam distinctio quaerat, voluptas molestiae, adipisci laborum voluptate. Maiores praesentium earum, expedita obcaecati eius, nam perferendis ducimus nemo aut aperiam a culpa sint. Non, nam earum.
        </Paragraph>
        <CodeBlock language='javascript' codeString={codeString} />
      </section>
      <section id='section-2'>
        <Title type='h2'>Section 2</Title>
        <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eos ullam vel, nemo cupiditate debitis optio repellat in molestiae explicabo architecto impedit ut repellendus obcaecati ducimus deleniti voluptates perspiciatis natus, eum facere ea doloribus laboriosam consectetur nihil. Ab rem earum reiciendis laborum! Unde eius perspiciatis, id expedita, repellat temporibus porro nesciunt quia sit quaerat dolorem est dolore eveniet distinctio accusantium aliquid, facere doloribus beatae ab cupiditate qui ad non magni esse! Quaerat, nam. Maxime labore dolor illum. Magnam quasi delectus praesentium atque nobis? Soluta distinctio, quae hic alias quia, pariatur, eligendi libero ut accusantium repellendus commodi quibusdam error dolorem et.</Paragraph>
        <CodeBlock language='javascript' codeString={codeString} />
      </section>
      <section id='section-3'>
        <Title type='h2'>Section 3</Title>
        <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur possimus labore nostrum tempore in? Illo nisi suscipit, voluptatibus aspernatur earum illum sint accusantium cupiditate officiis labore id quia velit veniam at. Dignissimos quas sapiente, assumenda fugiat nulla exercitationem consequuntur perferendis dolore pariatur unde cumque iusto, earum vel eaque. Dolorum praesentium perspiciatis, doloribus accusantium fugiat temporibus dolore minima natus corrupti in laudantium? Sapiente quaerat iusto pariatur aspernatur ab quisquam, saepe dolorem! Maiores corrupti provident vitae odio sunt nemo ipsum perspiciatis sapiente hic. Culpa maiores natus architecto fugit a nihil quibusdam error repellendus. Perferendis omnis veritatis magni culpa molestiae voluptatibus a est deleniti consequuntur, numquam sint, fugiat quas, quos facilis obcaecati odit ipsa repellat voluptates repudiandae nulla eaque nemo nostrum veniam consequatur? Unde eligendi obcaecati maiores magnam adipisci dolores nesciunt quaerat possimus quis at doloribus iste, aspernatur ea ipsa atque dolorum architecto sapiente quo ab optio veniam commodi quibusdam nam? Expedita tempora incidunt eveniet eius consectetur cum omnis nemo, nam repellat, dicta vero culpa unde in dolores hic magni est, corporis corrupti iure laudantium voluptas doloribus blanditiis officiis. Iure, alias ad, laborum ducimus tempora ipsa cum veritatis aut mollitia suscipit quisquam nemo sed illo fuga minus odit reiciendis, dignissimos in rem? Quo vel deleniti totam illo odio fugit cumque sed reiciendis dignissimos ratione mollitia exercitationem vitae a veritatis, laborum nihil expedita quasi esse amet assumenda doloribus dolore eius. Provident quasi delectus debitis officiis fugiat iste omnis, maxime laudantium iusto eius. Debitis quis voluptas accusamus dolores nihil officia, nemo quidem quo magni vitae blanditiis modi. Quod consequatur dignissimos fugit labore obcaecati officiis, officia nulla, aliquid aspernatur quo, eum iure dolorem ipsa eveniet? Nisi vitae sequi dolorem autem maiores blanditiis quod? Natus veniam sapiente iste autem alias aliquam beatae consequatur voluptates, dolorem voluptas, ullam doloremque id tempore. Perferendis praesentium ut ullam ratione sapiente vel deleniti voluptatem blanditiis omnis cum, quia a accusamus assumenda veniam porro sit nobis rerum beatae iusto, expedita non! Dicta quia accusamus hic aut! Quibusdam est officia sed alias, magnam omnis voluptatum enim maxime recusandae cupiditate quis qui exercitationem, dolore unde ea molestias consequuntur itaque quae totam autem eveniet! Molestias dolores possimus, optio ab ducimus eligendi odit ut, eos in minus laborum quam? Neque, saepe. Explicabo consequatur, qui praesentium incidunt possimus iste exercitationem quam, iure quia, veritatis placeat aperiam doloremque voluptatum! Ullam harum iste incidunt rerum aperiam tenetur dignissimos dolore, id fugit, blanditiis, distinctio velit quisquam nisi quibusdam facilis fuga consequuntur perspiciatis in quos! Quasi cum doloribus recusandae quam in quae, impedit voluptatum a, saepe aliquid reprehenderit eius perspiciatis repudiandae, magni non excepturi autem. Officia nisi tenetur doloremque iste suscipit? Veniam soluta autem ducimus eum voluptatum quas nisi iure. Obcaecati quo accusamus odit suscipit ipsum sunt hic eaque deserunt magnam tenetur fuga, vitae cum, magni assumenda tempora excepturi ipsam harum adipisci placeat nesciunt repellendus reprehenderit architecto nihil dolores! Natus sequi labore eius suscipit? Modi necessitatibus sed cum possimus odio mollitia aperiam praesentium minus excepturi. Non itaque excepturi nostrum. Ullam saepe ut error ipsa blanditiis facere obcaecati officiis sint. Eos, quam odit?</Paragraph>
        <CodeBlock language='javascript' codeString={codeString} />
      </section>
      <section id='section-4'>
        <Title type='h2'>Section 4</Title>
        <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem sunt repellendus minus eius nihil quos, quis quas vel natus deleniti nulla qui ex. Neque quae laboriosam ab assumenda molestias natus, impedit quis? Quis non, aliquid doloribus expedita provident qui voluptatum culpa ipsam natus vitae sint soluta? Qui doloribus, quaerat veritatis consectetur ullam nostrum nam, corporis rem illum iste amet voluptatibus tenetur incidunt corrupti eum ex ipsa alias harum nisi. Fugiat officiis perspiciatis earum dolores eius amet adipisci eligendi, iure at alias sapiente similique fuga eaque harum ad odio minima laudantium officia nobis ipsam nulla dolorem voluptatibus suscipit reiciendis! Itaque quia placeat, neque dolorem explicabo dolorum corporis exercitationem incidunt ipsum! Officia nostrum quam vel eum fugit sapiente, amet assumenda pariatur minus quod sequi exercitationem inventore reiciendis mollitia nulla corporis! Repellat pariatur dolor culpa ipsum molestias quidem. Excepturi provident quas nulla esse necessitatibus odio cumque quos? Harum voluptate labore ipsa dolor sit quo quasi laboriosam dolore molestiae inventore aliquid repellendus sunt eius ad unde, nulla recusandae dolores animi maxime totam facilis dolorum quam doloribus reprehenderit? Repellat odio aliquid officiis labore aperiam eum in, ipsam ab nihil beatae exercitationem rem sed minima consequuntur, libero, harum dolorem ratione atque voluptatem distinctio. Vitae minima, dignissimos cupiditate perspiciatis recusandae quibusdam vero voluptas amet tempora consectetur corrupti cum voluptatum minus sit excepturi quis nisi nihil porro dolorem et laboriosam laudantium delectus vel. Dolores enim repudiandae quos tempore.</Paragraph>
        {/* <CodeBlock language='javascript' codeString={codeString} /> */}
      </section>
      <section id='section-5'>
        <Title type='h2'>Section 5</Title>
        <Paragraph>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, eius? Tenetur, sit consequatur assumenda iure ducimus quia fuga recusandae suscipit natus, alias nemo enim ullam sunt, consectetur repudiandae. Vitae, enim provident assumenda veniam minima architecto quam, sit sapiente beatae omnis ratione magnam suscipit fugiat quidem fugit. Exercitationem ex qui iure minus deleniti expedita quae, consequuntur beatae odit modi. Maiores beatae rem, itaque voluptates facilis ipsam inventore illum assumenda sed nesciunt explicabo. Voluptatibus accusamus voluptates itaque laudantium numquam eligendi, ut sunt quasi. Quos excepturi amet, aliquid, quia possimus eaque atque sapiente natus nobis molestias debitis. Aliquid soluta et iste. Reiciendis incidunt labore quos est perferendis enim ipsam ipsa odit ducimus, magnam soluta corrupti fugiat dolorem voluptatum libero, numquam maiores distinctio, odio eaque quibusdam quidem aspernatur dolorum accusantium. Dignissimos, voluptas. Debitis, impedit officiis consectetur a modi dolorum quasi tempore rem recusandae cumque?</Paragraph>
      </section>
    </div>
    <HighlightedNav links={links} />
    </PageContainer>
  )
}

export default Sample