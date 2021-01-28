import {} from 'styled-components'

import db from './db.json'

const theme = db.theme

declare module 'styled-components' {
  type Theme = typeof theme
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
