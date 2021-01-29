export type ApiGithubRepoResponse = {
  items: Repo[]
}

export type Repo = {
  id: number
  html_url: string
  full_name: string
  homepage: string
}
