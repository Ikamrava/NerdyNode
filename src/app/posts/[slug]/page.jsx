import React from 'react'
import styles from './singlePage.module.css'
import Menu from '@/component/menu/Menu'
import Image from 'next/image'
import Comments from '@/app/comments/Comments';
// import Comments from '../comments/Comments'


const getData = async (slug) => {
  const res = await fetch(
    `http://localhost:3000/api/posts/slug`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

async function SinglePage({params}) {
  const { slug } = params
  const {post} = await getData(slug)

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1>Not a Lorem Ipsum whatsoever, but your Lorem Ipsum!</h1>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt={''}  fill className={styles.image}/>
        </div>
        
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <h3>What is Lorem Ipsum?</h3>
          <div className={styles.description} dangerouslySetInnerHTML={{___html:post?.description}}/>
          <div className={styles.comments}>
              <Comments/>
          </div>
        </div>

        <Menu/>
        
      </div>
      
    </div>
  )
}

export default SinglePage