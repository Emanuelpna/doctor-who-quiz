import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import Widget from 'components/Widget'
import Footer from 'components/Footer'
import Loading from 'components/Loading'
import QuizLogo from 'components/QuizLogo'
import { Spacer } from 'components/Spacer'
import Question from 'components/Question'

export type QuestionType = {
  image: string
  title: string
  description: string
  answer: number
  alternatives: string[]
}

export type QuizProps = {
  questions: QuestionType[]
}

type AnswerType = {
  questionIndex: number
  selectedAnswer: number
  isCorrect: boolean
}

enum QuizState {
  LOADING,
  QUIZ,
  RESULT
}

const Quiz = ({ questions }: QuizProps) => {
  const router = useRouter()

  const [questionIndex, setQuestionIndex] = useState(0)

  const [answers, setAnswers] = useState<AnswerType[]>([])

  const [currentQuizState, setCurrentQuizState] = useState(QuizState.LOADING)

  const totalQuestions = questions.length
  const currentQuestion = questions[questionIndex]

  const title =
    currentQuizState === QuizState.LOADING
      ? 'Carregando Pergunta...'
      : `Pergunta ${questionIndex + 1} de ${totalQuestions}`

  const onAnswerSubmit = (selectedAnswer: number, isCorrect: boolean) => {
    if (selectedAnswer < 0) return

    setAnswers([
      ...answers,
      {
        questionIndex,
        selectedAnswer,
        isCorrect
      }
    ])

    const nextQuestion = questionIndex + 1

    const nextQuestionExists = nextQuestion < totalQuestions

    if (nextQuestionExists) {
      setQuestionIndex(nextQuestion)
    } else {
      setCurrentQuizState(QuizState.RESULT)
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setCurrentQuizState(QuizState.QUIZ)
    }, 2000)
  }, [])

  return (
    <>
      <QuizLogo />

      <Spacer size={24} />

      <Widget
        enableBackButton={currentQuizState !== QuizState.LOADING}
        title={title}
        cover={
          currentQuizState === QuizState.QUIZ ? currentQuestion.image : null
        }
      >
        {currentQuizState === QuizState.LOADING && <Loading />}

        {currentQuizState === QuizState.QUIZ && (
          <Question
            onAnswerSubmit={onAnswerSubmit}
            alternatives={currentQuestion.alternatives}
            question={currentQuestion.title}
            description={currentQuestion.description}
            correctAnswer={currentQuestion.answer}
          />
        )}

        {currentQuizState === QuizState.RESULT && (
          <strong>
            {router.query.name}, você acertou{' '}
            {answers.filter((answer) => !!answer.isCorrect).length} respostas!
          </strong>
        )}
      </Widget>

      <Spacer size={24} />

      <Footer />
    </>
  )
}

export default Quiz
