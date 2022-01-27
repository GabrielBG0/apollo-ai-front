import Head from 'next/head'
import Header from '../src/components/Header'
import Footer from "../src/components/Footer"
export default function Progress() {
  return (
    <>
      <Head>
        <title>Progress | Apollo AI</title>
      </Head>
      <Header />
      <div className="content">
        Progress
      </div>
      <Footer />
    </>
  )
}