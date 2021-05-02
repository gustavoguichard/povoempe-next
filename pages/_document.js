import Document, { Html, Head, Main, NextScript } from 'next/document'

class MoedaDourada extends Document {
  render() {
    return (
      <Html className="max-w-screen" lang="pt-BR">
        <Head>
          <meta charSet="utf-8" />
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href="/static/favicon.png"
          />
        </Head>
        <body className="w-screen overflow-x-hidden antialiased text-xl text-gray-900 flex flex-col items-center justify-center border-green-700 border-b-8 pb-12">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MoedaDourada
