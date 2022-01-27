import Head from 'next/head'
import Header from "../src/components/Header"
import Footer from "../src/components/Footer"
import styles from '../styles/pages/About.module.scss'
export default function About() {
  return (
    <>
      <Head>
        <title>About | Apollo AI</title>
      </Head>
      <Header />
      <div className="content">
        <div className={styles.aboutTitle}>
          <h1>About Apollo AI</h1>
        </div>
        <div className={styles.aboutContent}>
          <p>Apollo AI is blablbablkjsb\dvjbsçd \bvpdoabspo bvpaobvkbakv a bvapsibvp aivsbp</p>
        </div>
      </div>
      <Footer />
    </>
  )
}