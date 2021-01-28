import styled, { css } from 'styled-components'

export const Container = styled.span`
  ${({ theme }) =>
    css`
      position: fixed;
      right: 0;
      bottom: 0;
      height: auto;
      cursor: pointer;
      padding: 8px 12px;
      width: fit-content;
      background: ${theme.colors.secondary};
      border-top-left-radius: ${theme.borderRadius};

      & a {
        text-decoration: none;
        color: ${theme.colors.contrastText};
      }

      & a::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }

      @media screen and (max-width: 800px) {
        position: relative;
        width: 80%;
        text-align: center;
        margin: 2rem 0;
        border-radius: ${theme.borderRadius};
      }
    `}
`
