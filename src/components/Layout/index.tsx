import GitHubCorner from 'components/GitHubCorner'
import ImageCopyright from 'components/ImageCopyright'

import { BackgroundCopyright } from 'types/Database'

import * as S from './styled'

type LayoutProps = {
  bgCopy?: BackgroundCopyright
  imageBg: string
  projectUrl?: string
  children: React.ReactNode
}

const Layout = ({
  imageBg,
  children,
  bgCopy,
  projectUrl = 'https://github.com/Emanuelpna/doctor-who-quiz'
}: LayoutProps) => (
  <S.Container>
    <S.BackgroundImage imageBg={imageBg}>
      <S.ContentContainer>{children}</S.ContentContainer>
    </S.BackgroundImage>

    {!!bgCopy && <ImageCopyright copyName={bgCopy.name} copyUrl={bgCopy.url} />}

    <GitHubCorner projectUrl={projectUrl} />
  </S.Container>
)

export default Layout
