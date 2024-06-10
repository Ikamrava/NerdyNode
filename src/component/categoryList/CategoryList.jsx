import Link from 'next/link'
import styles from './categoryList.module.css'
import Image from 'next/image'

function CategoryList() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
          <Link href="/blog?cat=react" className={`${styles.category} ${styles.react}`}>
            <Image src="/react.jpg" alt='' width={124} height={124} className={styles.image}></Image>
            React
          </Link>

          <Link href="/blog?cat=javascript" className={`${styles.category} ${styles.javaScript}`}>
            <Image src="/javascript.jpg" alt='' width={124} height={124} className={styles.image}></Image>
            JavaScript
          </Link>

          <Link href="/blog?css=style" className={`${styles.category} ${styles.CSS}`}>
            <Image src="/css.jpg" alt='' width={124} height={124} className={styles.image}></Image>
            CSS
          </Link>

          <Link href="/blog?cat=tailwind" className={`${styles.category} ${styles.tailwind}`}>
            <Image src="/tailwind.jpg" alt='' width={124} height={124} className={styles.image}></Image>
            Tailwind CSS
          </Link>

          <Link href="/blog?cat=node" className={`${styles.category} ${styles.node}`}>
            <Image src="/node.jpg" alt='' width={124} height={124} className={styles.image}></Image>
            Node.js
          </Link>

          <Link href="/blog?cat=mongo" className={`${styles.category} ${styles.mongoDB}`}>
            <Image src="/mongo.jpg" alt='' width={124} height={124} className={styles.image}></Image>
            MongoDB
          </Link>


          
      </div>
      
    </div>
  )
}

export default CategoryList