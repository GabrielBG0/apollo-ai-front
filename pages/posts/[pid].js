import Head from 'next/head'
import Header from '../../src/components/Header'
import Footer from '../../src/components/Footer'
import isPositiveInteger from '../../src/lib/isPositiveInteger'
import api from '../../src/services/api'
import { useState, useEffect } from 'react'
export default function Post(props) {
  const { error, success, post: initialPost } = props || {};

  const [post, setPost] = useState(initialPost.data);

  useEffect(() => {
    setPost(initialPost.data);
  }, [initialPost]);
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
        <h1>{post.attributes.Title}</h1>
        <p>{post.attributes.Body}</p>
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
