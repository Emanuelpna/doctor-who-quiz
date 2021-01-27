import styled, { css } from 'styled-components'

import { LoadingProps } from '.'

export const Container = styled.svg<LoadingProps>`
  ${({ theme, size }) => css`
    width: 60px;
    height: 60px;

    & circle {
      stroke-width: 6px;
      stroke: ${theme.colors.contrastText};
      shape-rendering: geometricPrecision;
    }

    ${size === 'small' &&
    css`
      width: 30px;
      height: 30px;

      & circle {
        stroke-width: 8px;
      }
    `}

    & circle {
      stroke-dashoffset: 0;
      stroke-dasharray: 150px;
      animation: strokeSpin 5s linear reverse infinite;
    }

    & circle:nth-of-type(2) {
      stroke: ${theme.colors.secondary};
      stroke-dashoffset: 0;
      stroke-dasharray: 150px;
      animation: strokeSpin 3s linear reverse infinite;
    }

    @keyframes strokeSpin {
      0% {
        stroke-dashoffset: 0;
      }
      50% {
        stroke-dashoffset: 150px;
      }
      50.01% {
        stroke-dashoffset: -150px;
      }
      100% {
      }
    }
  `}
`
