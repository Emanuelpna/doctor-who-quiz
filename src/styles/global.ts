import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin:0;
    padding: 0;
    box-sizing: border-box;
  }

  body, button {
    font-family: 'Heebo', sans-serif;
  }


  ${({ theme }) => css`
    body {
      display: flex;
      height: 100%;
      background: ${theme.colors.mainBg};
    }
  `}

  #__next {
    flex: 1;
    height: 100%;
  }
`
