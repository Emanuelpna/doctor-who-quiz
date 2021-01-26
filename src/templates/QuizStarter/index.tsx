import Link from 'next/link'
import { useState } from 'react'

import Button from 'components/Button'
import Widget from 'components/Widget'
import Footer from 'components/Footer'
import QuizLogo from 'components/QuizLogo'
import { Spacer } from 'components/Spacer'
import TextField from 'components/TextField'

import * as S from './styled'

export type QuizStarterProps = {
  title: string
  description: string
}

const QuizStarter = ({ title, description }: QuizStarterProps) => {
  const [playerName, setPlayerName] = useState('')

  const onChangeCallback = (value: string) => {
    setPlayerName(value)
  }

  return (
    <S.Container>
      <QuizLogo />

      <Spacer size={24} />

      <Widget title={title}>
        <span>{description}</span>

        <Spacer size={24} />

        <TextField
          onChangeCallback={onChangeCallback}
          placeholder="Diz aí seu nome pra jogar :)"
        />

        <Spacer size={24} />

        <Button disabled={!playerName}>
          <Link href="/quiz">Jogar</Link>
        </Button>
      </Widget>

      <Spacer size={24} />

      <Widget>
        <h3>Quizes da Galera</h3>

        <span>
          Dá uma olhada nesses quizes incríveis que o pessoal da{' '}
          <strong>Imersão React Next.js</strong> fez:
        </span>
      </Widget>

      <Spacer size={24} />

      <Footer />
    </S.Container>
  )
}

export default QuizStarter
