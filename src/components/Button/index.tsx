import { ButtonHTMLAttributes } from 'react'

import Loading from 'components/Loading'

import * as S from './styled'

type ButtonProps = {
  children: React.ReactNode
  disabled?: boolean
  isLoading?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({
  children,
  disabled = false,
  isLoading = false,
  ...props
}: ButtonProps) => (
  <S.Container disabled={disabled} isLoading={isLoading} {...props}>
    {isLoading && <Loading size="small" />}

    {!isLoading && children}
  </S.Container>
)

export default Button
