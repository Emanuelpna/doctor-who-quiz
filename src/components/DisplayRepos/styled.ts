import styled, { css } from 'styled-components'

import { Display } from 'components/Display'

export const Repo = styled(Display)`
  ${({ theme }) => css`
    position: relative;

    & a,
    & span {
      text-decoration: none;
      color: ${theme.colors.contrastText};
    }

    & a::after,
    & span::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
  `}
`
