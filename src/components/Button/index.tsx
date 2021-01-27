import { ButtonHTMLAttributes } from 'react'

import * as S from './styled'

type ButtonProps = {
  children: React.ReactNode
  disabled?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ children, disabled = false, ...props }: ButtonProps) => (
  <S.Container disabled={disabled} {...props}>
    {children}
  </S.Container>
)

export default Button
