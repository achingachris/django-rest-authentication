import Head from 'next/head'
import Header from '@/components/Header'
import Programs from '@/components/Programs'
import Projects from '@/components/Projects'
import About from '@/components/About'
import ProjectsModal from '@/components/ProjectsModal'

const Home = () => {
  return (
    <>
      <Head>
        <title>iTana</title>
      </Head>
      <Header />
      <Programs />
      <Projects />
      <About />
      <ProjectsModal />
    </>
  )
}

export default Home
