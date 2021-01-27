import { FormEvent, useState } from 'react'

import Button from 'components/Button'
import { Spacer } from 'components/Spacer'
import AnswerStatus from 'components/AnswerStatus'

import * as S from './styled'

type QuestionProps = {
  question: string
  description: string
  alternatives: string[]
  correctAnswer: number
  onAnswerSubmit?: (selectedAnswer: number, isCorrect: boolean) => void
}

const Question = ({
  question,
  alternatives,
  correctAnswer,
  description,
  onAnswerSubmit
}: QuestionProps) => {
  const [isLoading, setIsLoading] = useState(false)

  const [selectedAnswer, setSelectedAnswer] = useState(-1)

  const [isCorrectAnswer, setIsCorrectAnswer] = useState<boolean | null>(null)

  const onAlternativeClick = (alternativeIndex: number) => {
    if (isLoading) return

    setSelectedAnswer(alternativeIndex)
  }

  const onAlternativeFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    setIsLoading(true)

    const isCorrect = selectedAnswer === correctAnswer

    setIsCorrectAnswer(isCorrect)

    setTimeout(() => {
      setIsLoading(false)
      setIsCorrectAnswer(null)
      setSelectedAnswer(-1)

      onAnswerSubmit && onAnswerSubmit(selectedAnswer, isCorrect)
    }, 3000)
  }

  return (
    <S.Container>
      <S.Title>{question}</S.Title>
      <S.Description>{description}</S.Description>

      <Spacer size={12} />

      <S.Form onSubmit={onAlternativeFormSubmit}>
        <S.AlternativesContainer>
          {alternatives.map((alternative, index) => (
            <S.Alternatives
              onClick={() => onAlternativeClick(index)}
              key={alternative}
              isSelected={selectedAnswer === index}
              isCorrect={
                selectedAnswer === index &&
                isCorrectAnswer !== null &&
                isCorrectAnswer
              }
              isWrong={
                selectedAnswer === index &&
                isCorrectAnswer !== null &&
                !isCorrectAnswer
              }
            >
              <input
                type="radio"
                name="alternatives"
                id={`alternative-${index}`}
              />
              <label htmlFor={`alternative-${index}`}>{alternative}</label>
            </S.Alternatives>
          ))}
        </S.AlternativesContainer>

        <Spacer size={12} />

        {isCorrectAnswer === null && (
          <Button disabled={selectedAnswer < 0} type="submit">
            Confirmar
          </Button>
        )}

        <Spacer size={12} />

        {isCorrectAnswer !== null && (
          <AnswerStatus isCorrect={isCorrectAnswer} />
        )}
      </S.Form>
    </S.Container>
  )
}

export default Question
