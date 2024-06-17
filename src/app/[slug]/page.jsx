import React from 'react'
import styles from './singlePage.module.css'
import Menu from '@/component/menu/Menu'
import Image from 'next/image'
import Comments from '../comments/Comments'

function SinglePage() {
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
          <p>With the online text generator you can process your personal Lorem Ipsum enriching it with html elements that define its structure, with the possibility to insert external links, but not only.
              Now to compose a text Lorem Ipsum is much more fun!
              In fact, inserting any fantasy text or a famous text, be it a poem, a speech, a literary passage, a song's text, etc., our text generator will provide the random extraction of terms and steps to compose your own exclusive Lorem Ipsum.</p>
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