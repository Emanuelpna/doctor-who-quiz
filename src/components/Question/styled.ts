import styled, { css } from 'styled-components'

export const Container = styled.div`
  height: auto;
  width: 100%;
  margin: 0 auto;
`

export const Title = styled.h3`
  line-height: 1;
  font-weight: 700;
  margin-bottom: 0;
  font-size: 1.1rem;
  letter-spacing: 1px;
`

export const Description = styled.small`
  line-height: 1;
  font-weight: 400;
  font-size: 0.9rem;
  letter-spacing: 1px;
`

export const Form = styled.form``

export const AlternativesContainer = styled.ul`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
`

export const Alternatives = styled.li<{
  isSelected: boolean
  isCorrect: boolean
  isWrong: boolean
}>`
  ${({ theme, isSelected, isCorrect, isWrong }) =>
    css`
      padding: 0.8rem;
      cursor: pointer;
      list-style: none;
      margin-bottom: 0.8rem;
      color: ${theme.colors.contrastText};
      border-radius: ${theme.borderRadius};
      border: 1px solid ${theme.colors.primary};

      & > input {
        display: none;
      }

      & > label {
        cursor: pointer;
      }

      ${isSelected &&
      css`
        background: ${theme.colors.primary};
      `}

      ${isCorrect &&
      css`
        border-color: ${theme.colors.success};
        background: ${theme.colors.success};
      `}

      ${isWrong &&
      css`
        border-color: ${theme.colors.wrong};
        background: ${theme.colors.wrong};
      `}
    `}
`
