import Head from 'next/head'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import styles from '../styles/pages/Home.module.scss'
import api from '../src/services/api'
import { useState, useEffect } from 'react'
import Link from 'next/link';
import qs from 'qs'
export default function Home(props) {
  const { error, success, posts: initialPosts } = props || {};
  const [posts, setPosts] = useState(initialPosts);

  useEffect(() => {
    setPosts(initialPosts);
  }, [initialPosts]);

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
        <div className={styles.title}>
          <h2>Music With Machine Learning</h2>
          <p>Trying to create algorithms to write popular, quality and fun to listem music</p>
        </div>
        <div className={styles.posts}>
          <h2>News About The Project</h2>
          <div className={styles.newsGrid}>
            {posts.data.map(item => (
              <Link key={item.id} href={`/posts/${item.id}`} passHref>
                <div className={styles.newsItem}>
                  <div className={styles.newsTitle}>
                    <h3>{item.attributes.Title}</h3>
                    <p>{item.attributes.Writer}</p>
                  </div>
                  <div className={styles.newsContent}>
                    <p>{item.attributes.Sub}</p>
                    <div className={styles.newsCategory}>
                      <p>{item.attributes.Category}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export async function getServerSideProps(ctx) {

  const query = qs.stringify({
    sort: ['id:desc'],
    pagination: {
      page: 1,
      pageSize: 6
    }
  })

  try {
    const response = await api.get(`/posts?${query}`);
    return {
      props: {
        success: true,
        posts: response.data
      }
    }
  } catch (error) {
    return {
      props: {
        success: false,
        error: error?.message || "fantching posts has faild",
        posts: null,
      }
    }
  }
}
