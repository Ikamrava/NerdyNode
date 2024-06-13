import Link from 'next/link'
import styles from './menu.module.css'
import Image from 'next/image'

function Menu() {
  return (
    <div className={styles.container}>
      <h2 className={styles.new}>{"What's hot"}</h2>
      <h1>Most Popular</h1>
      <div className={styles.items}>
        <div className={styles.item}>
         <Link href="/" className={styles.item}>
         <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="food"  fill />
         </div>
         <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.react}`}>React</span>
          <h3>jhsgijqsg klqwhqowh klhqlwkdh jhhd1ohd 1idh1odh1iodh iodh2iodh</h3>
         </div>
         </Link>
        </div>

      </div>
    </div>
  )
}

export default Menu