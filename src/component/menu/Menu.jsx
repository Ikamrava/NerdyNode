import Link from 'next/link'
import styles from './menu.module.css'
import Image from 'next/image'
import Item from './Item'

function Menu() {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"What's hot"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      
        <div className={styles.items}>
          <Item title="React" postTitle="jhsgijqsg klqwhqowh klhq lwkdh" userName="John Doe" date="10.03.2023" bgcolor="#ff7857" />
          <Item title="JavaScript" postTitle="jhsgijqsg klqwhqowh klhq lwkdh" userName="Iman Doe" date="10.03.2023" bgcolor="#ffb14f" />
          <Item title="CSS" postTitle="jhsgijqsg klqwhqowh klhq lwkdh" userName="Reza Doe" date="10.03.2023" bgcolor="#7fb881" />
          <Item title="Mongo DB" postTitle="jhsgijqsg klqwhqowh klhq lwkdh" userName="Hassan Doe" date="10.03.2023" bgcolor="#ff7887" />
        </div>

      
    </div>
  )
}

export default Menu