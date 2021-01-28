import db from '../../db.json'

import Layout from 'components/Layout'
import QuizStarter from 'templates/QuizStarter'

type ApiGithubRepoResponse = {
  items: Repo[]
}

export type Repo = {
  id: number
  html_url: string
  full_name: string
  homepage: string
}

type HomeProps = {
  top3Repos: Repo[]
}

export default function Home({ top3Repos }: HomeProps) {
  return (
    <Layout imageBg={db.bg} bgCopy={db['bg-copy']}>
      <QuizStarter
        title={db.title}
        description={db.description}
        top3Repos={top3Repos}
      />
    </Layout>
  )
}

export async function getStaticProps() {
  try {
    const response = await fetch(
      'https://api.github.com/search/repositories?q=topic:aluraquiz&per_page=20&sort=stars&o=desc',
      {
        headers: {
          Accept: 'application/vnd.github.v3+json'
        }
      }
    )

    const allRepos: ApiGithubRepoResponse = await response.json()

    /**
     * Removendo os repositórios da alura e do instrutor
     * Removendo o meu repositório
     * Removendo repositórios que, no momento da escrita, não expõem o db.json na api
     */
    const ignoreReposFrom = [
      'alura-challenges',
      'omariosouto',
      'Emanuelpna',
      'mariomendonca',
      'TheeDouglasAM3',
      'fischerafael'
    ]

    const top3Repos = allRepos.items
      .filter(
        (repo) =>
          !ignoreReposFrom.some((ignoredRepoAuthor) =>
            repo.full_name.includes(ignoredRepoAuthor)
          )
      )
      .slice(0, 3)

    return {
      props: { top3Repos }
    }
  } catch (error) {
    console.log('Index Page Error getStaticProps :>> ', error)
  }
}
