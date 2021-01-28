import { useEffect, useState } from 'react'

import db from '../../db.json'

import Layout from 'components/Layout'
import Quiz from 'templates/Quiz'

export default function Home() {
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    const getMyQuestions = async () => {
      const response = await fetch('/api/db')

      const myDatabase = await response.json()

      setQuestions(myDatabase.questions)
    }

    getMyQuestions()
  }, [])

  return (
    <Layout imageBg={db.bg} bgCopy={db['bg-copy']}>
      <Quiz questions={questions} />
    </Layout>
  )
}
