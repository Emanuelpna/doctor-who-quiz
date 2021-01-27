import styled, { css } from 'styled-components'

import { LoadingProps } from '.'

export const Container = styled.div`
  margin: auto;
  text-align: center;

  & span {
    display: block;
  }
`

export const Icon = styled.svg<LoadingProps>`
  ${({ theme, size }) => css`
    width: 50px;
    height: 50px;

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
      stroke-dasharray: 150px;
      stroke-dashoffset: 80px;
      transform-origin: 50% 50%;
      animation: strokeSpin 1.5s linear reverse infinite;
    }

    @keyframes strokeSpin {
      0% {
        transform: rotate(0deg);
      }

      100% {
        transform: rotate(360deg);
      }
    }
  `}
`
