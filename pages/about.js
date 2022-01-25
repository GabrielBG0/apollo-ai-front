import Header from "../src/components/Header";
import Head from 'next/head'
export default function About() {
  return (
    <>
      <Head>
        <title>About | Apollo AI</title>
      </Head>
      <Header />
      <div className="content">
        About
      </div>
    </>
  )
}