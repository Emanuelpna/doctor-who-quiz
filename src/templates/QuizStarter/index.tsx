import { useRouter } from 'next/router'
import { useEffect, useState, FormEvent } from 'react'

import Button from 'components/Button'
import Widget from 'components/Widget'
import Footer from 'components/Footer'
import QuizLogo from 'components/QuizLogo'
import { Spacer } from 'components/Spacer'
import TextField from 'components/TextField'
import DisplayRepos from 'components/DisplayRepos'

import { Repo } from 'pages'

export type QuizStarterProps = {
  title: string
  description: string
  top3Repos: Repo[]
}

const QuizStarter = ({ title, description, top3Repos }: QuizStarterProps) => {
  const router = useRouter()

  const [playerName, setPlayerName] = useState('')

  const onChangeCallback = (value: string) => {
    setPlayerName(value)
  }

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()

    router.push({
      pathname: '/quiz',
      query: {
        name: playerName
      }
    })
  }

  useEffect(() => {
    router.prefetch('/quiz')
  }, [router])

  return (
    <>
      <QuizLogo />

      <Spacer size={24} />

      <Widget title={title}>
        <span>{description}</span>

        <Spacer size={24} />

        <form onSubmit={onSubmit}>
          <TextField
            onChangeCallback={onChangeCallback}
            placeholder="Diz aí seu nome pra jogar :)"
          />

          <Spacer size={24} />

          <Button disabled={!playerName} type="submit">
            Jogar
          </Button>
        </form>
      </Widget>

      <Spacer size={24} />

      <Widget>
        <h3>Quizes da Galera</h3>

        <span>
          Dá uma olhada nesses quizes incríveis que o pessoal da{' '}
          <strong>Imersão React Next.js</strong> fez:
        </span>

        <Spacer size={24} />

        <DisplayRepos top3Repos={top3Repos} />
      </Widget>

      <Spacer size={24} />

      <Footer />
    </>
  )
}

export default QuizStarter
