import Head from 'next/head'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import styles from '../styles/pages/Home.module.scss'
import api from '../src/services/api'
import { useState, useEffect } from 'react'
import Link from 'next/link';
import qs from 'qs'
export default function Home(props) {
  const [posts, setPosts] = useState();

  async function getPosts() {
    const query = qs.stringify({
      sort: ['id:desc'],
      pagination: {
        page: 1,
        pageSize: 6
      }
    })
    const response = await api.get(`/posts?${query}`);
    setPosts(response.data);
  }

  useEffect(() => {
    getPosts();
  }, [posts]);

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
            {posts.data.map(item => {
              const date = new Date(item.attributes.createdAt);
              return (
                <Link key={item.id} href={`/posts/${item.id}`} passHref>
                  <div className={styles.newsItem}>
                    <div className={styles.newsTitle}>
                      <h3>{item.attributes.Title}</h3>
                      <p>{item.attributes.Writer}</p>
                    </div>
                    <div className={styles.newsContent}>
                      <p>{item.attributes.Sub}</p>
                      <p>{date.toLocaleString('en-US', {
                        day: 'numeric',
                        year: 'numeric',
                        month: 'long',
                      })}</p>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}