import Head from 'next/head'
import Header from '../../src/components/Header'

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Apollo AI</title>
      </Head>
      <Header />
      <div className="content">
        Posts
      </div>
    </>
  )
}