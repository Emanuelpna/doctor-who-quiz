import { GetServerSideProps } from 'next'
import { ThemeProvider } from 'styled-components'

import Layout from 'components/Layout'

import Quiz from 'templates/Quiz'

import { Database } from 'types/Database'

type QuizesDaGaleraProps = {
  database: Database
}

export default function QuizesDaGalera({ database }: QuizesDaGaleraProps) {
  return (
    <ThemeProvider theme={database.theme}>
      <Layout imageBg={database.bg} bgCopy={database['bg-copy']}>
        <Quiz questions={database.questions} />
      </Layout>
    </ThemeProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { quizID } = context.query

  const translateID = (quizID: string) => {
    return quizID.replace('___', '.')
  }

  const mountURL = (quizID: string) => {
    return `https://${translateID(quizID)}.vercel.app`
  }

  try {
    const url = mountURL(quizID as string)

    const response = await fetch(`${url}/api/db`)

    const externalDatabase = await response.json()

    if (!externalDatabase) throw new Error('Não encontrou arquivo da API')

    return {
      props: { database: externalDatabase }
    }
  } catch (error) {
    context.res.writeHead(302, { Location: '/' })
    context.res.end()

    return {
      props: {}
    }
  }
}
