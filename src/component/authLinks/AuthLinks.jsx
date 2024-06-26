"use client"
import Link from 'next/link'
import styles from './authLinks.module.css'
import { useState } from 'react'
import { signOut, useSession } from 'next-auth/react'


function AuthLinks() {
  const {status} = useSession()

  const [open,setOpen] = useState(false)
  return (
    <>
   {status === "unauthenticated" ? (<Link href = "/login">Login</Link>):
       (<span className={styles.links} onClick={signOut} >Logout</span>)}
   
    <div className={styles.burger} onClick={() => setOpen(!open)}>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
    </div>

    {open && <div className={styles.responsiveMenu}>
      <Link href = "/">Home</Link>
      <Link href = "/About">About</Link>
      <Link href = "/Contact">Contact</Link>
      {status === "unauthenticated" ? (<Link href = "/login">Login</Link>):
       (<span className={styles.links} onClick={signOut} >Logout</span>)}
    </div>}


    </>
    
  )
}

export default AuthLinks