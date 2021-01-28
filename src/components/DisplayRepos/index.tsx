import { Repo } from 'pages'

import * as S from './styled'

export type DisplayReposProps = {
  top3Repos: Repo[]
}

const DisplayRepos = ({ top3Repos }: DisplayReposProps) => (
  <ul>
    {top3Repos &&
      top3Repos.map((repo) => (
        <S.Repo key={repo.id}>
          <a target="_blank" rel="noreferrer noopener" href={repo.html_url}>
            {repo.full_name}
          </a>
        </S.Repo>
      ))}
  </ul>
)

export default DisplayRepos
