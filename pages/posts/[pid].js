import Head from 'next/head'
import Header from '../../src/components/Header'
import Footer from '../../src/components/Footer'
import isPositiveInteger from '../../src/lib/isPositiveInteger'
import api from '../../src/services/api'
import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import styles from '../../styles/pages/posts/Post.module.scss'
import remarkGfm from 'remark-gfm'
export default function Post(props) {
  const { error, success, post: initialPost } = props || {};

  const [post, setPost] = useState(initialPost.data);

  const date = new Date(post.attributes.createdAt);


  useEffect(() => {
    setPost(initialPost.data);
  }, [initialPost]);
  return (
    <>
      <Head>
        <title>{post.attributes.Title} | Apollo AI</title>
      </Head>
      <Header />
      <div className="content">
        <div className='pageTitle'>
          <h1>{post.attributes.Title}</h1>
        </div>
        <div className={styles.postWriter}>
          <p>{post.attributes.Writer}</p>
          <p>{date.toLocaleString('en-US', {
            weekday: 'short',
            day: 'numeric',
            year: 'numeric',
            month: 'long',
          })}</p>
        </div>
        <ReactMarkdown className={styles.postContent} remarkPlugins={[remarkGfm]}>
          {post.attributes.Body}
        </ReactMarkdown>
      </div>
      <Footer />
    </>
  )
}


export async function getServerSideProps(ctx) {
  const {
    params
  } = ctx;

  const {
    pid
  } = params || {};

  if (pid && isPositiveInteger(pid)) {
    try {
      const response = await api.get(`/posts/${pid}`);
      return {
        props: {
          success: true,
          post: response.data
        }
      }
    } catch (error) {
      return {
        props: {
          success: false,
          error: error?.message || "fantching posts has faild",
          post: null,
        }
      }
    }
  }


  return {
    props: {
      success: false,
      error: "Invalid post id",
      posts: null,
    }
  }
}
