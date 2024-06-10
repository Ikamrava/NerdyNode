import Image from 'next/image'
import styles from './featured.module.css'

function Featured() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, NERDYNODE here!</b> 
        <b className={styles.discover}>Dicover My Creative Journey</b>
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
        <Image className={styles.image} src="/p1.jpeg" alt='' fill></Image>
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</h1>
          <p className={styles.postDesc}>s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <button className={styles.button}>Raed More</button>
        </div>
      </div>
    </div>
  )
}

export default Featured