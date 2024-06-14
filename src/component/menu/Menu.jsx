import Link from 'next/link'
import styles from './menu.module.css'
import Image from 'next/image'

function Menu() {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"What's hot"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      
        <div className={styles.items}>
         <Link href="/" className={styles.item}>
            <div className={styles.imageContainer}>
              <Image src="/p1.jpeg" alt="food" fill className={styles.image} />
            </div>
            <div className={styles.textContainer}>
                <span className={`${styles.category} ${styles.react}`}>React</span>
                  <h3 className={styles.postTitle}>jhsgijqsg klqwhqowh klhqlwkdh</h3>
                <div lassName={styles.details}>
                    <span className={styles.userName}>John</span>
                    <span className={styles.date}> - 10.03.2023</span>
                </div>
            </div>
         </Link>
        </div>

      
    </div>
  )
}

export default Menu