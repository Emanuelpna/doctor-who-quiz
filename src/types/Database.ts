export type Question = {
  image: string
  title: string
  description: string
  answer: number
  alternatives: string[]
}

export type Theme = {
  colors: {
    primary: string
    secondary: string
    mainBg: string
    contrastText: string
    wrong: string
    success: string
  }
  borderRadius: string
}

export type BackgroundCopyright = {
  name: string
  url: string
}

export type Database = {
  bg: string
  'bg-copy': BackgroundCopyright
  questions: Question[]
  theme: Theme
}
