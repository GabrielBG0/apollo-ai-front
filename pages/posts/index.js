import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import qs from 'qs'
import Header from '../../src/components/Header'
import styles from '../../styles/pages/posts/Posts.module.scss'
import Footer from '../../src/components/Footer'
import api from '../../src/services/api'

export default function Posts(props) {
  const { error, success, posts: initialPosts } = props || {};
  const [posts, setPosts] = useState(initialPosts);

  useEffect(() => {
    setPosts(initialPosts);
  }, [initialPosts]);
  return (
    <>
      <Head>
        <title>Posts | Apollo AI</title>
      </Head>
      <Header />
      <div className="content">
        <div className='pageTitle'>
          <h1>Posts</h1>
        </div>
        <div className={styles.postsGrid}>
          {posts.data.map(item => (
            <Link key={item.id} href={`/posts/${item.id}`} passHref>
              <div className={styles.postItem}>
                <div className={styles.postTitle}>
                  <h3>{item.attributes.Title}</h3>
                  <p>{item.attributes.Writer}</p>
                </div>
                <div className={styles.postContent}>
                  <p>{item.attributes.Sub}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}

export async function getServerSideProps(ctx) {
  const query = qs.stringify({
    sort: ['id:desc']
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