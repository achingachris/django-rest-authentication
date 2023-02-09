import Head from 'next/head'
import Nav from './Nav'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>iTana</title>
      </Head>
      <Nav />
      <main>{children}</main>
    </>
  )
}

export default Layout
