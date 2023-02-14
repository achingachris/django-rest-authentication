import Head from 'next/head'
import Footer from './Footer'
import Nav from './Nav'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>iTana</title>
      </Head>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
