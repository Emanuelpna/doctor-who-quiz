import { useRouter } from 'next/router'

import { Spacer } from 'components/Spacer'
import ChevronLeftIcon from 'components/ChevronLeft'

import * as S from './styled'

type WidgetProps = {
  children: React.ReactNode
  title?: string
  enableBackButton?: boolean
}

const Widget = ({ title, children, enableBackButton = false }: WidgetProps) => {
  const router = useRouter()

  const backOnePage = () => router.back()

  return (
    <S.Container>
      {!!title && (
        <S.TitleContainer>
          {enableBackButton && (
            <>
              <S.IconContainer onClick={backOnePage}>
                <ChevronLeftIcon />
              </S.IconContainer>
              <Spacer size={12} />
            </>
          )}

          <S.Title>{title}</S.Title>
        </S.TitleContainer>
      )}

      <S.Content>{children}</S.Content>
    </S.Container>
  )
}

export default Widget
