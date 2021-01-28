import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    height: 100vh;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    background: ${theme.colors.mainBg};

    @media screen and (max-width: 800px) {
      height: 100%;
    }
  `}
`

export const BackgroundImage = styled.div<{ imageBg: string }>`
  ${({ theme, imageBg }) => css`
    flex: 1;
    height: 100%;
    padding-top: 4rem;
    padding-right: 50%;
    background-size: cover;
    background-image: url(${imageBg});

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

export const ContentContainer = styled.section`
  flex: 1;
  margin: auto;
  max-width: 24rem;
`
