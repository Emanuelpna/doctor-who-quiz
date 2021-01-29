import Link from 'next/link'

import { Repo } from 'types/Repositories'

import * as S from './styled'

export type DisplayReposProps = {
  name: string
  top3Repos: Repo[]
}

const DisplayRepos = ({ top3Repos, name }: DisplayReposProps) => {
  const getIdFromRepoUrl = (repoUrl: string) => {
    return repoUrl
      .replace(/\//g, '')
      .replace('https:', '')
      .replace('.vercel.app', '')
      .replace('.', '___')
  }

  return (
    <ul>
      {top3Repos &&
        top3Repos.map((repo) => (
          <S.Repo key={repo.id}>
            {!!name && (
              <Link
                href={`/quizes-da-galera/${getIdFromRepoUrl(
                  repo.homepage
                )}?name=${name}`}
              >
                {repo.full_name}
              </Link>
            )}

            {!name && (
              <span
                onClick={() => alert('Informe seu nome antes para poder jogar')}
              >
                {repo.full_name}
              </span>
            )}
          </S.Repo>
        ))}
    </ul>
  )
}

export default DisplayRepos
