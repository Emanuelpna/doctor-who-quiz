import styled, { css } from 'styled-components'

export const Display = styled.li`
  ${({ theme }) => css`
    padding: 0.8rem;
    cursor: pointer;
    list-style: none;
    margin-bottom: 0.8rem;
    color: ${theme.colors.contrastText};
    border-radius: ${theme.borderRadius};
    border: 1px solid ${theme.colors.primary};

    &:last-of-type {
      margin-bottom: 0;
    }

    &:hover {
      background: ${theme.colors.primary}3D;
    }
  `}
`
