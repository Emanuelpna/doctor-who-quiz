import * as S from './styled'

type LayoutProps = {
  imageBg: string
  children: React.ReactNode
}

const Layout = ({ imageBg, children }: LayoutProps) => (
  <S.Container>
    <S.BackgroundImage imageBg={imageBg}>{children}</S.BackgroundImage>
  </S.Container>
)

export default Layout
