import { useEffect } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'
import '@/styles/globals.css'
import Layout from '@/layout/Layout'

export default function App({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap')
  }, [])

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
