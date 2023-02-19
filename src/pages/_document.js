/* eslint-disable @next/next/google-font-display */
/* eslint-disable @next/next/no-css-tags */
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        {/* Font Awesome icons (free version)*/}
        <script async src="https://use.fontawesome.com/releases/v6.1.0/js/all.js" crossorigin="anonymous"></script>
        {/* Google fonts*/}
        <link
          href='https://fonts.googleapis.com/css?family=Varela+Round'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i'
          rel='stylesheet'
        />
        {/* Core theme CSS (includes Bootstrap)*/}
        <link href='css/styles.css' rel='stylesheet' />
      </Head>
      <body id="page-top">
        <Main />
        <NextScript />

        {/*  JS*/}
        <script
          async
          src='https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js'
        ></script>
        {/* <!-- Core theme JS--> */}
        <script async src='js/scripts.js'></script>
      </body>
    </Html>
  )
}
