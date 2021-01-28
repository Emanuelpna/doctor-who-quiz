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
    [QuizStatus.BAD]: {
      title: `Não foi dessa vez, ${username} 😢 `,
      correctCount: `Você acertou ${correctAnswers} de ${totalQuestions} respostas!`,
      cheerUp: `Mas tenho certeza que você consegue!`
    },
    [QuizStatus.GOOD]: {
      title: `Mandou bem, ${username} 🙂 `,
      correctCount: `Você acertou ${correctAnswers} de ${totalQuestions} respostas!`,
      cheerUp: `Ainda tem muito conhecimento te esperando, não desista!`
    },
    [QuizStatus.EXCELENT]: {
      title: `Parabéns, ${username} 🥳 `,
      correctCount: `Você acertou ${correctAnswers} de ${totalQuestions} respostas!`,
      cheerUp: `Você está quase virando um especialista!`
    },
    [QuizStatus.PERFECT]: {
      title: `Que isso, ${username} 🎉🎉 `,
      correctCount: `Você acertou ${correctAnswers} de ${totalQuestions} respostas!`,
      cheerUp: `Você é a maior autoridade no assunto!`
    }
  })

  return (
    getMessages(username, correctAnswers, totalQuestions)[status] ?? {
      title: `${username}`,
      correctCount: `Você acertou ${correctAnswers} de ${totalQuestions} respostas!`,
      cheerUp: ``
    }
  )
}
