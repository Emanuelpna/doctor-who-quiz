import Link from 'next/link'

import db from '../../db.json'

import Layout from 'components/Layout'
import Quiz from 'templates/Quiz'

export default function Home() {
  return (
    <Layout imageBg={db.bg} bgCopy={db['bg-copy']}>
      <Quiz title="Pergunta 1 de 5" />
    </Layout>
  )
}
