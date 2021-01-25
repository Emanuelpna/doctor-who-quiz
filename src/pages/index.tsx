import db from '../../db.json'

import Widget from 'components/Widget'
import Layout from 'components/Layout'
import GitHubCorner from 'components/GitHubCorner'
import ImageCopyright from 'components/ImageCopyright'

export default function Home() {
  return (
    <Layout imageBg={db.bg}>
      <Widget title={db.title}>
        <span>{db.description}</span>
      </Widget>

      <Widget>
        <h3>Quizes da Galera</h3>

        <span>
          Dá uma olhada nesses quizes incríveis que o pessoal da{' '}
          <strong>Imersão React Next.js</strong> fez:
        </span>
      </Widget>

      {!!db['bg-copy'] && (
        <ImageCopyright
          copyName={db['bg-copy'].name}
          copyUrl={db['bg-copy'].url}
        />
      )}

      <GitHubCorner projectUrl="https://github.com/Emanuelpna/doctor-who-quiz" />
    </Layout>
  )
}
