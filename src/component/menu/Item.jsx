import Image from 'next/image'
import Link from 'next/link'
import styles from './item.module.css'


function Item({title, postTitle,userName,date, bgcolor}) {

const catStyle = `styles.${title.toLowerCase()}`
console.log(catStyle)
  return (
    <Link key={title} href="/" className={styles.item}>
    <div className={styles.imageContainer}>
      <Image src="/p1.jpeg" alt="food" fill className={styles.image} />
    </div>
    <div className={styles.textContainer}>
        <span className={styles.category} style={{backgroundColor: bgcolor }} >{title}</span>
          <h3 className={styles.postTitle}>{postTitle}</h3>
        <div lassName={styles.details}>
            <span className={styles.userName}>{userName}</span>
            <span className={styles.date}>{date}</span>
        </div>
    </div>
 </Link>
  )
}

export default Item