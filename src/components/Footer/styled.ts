import styled, { css } from 'styled-components'

export const Container = styled.footer`
  ${({ theme }) => css`
    padding: 20px;
    display: flex;
    justify-content: space-around;
    border-radius: 4px;
    align-items: center;
    background-color: #00000070;
    color: ${theme.colors.contrastText};

    img {
      width: 58px;
    }

    p {
      max-width: 27ch;
    }

    @media screen and (max-width: 800px) {
      p {
        max-width: 20ch;
      }
    }

    a {
      text-decoration: none;
      color: ${theme.colors.secondary};
      transition: 150ms ease-in-out;

      &:hover,
      &:focus {
        opacity: 0.8;
      }

      span {
        text-decoration: underline;
      }
    }
  `}
`
