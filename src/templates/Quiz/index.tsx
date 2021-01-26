import { useRouter } from 'next/router'

import Button from 'components/Button'
import Widget from 'components/Widget'
import Footer from 'components/Footer'
import QuizLogo from 'components/QuizLogo'
import { Spacer } from 'components/Spacer'

export type QuizProps = {
  title: string
}

const Quiz = ({ title }: QuizProps) => {
  const router = useRouter()

  return (
    <>
      <QuizLogo />

      <Spacer size={24} />

      <Widget enableBackButton title={title}>
        <h3>Tudo pronto pra começarmos, {router.query.name}</h3>
        <Spacer size={24} />
        <Button disabled={true}>Confirmar</Button>
      </Widget>

      <Spacer size={24} />

      <Footer />
    </>
  )
}

export default Quiz
