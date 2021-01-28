import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import { AppProps } from 'next/dist/next-server/lib/router/router'

import db from '../../db.json'

import { GlobalStyles } from 'styles/global'

const theme = db.theme

function App({ Component, pageProps }: AppProps) {
  let url = ''
  if (typeof window !== 'undefined') url = window.location.href ?? ''

  return (
    <ThemeProvider theme={theme}>
      <Head>
        {/* Primary Meta Tags */}
        <title>{db.title}</title>
        <meta name="title" content={db.title} />
        <meta name="description" content={db.description} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={db.title} />
        <meta property="og:description" content={db.description} />
        <meta property="og:image" content={db.bg} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={url} />
        <meta property="twitter:title" content={db.title} />
        <meta property="twitter:description" content={db.description} />
        <meta property="twitter:image" content={db.bg} />

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
