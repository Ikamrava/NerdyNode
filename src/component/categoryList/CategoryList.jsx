import Link from 'next/link'
import styles from './categoryList.module.css'
import Image from 'next/image'

function CategoryList() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
          <Link href="/blog?cat=style" className={`${styles.category} ${styles.smartphones_accessories}`}>
            <Image src="/smartphone.jpg" alt='' width={124} height={124} className={styles.image}></Image>
            Smartphones & Accessories
          </Link>

          <Link href="/blog?cat=style" className={`${styles.category} ${styles.computers_laptops}`}>
            <Image src="/laptop.jpg" alt='' width={124} height={124} className={styles.image}></Image>
            Computers & Laptops
          </Link>

          <Link href="/blog?cat=style" className={`${styles.category} ${styles.wearable}`}>
            <Image src="/wearables.jpg" alt='' width={124} height={124} className={styles.image}></Image>
            Wearable Technology
          </Link>

          <Link href="/blog?cat=style" className={`${styles.category} ${styles.home_entertainment}`}>
            <Image src="/home.png" alt='' width={124} height={124} className={styles.image}></Image>
            Home Entertainment
          </Link>

          <Link href="/blog?cat=style" className={`${styles.category} ${styles.smart_home}`}>
            <Image src="/smarthomes.jpg" alt='' width={124} height={124} className={styles.image}></Image>
            Smart Home
          </Link>

          <Link href="/blog?cat=style" className={`${styles.category} ${styles.Gaming}`}>
            <Image src="/gaming.jpg" alt='' width={124} height={124} className={styles.image}></Image>
            Gaming
          </Link>


          
      </div>
      
    </div>
  )
}

export default CategoryList