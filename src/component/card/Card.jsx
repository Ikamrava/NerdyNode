import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

function Card() {
  return (
    <div className={styles.container}>
          <div className={styles.imageContainer}>
           <Image src="/p1.jpeg" alt="" fill />
          </div>
          <div className={styles.textContainer}>
            <div className={styles.details}>
                <span className={styles.date}>11.0.2023</span>
                <span className={styles.category}>JAVASCRIPT</span>
            </div>
            <h1 className={styles.title}>className</h1>
             <p className={styles.desc}>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</p>
             <Link href = "/">Raed More</Link>
          </div>
          
        
        </div>
  )
}

export default Card