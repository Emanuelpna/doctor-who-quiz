import * as S from './styled'

type ButtonProps = {
  children: React.ReactNode
  disabled?: boolean
}

const Button = ({ children, disabled = false }: ButtonProps) => (
  <S.Container disabled={disabled}>{children}</S.Container>
)

export default Button
