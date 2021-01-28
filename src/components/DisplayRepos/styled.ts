import styled, { css } from 'styled-components'

import { Display } from 'components/Display'

export const Repo = styled(Display)`
  ${({ theme }) => css`
    &:hover {
      background: ${theme.colors.primary}3D;
    }

    & a {
      text-decoration: none;
      color: ${theme.colors.contrastText};
    }
  `}
`
