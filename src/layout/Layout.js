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
      <footer className='footer bg-black small text-center text-white-50'>
        <div className='container px-4 px-lg-5'>
          Copyright © Your Website 2022
        </div>
      </footer>
    </>
  )
}

export default Layout
