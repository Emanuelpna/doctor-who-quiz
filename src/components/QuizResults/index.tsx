import { getQuizResultMessage } from 'services/getQuizResultMessage'

import { Spacer } from 'components/Spacer'

import * as S from './styled'

type QuizResultsProps = {
  username: string
  correctAnswers: number
  totalQuestions: number
}

const QuizResults = ({
  username,
  correctAnswers,
  totalQuestions
}: QuizResultsProps) => {
  const message = getQuizResultMessage({
    username,
    correctAnswers,
    totalQuestions
  })

  return (
    <S.Container>
      <S.Title>{message.title}</S.Title>

      <S.Description>{message.correctCount}</S.Description>

      <Spacer size={12} />

      <S.CheerUp>{message.cheerUp}</S.CheerUp>
    </S.Container>
  )
}

export default QuizResults
