import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) =>
    css`
      height: auto;
      max-width: 26rem;
      margin: 2rem auto;
      background: ${theme.colors.mainBg};
      border-radius: ${theme.borderRadius};
      color: ${theme.colors.contrastText};
      border: 1px solid ${theme.colors.primary};

      & h2,
      & h3 {
        margin-bottom: 1rem;
      }
    `}
`

export const Title = styled.h1`
  ${({ theme }) =>
    css`
      width: 100%;
      height: auto;
      line-height: 1;
      cursor: pointer;
      font-weight: 700;
      margin-bottom: 0;
      padding: 16px 32px;
      font-size: 1.1rem;
      letter-spacing: 1px;
      background: ${theme.colors.primary};
    `}
`

export const Content = styled.div`
  line-height: 1;
  font-weight: 400;
  font-size: 0.95rem;
  padding: 24px 32px 32px 32px;
`
