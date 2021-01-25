import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import { AppProps } from 'next/dist/next-server/lib/router/router'

import db from '../../db.json'

import { GlobalStyles } from 'styles/global'

const theme = db.theme

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Doctor Who Quiz</title>
        <meta
          name="description"
          content="Teste seus conhecimentos na série Doctor Who"
        />

        <meta property="og:image" content={db.bg} />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <GlobalStyles />

      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
