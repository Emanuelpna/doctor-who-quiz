import * as S from './styled'

type WidgetProps = {
  children: React.ReactNode
  title?: string
}

const Widget = ({ title, children }: WidgetProps) => (
  <S.Container>
    {!!title && <S.Title>{title}</S.Title>}

    <S.Content>{children}</S.Content>
  </S.Container>
)

export default Widget
