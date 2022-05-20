import { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

export default function Document() {
  // const [_document, setDocument] = React.useState(null)

  // React.useEffect(() => {
  //     setDocument(document)
  // }, [])

  return (
    <Html>
      <Head>
            <meta charSet="utf-8" />
            <link rel="icon" href="%PUBLIC_URL%/images/favicon.svg" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />
            <meta
            name="description"
            content="Bringing luxury shopping to new heights"
            />
            <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
            <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
} 
