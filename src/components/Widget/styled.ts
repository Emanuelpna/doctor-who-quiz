import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) =>
    css`
      height: auto;
      width: 100%;
      margin: 0 auto;
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

export const TitleContainer = styled.div`
  ${({ theme }) =>
    css`
      display: flex;
      align-items: center;
      width: 100%;
      height: auto;
      font-weight: 700;
      padding: 16px 32px;
      background: ${theme.colors.primary};
    `}
`

export const Title = styled.h1`
  line-height: 1;
  font-weight: 700;
  margin-bottom: 0;
  font-size: 1.1rem;
  letter-spacing: 1px;
`

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 4px;
  cursor: pointer;
  transition: 150ms ease-in-out;

  &:hover,
  &:focus {
    background: #b39cf980;
  }

  & svg {
    margin: 1px;
  }

  & svg path {
    stroke-width: 3;
  }
`

export const Image = styled.img`
  width: 100%;
  height: 10rem;
  object-fit: cover;
  object-position: top;
`

export const Content = styled.div`
  line-height: 1;
  font-weight: 400;
  font-size: 0.95rem;
  padding: 24px 32px 32px 32px;
`
