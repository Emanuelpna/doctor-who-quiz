import { motion } from 'framer-motion'

import * as S from './styled'

export type AnswerStatusProps = {
  isCorrect: boolean
}

const AnswerStatus = ({ isCorrect }: AnswerStatusProps) => (
  <S.Container
    variants={{
      spin: {
        rotate: ['0deg', '-360deg'],
        scale: [0.8, 1],
        opacity: [0, 1]
      },
      base: { rotate: '0deg', scale: 0.5, opacity: 0 }
    }}
    transition={{ ease: 'easeInOut' }}
    initial="base"
    animate="spin"
    isCorrect={isCorrect}
  >
    {isCorrect && <CorrectAnswerIcon />}
    {!isCorrect && <WrongAnswerIcon />}
  </S.Container>
)

const iconMotionVariants = {
  hidden: {
    pathLength: 0
  },
  visible: {
    pathLength: 1
  }
}

function CorrectAnswerIcon() {
  return (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        variants={iconMotionVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1.5 }}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
      />
    </svg>
  )
}

function WrongAnswerIcon() {
  return (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        variants={iconMotionVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 2 }}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
      />
    </svg>
  )
}

export default AnswerStatus
