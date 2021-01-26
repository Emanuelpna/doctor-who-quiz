import styled from 'styled-components'

// Cortesia: https://www.joshwcomeau.com/react/modern-spacer-gif/

export type SpacerProps = {
  axis?: 'horizontal' | 'vertical'
  size: 2 | 4 | 8 | 12 | 16 | 24 | 32
}

function getHeight({ axis, size }: SpacerProps) {
  return axis === 'horizontal' ? 1 : size
}
function getWidth({ axis, size }: SpacerProps) {
  return axis === 'vertical' ? 1 : size
}

export const Spacer = styled.span<SpacerProps>`
  display: block;
  width: ${getWidth}px;
  min-width: ${getWidth}px;
  height: ${getHeight}px;
  min-height: ${getHeight}px;
`
