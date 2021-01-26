import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 100vh;
`

export const BackgroundImage = styled.div<{ imageBg: string }>`
  ${({ theme, imageBg }) => css`
    background: ${theme.colors.mainBg};
    background-image: url(${imageBg});
    flex: 1;
    background-size: cover;
    padding-right: 50%;
    padding-top: 6rem;

    @media screen and (max-width: 800px) {
      padding-right: 6%;
      padding-left: 6%;
      background-image: none;

      &:after {
        content: '';
        background-size: cover;
        background-position: center;
        background-image: linear-gradient(transparent, ${theme.colors.mainBg}),
          url(${imageBg});
        display: block;
        width: 100%;
        height: 14rem;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1;
      }
      *:first-child {
        position: relative;
        z-index: 10;
      }
    }
  `}
`
