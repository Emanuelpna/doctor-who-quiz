import * as S from './styled'

export type LoadingProps = {
  size?: 'small' | 'default'
}

const Loading = ({ size = 'default' }: LoadingProps) => (
  <S.Container
    size={size}
    aria-label="Carregando..."
    viewBox="0 0 60 60"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle fill="none" strokeLinecap="round" cx="30" cy="30" r="20" />
    <circle fill="none" strokeLinecap="round" cx="30" cy="30" r="20" />
    <circle fill="none" strokeLinecap="round" cx="30" cy="30" r="20" />
  </S.Container>
)

export default Loading
