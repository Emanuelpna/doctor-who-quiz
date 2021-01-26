import Link from 'next/link'

import db from '../../db.json'

import Layout from 'components/Layout'

export default function Home() {
  return (
    <Layout imageBg={db.bg} bgCopy={db['bg-copy']}>
      <h1 style={{ color: db.theme.colors.contrastText }}>Página de Quiz</h1>
      <Link href="/">Voltar</Link>
    </Layout>
  )
}
