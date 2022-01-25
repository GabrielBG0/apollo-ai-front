import Head from 'next/head'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import styles from '../styles/pages/Home.module.scss'
export default function Home() {
  return (
    <>
      <Head>
        <title>Apollo AI - Music With Machine Learning</title>
        <meta name="description" content="Apollo AI, writing music with machine learning" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <div className="content">
        Home content
      </div>
      <Footer />
    </>
  )
}
