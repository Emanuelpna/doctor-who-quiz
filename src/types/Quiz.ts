export type Answer = {
  questionIndex: number
  selectedAnswer: number
  isCorrect: boolean
}

export enum QuizState {
  LOADING,
  QUIZ,
  RESULT
}
