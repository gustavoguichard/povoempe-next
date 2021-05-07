import Document, { Html, Head, Main, NextScript } from 'next/document'

class MoedaDourada extends Document {
  render() {
    return (
      <Html className="max-w-screen" lang="pt-BR">
        <Head>
          <meta charSet="utf-8" />
          <link rel="shortcut icon" type="image/x-icon" href="/favicon.png" />
        </Head>
        <body className="w-screen overflow-x-hidden antialiased text-xl flex flex-col items-center justify-center">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MoedaDourada
