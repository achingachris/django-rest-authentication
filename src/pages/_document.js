/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/google-font-display */
/* eslint-disable @next/next/no-css-tags */
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link href='/css/styles.css' rel='stylesheet' />
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/lity/2.4.0/lity.min.css'
        />
        <link rel='stylesheet' href='https://unpkg.com/aos@next/dist/aos.css' />
        <link rel='icon' type='image/x-icon' href='/assets/img/favicon.png' />
        <script
          data-search-pseudo-elements
          defer
          src='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/js/all.min.js'
          crossorigin='anonymous'
        ></script>
        <script
          async
          src='https://cdnjs.cloudflare.com/ajax/libs/feather-icons/4.24.1/feather.min.js'
          crossorigin='anonymous'
        ></script>
      </Head>
      <body id='page-top'>
        <Main />
        <NextScript />
        <script
          async
          src='https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js'
          crossorigin='anonymous'
        ></script>
        <script async src='/js/scripts.js'></script>
        <script
          async
          src='https://cdnjs.cloudflare.com/ajax/libs/lity/2.4.0/lity.min.js'
        ></script>
        {/* <script async src='https://unpkg.com/aos@next/dist/aos.js'></script> */}
        {/* <script async src='/js/aos.js'></script> */}
        
      </body>
    </Html>
  )
}
