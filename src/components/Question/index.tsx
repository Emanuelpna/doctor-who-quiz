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
  const [isShowingResults, setIsShowingResults] = useState(false)

  const [selectedAnswer, setSelectedAnswer] = useState(-1)

  const [isCorrectAnswer, setIsCorrectAnswer] = useState<boolean | null>(null)

  const onAlternativeClick = (alternativeIndex: number) => {
    // Bloqueia a seleção de novas alternativas após o submit
    if (isShowingResults) return

    setSelectedAnswer(alternativeIndex)
  }

  const onAlternativeFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    // Define que formulário já foi enviado
    setIsShowingResults(true)

    // Verficia se alternativa é a correta
    const isCorrect = selectedAnswer === correctAnswer

    setAnimateKey(isCorrect ? 'correct' : 'wrong')

    // E salva o status
    setIsCorrectAnswer(isCorrect)

    setTimeout(() => {
      // Reseta para os estados iniciais para trocar de pergunta
      setIsShowingResults(false)
      setIsCorrectAnswer(null)
      setSelectedAnswer(-1)
      setAnimateKey('')

      // Avisa o componente de fora que foi selecionado e o status da respsta
      onAnswerSubmit && onAnswerSubmit(selectedAnswer, isCorrect)
    }, 2000)
  }

  const [animateKey, setAnimateKey] = useState('')

  return (
    <S.Container>
      <S.Title>{question}</S.Title>
      <S.Description>{description}</S.Description>

      <Spacer size={24} />

      <S.Form onSubmit={onAlternativeFormSubmit}>
        <S.AlternativesContainer>
          {alternatives.map((alternative, index) => (
            <S.Alternatives
              variants={{
                correct: { scale: [1, 1.02, 1.02, 1.02, 0.98, 1] },
                wrong: { x: ['0%', '-1.5%', '1.5%', '-1.5%', '1.5%', '0%'] },
                base: { x: '0%', scale: 1 }
              }}
              initial="base"
              animate={selectedAnswer === index && animateKey}
              transition={{ duration: 0.35 }}
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

        <Spacer size={24} />

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
