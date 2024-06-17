
"use client"
import Link from 'next/link';
import styles from './comments.module.css';
import Image from 'next/image';
function Comments() {
  const status = "auth"
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "auth" ? (
        <div className={styles.write}>
          <textarea placeholder='Write your comment ...' className={styles.input}/>
          <button className={styles.button}>Post</button>
        </div>
      ) : (
        <div className={styles.login}>
          <Link href="/login" className={styles.link}>Login</Link>
        </div>
      )}
       {/* comments */}
       <div className={styles.comments}>
        <div className={styles.comment} >

          <div className={styles.user}>
            <Image src="/p1.jpeg" width={50} height={50} alt='avatar' className={styles.image}/>
            <div className={styles.userInfo}>
              <span>John Doe</span>
              <span>12/05/2024</span>
            </div>
          </div>

          <p className={styles.des}>This is a comment</p>
        </div>
      </div>


     
      
    </div>
  )
}

export default Comments