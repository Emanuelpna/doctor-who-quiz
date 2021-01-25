import * as S from './styled'

type ImageCopyrightProps = {
  copyUrl: string
  copyName: string
}

const ImageCopyright = ({ copyUrl, copyName }: ImageCopyrightProps) => (
  <S.Container>
    <a target="_blank" rel="noreferrer noopener" href={copyUrl}>
      Imagem por: {copyName} &#8599;
    </a>
  </S.Container>
)

export default ImageCopyright
