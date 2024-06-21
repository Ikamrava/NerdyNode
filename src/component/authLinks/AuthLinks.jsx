"use client"
import Link from 'next/link'
import styles from './authLinks.module.css'
import { useState } from 'react'

function AuthLinks() {
  const status = "Auth"
  const [open,setOpen] = useState(false)
  return (
    <>
    {status === "notAuth" ? ( <Link className={styles.links} href = "/login">Login</Link>) : (<><Link className={styles.links} href = "/logout">Write</Link><span className={styles.links}>Logout</span></>)      }
   
    <div className={styles.burger} onClick={() => setOpen(!open)}>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
    </div>

    {open && <div className={styles.responsiveMenu}>
      <Link href = "/">Home</Link>
      <Link href = "/About">About</Link>
      <Link href = "/Contact">Contact</Link>
      {status === "notAuth" ? ( <Link href = "/login">Login</Link>) : (<><Link href = "/write">Write</Link><span className={styles.links}>Logout</span></>)}
    </div>}


    </>
    
  )
}

export default AuthLinks