import React from 'react'
import styles from './blogPage.module.css'
import CardList from '@/component/cardList/CardList'
import Menu from '@/component/menu/Menu'

function BlogPage() {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>React</h1>
        <div  className={styles.content}>
            <CardList/>
            <Menu/>
        </div>
    </div>
  )
}

export default BlogPage