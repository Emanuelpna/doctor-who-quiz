import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import db from '../../../db.json'

import Layout from 'components/Layout'
import Quiz from 'templates/Quiz'

export default function QuizesDaGalera() {
  const router = useRouter()

  const [questions, setQuestions] = useState([])

  const { quizID } = router.query

  const translateID = (quizID: string) => {
    return quizID.replace('__', '.')
  }

  useEffect(() => {
    const mountURL = (quizID: string) => {
      return `https://${translateID(quizID)}.vercel.app`
    }

    const getExternalQuestions = async () => {
      try {
        const response = await fetch(`${mountURL(quizID as string)}/api/db`)

        const externalDatabase = await response.json()

        setQuestions(externalDatabase.questions)
      } catch (error) {
        alert('Esse repositório não expõem as questões na API')
        router.push('/')
      }
    }

    getExternalQuestions()
  }, [quizID, router])

  return (
    <Layout imageBg={db.bg} bgCopy={db['bg-copy']}>
      <Quiz questions={questions} />
    </Layout>
  )
}
