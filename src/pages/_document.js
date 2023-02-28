/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/google-font-display */
/* eslint-disable @next/next/no-css-tags */
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <script
          src='https://use.fontawesome.com/releases/v6.1.0/js/all.js'
          crossorigin='anonymous'
        ></script>
        {/* <!-- Google fonts--> */}
        <link
          href='https://fonts.googleapis.com/css?family=Montserrat:400,700'
          rel='stylesheet'
          type='text/css'
        />
        <link
          href='https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700'
          rel='stylesheet'
          type='text/css'
        />
        {/* <!-- Core theme CSS (includes Bootstrap)--> */}
        <link href='/css/styles.css' rel='stylesheet' />
      </Head>
      <body id='page-top'>
        <Main />
        <NextScript />
        {/* <!-- Bootstrap core JS--> */}
        <script
          async
          src='https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js'
        ></script>
        {/* <!-- Core theme JS--> */}
        <script async src='/js/scripts.js'></script>
        {/* <!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *-->
    <!-- * *                               SB Forms JS                               * *-->
    <!-- * * Activate your form at https://startbootstrap.com/solution/contact-forms * *-->
    <!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *--> */}
        <script src='https://cdn.startbootstrap.com/sb-forms-latest.js'></script>
      </body>
    </Html>
  )
}
