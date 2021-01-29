import { useRouter } from 'next/router'

import { Spacer } from 'components/Spacer'
import ChevronLeftIcon from 'components/ChevronLeft'

import * as S from './styled'

type WidgetProps = {
  children: React.ReactNode
  title?: string
  delay?: number
  enableBackButton?: boolean
  cover?: string | null
}

const Widget = ({
  title,
  cover,
  children,
  delay = 0,
  enableBackButton = false
}: WidgetProps) => {
  const router = useRouter()

  const backOnePage = () => router.back()

  return (
    <S.Container
      variants={{
        show: { opacity: 1, y: '0' },
        hidden: { opacity: 0, y: '20%' }
      }}
      initial="hidden"
      animate="show"
      transition={{ duration: 0.3, delay }}
    >
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

      {!!cover && <S.Image src={cover} />}

      <S.Content>{children}</S.Content>
    </S.Container>
  )
}

export default Widget
