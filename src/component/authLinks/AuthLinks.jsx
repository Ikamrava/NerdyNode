import Link from 'next/link'
import styles from './authLinks.module.css'

function AuthLinks() {
  const status = "notAuth"
  return (
    <>
    {status === "notAuth" ? ( <Link href = "/login">Login</Link>) : (<><Link href = "/logout">Write</Link><span className={styles.links}>Logout</span></>)      }
    </>
  )
}

export default AuthLinks