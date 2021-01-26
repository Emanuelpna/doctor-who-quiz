import db from '../../db.json'

import Layout from 'components/Layout'
import QuizStarter from 'templates/QuizStarter'

export default function Home() {
  return (
    <Layout imageBg={db.bg} bgCopy={db['bg-copy']}>
      <QuizStarter title={db.title} description={db.description} />
    </Layout>
  )
}
