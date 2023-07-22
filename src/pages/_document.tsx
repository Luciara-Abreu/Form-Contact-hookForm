import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" style={{margin: 0, padding: 0,  width: '101%'}}>
      <Head />
      <body style={{width: '150', margin: 0, padding: 0}}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
