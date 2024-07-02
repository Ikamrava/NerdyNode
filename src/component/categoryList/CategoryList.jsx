"use client"
import Link from 'next/link'
import styles from './categoryList.module.css'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const getData = async () => {
  const res = await fetch('http://localhost:3000/api/categories', { cache: "no-store" })
  if (!res.ok) {
    throw new Error('Failed')
  }
  return res.json()
}

function CategoryList() {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData()
        setData(data)
      } catch (error) {
        setError(error.message)
      }
    }
    fetchData()
  }, [])

  if (error) return <div>Error: {error}</div>

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {data.map((category) => (
          <Link key={category._id} href={`/blog?cat=${category.slug}`} className={`${styles.category}`}>
            
             {category.img && (
                    <Image src={category.img} alt={category.title} width={64} height={64} className={styles.image} />
              )}
              <h4>{category.title}</h4>
            
          </Link>
        ))}
      </div>
    </div>
  )
}

export default CategoryList
