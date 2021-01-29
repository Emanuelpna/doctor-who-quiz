import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

import { AnswerStatusProps } from '.'

export const Container = styled(motion.div)<AnswerStatusProps>`
  ${({ theme, isCorrect }) => css`
    width: 45px;
    height: 45px;
    margin: auto;
    padding: 8px;
    border-radius: 45px;

    ${isCorrect &&
    css`
      box-shadow: 0 0 0 4px ${theme.colors.success}66;
      background: ${theme.colors.success};
    `}

    ${!isCorrect &&
    css`
      box-shadow: 0 0 0 4px ${theme.colors.wrong}66;
      background: ${theme.colors.wrong};
    `}
  `}
`
