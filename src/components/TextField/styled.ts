import styled, { css } from 'styled-components'

export const Container = styled.input`
  ${({ theme }) =>
    css`
      width: 100%;
      height: auto;
      background: ${theme.colors.mainBg};
      border-radius: ${theme.borderRadius};
      color: ${theme.colors.contrastText};
      border: 1px solid #f3fae14a;
      padding: 8px 10px;
      font-size: 0.95rem;

      &::placeholder {
        color: ${theme.colors.contrastText};
      }

      &:focus {
        border: 1px solid ${theme.colors.primary};
      }
    `}
`
