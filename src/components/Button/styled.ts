import styled, { css } from 'styled-components'

export const Container = styled.button`
  ${({ theme }) =>
    css`
      border: none;
      color: ${theme.colors.contrastText};
      border-radius: ${theme.borderRadius};
      background: ${theme.colors.secondary};
      width: 100%;
      padding: 8px;
      font-size: 1rem;
      text-transform: uppercase;
      letter-spacing: 1px;
      box-shadow: 0 6px 12px #0e0a1ca3;
      cursor: pointer;
      transition: 150ms ease-in-out;

      &:hover:not(:disabled) {
        filter: brightness(1.1);
      }

      &:disabled {
        cursor: not-allowed;
        background: #52534f;
      }

      & a {
        text-decoration: none;
        color: ${theme.colors.contrastText};
      }

      &:disabled a {
        pointer-events: none;
      }
    `}
`
