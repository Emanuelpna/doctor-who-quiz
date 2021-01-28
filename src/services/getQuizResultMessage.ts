type QuizResultMessageArgs = {
  username: string
  correctAnswers: number
  totalQuestions: number
}

enum QuizStatus {
  BAD,
  GOOD,
  EXCELENT,
  PERFECT
}

export const getQuizResultMessage = ({
  username,
  correctAnswers,
  totalQuestions
}: QuizResultMessageArgs) => {
  const successRatio = (correctAnswers / totalQuestions) * 100

  let status: QuizStatus = QuizStatus.BAD

  if (successRatio < 60) {
    status = QuizStatus.BAD
  } else if (successRatio >= 60 && successRatio < 80) {
    status = QuizStatus.GOOD
  } else if (successRatio >= 80 && successRatio < 100) {
    status = QuizStatus.EXCELENT
  } else if (successRatio >= 100) {
    status = QuizStatus.PERFECT
  }

  const getMessages = (
    username: string,
    correctAnswers: number,
    totalQuestions: number
  ) => ({
    [QuizStatus.BAD]: `Não foi dessa vez, ${username} 😢 \n\nVocê acertou ${correctAnswers} de ${totalQuestions} respostas! \n\nMas tenho certeza que você consegue!`,
    [QuizStatus.GOOD]: `Mandou bem, ${username} 🙂 \n\nVocê acertou ${correctAnswers} de ${totalQuestions} respostas! \n\nAinda tem muito conhecimento te esperando, não desista!`,
    [QuizStatus.EXCELENT]: `Parabéns, ${username} 🥳 \n\nVocê acertou ${correctAnswers} de ${totalQuestions} respostas! \n\nVocê está quase virando um especialista!`,
    [QuizStatus.PERFECT]: `Que isso, ${username} 🎉🎉 \n\nVocê acertou ${correctAnswers} de ${totalQuestions} respostas! \n\nVocê é a maior autoridade no assunto!`
  })

  return (
    getMessages(username, correctAnswers, totalQuestions)[status] ??
    `${username}, você acertou ${correctAnswers} de ${totalQuestions} respostas!`
  )
}
