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
        <div className='pageTitle'>
          <h1>About Apollo AI</h1>
        </div>
        <div className={styles.aboutContent}>
          <p>Apollo AI is A project that is trying to make an algorithm that can write music, just like humans can. For this we will try to use a different approach from the usual.<br /></p>
          <p>One of the most common methods to generate music is to train the algorithm to create audio files such as wav or mp4. This method feeds audio files to the algorithm for it to train and it generates new ones based on it’s training set.<br /></p>
          <p>The problems with this approach are that the resulting files are usually uncanny, evoking a feeling similar to what computer generated faces would do some years ago, or, that the music complexity is so low that the song could have been made by a child. These problems hint at a fault with the training processes, as the saying goes garbage in garbage out, and that’s where our hypothesis enters.</p>
          <p>Using audio files may be problematic because it carries much more than just the music itself. Modern day music is usually full of sound effects, multiple timbres on the same rhythm, melodic or harmonic role and a lot of instruments. Layering, voice distortion, side-chain compression and a lot more effects are used on the final music projects, but they do not alter the underline music itself, just how it sounds. An acoustic version of a song, for example, is still the original song, but with different timbers, sometimes tempo and different effects.<br /></p>
          <p>With that in mind, the approach we chose to take is to strip down the song to its core components by using the ABC Notation. This type of notation is perfect for our use case because it represents only the music, just like sheet music would and it is composed only by ASCII characters which allow us to use “off the shelves” algorithms used in NLP for example<br /></p>
          <p>The goal is to make an algorithm that can create more complex music that later a human musician could build upon and use it to help on its creative processes. The end goal isn’t to replace humans, but to help musicians create the best music they can, in the same way AI is helping digital artists do visual effects.<br /></p>
          <p>Apollo is, at the moment, in its earliest phase, compiling a training dataset. If the goal is to write pop music we need pop music to be on our data sets, the problem is that pop music isn’t written in ABC Notation so, a long process of transcribing songs needs to be done. The Apollo team is composed of only one person, so that processes will take a lot of time, but in the meanwhile tests using existing ABC Notation databases will be conducted and all the results will be published here.<br /></p>
        </div>
      </div>
      <Footer />
    </>
  )
}