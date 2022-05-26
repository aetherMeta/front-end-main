import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document';
import React from 'react'

export default class document extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render(): React.ReactElement {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <title>Aether Meta</title>
          <meta name="description" content="Bringing luxury shopping to new heights" />
          <link rel="icon" href="/static/images/favicon.svg" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="msapplication-TileColor" content="#ffc40d" />
          {/* make TileColor the main purple from design */}
          <meta name="theme-color" content="#000000" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>

    )
  } 
} 
