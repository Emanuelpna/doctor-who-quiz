import styled, { css } from 'styled-components'

import { Display } from 'components/Display'

export const Repo = styled(Display)`
  ${({ theme }) => css`
    & a {
      text-decoration: none;
      color: ${theme.colors.contrastText};
    }
  `}
`
