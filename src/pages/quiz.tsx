import db from '../../db.json'

import Layout from 'components/Layout'
import Quiz from 'templates/Quiz'

export default function Home() {
  return (
    <Layout imageBg={db.bg} bgCopy={db['bg-copy']}>
      <Quiz questions={db.questions} />
    </Layout>
  )
}
