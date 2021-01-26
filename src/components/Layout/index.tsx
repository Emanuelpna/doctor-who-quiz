import GitHubCorner from 'components/GitHubCorner'
import ImageCopyright from 'components/ImageCopyright'

import * as S from './styled'

type LayoutProps = {
  bgCopy?: {
    name: string
    url: string
  }
  imageBg: string
  children: React.ReactNode
}

const Layout = ({ imageBg, children, bgCopy }: LayoutProps) => (
  <S.Container>
    <S.BackgroundImage imageBg={imageBg}>
      <S.ContentContainer>{children}</S.ContentContainer>
    </S.BackgroundImage>

    {!!bgCopy && <ImageCopyright copyName={bgCopy.name} copyUrl={bgCopy.url} />}

    <GitHubCorner projectUrl="https://github.com/Emanuelpna/doctor-who-quiz" />
  </S.Container>
)

export default Layout
