
"use client"
import { useRouter } from 'next/navigation'
import { signIn, useSession } from "next-auth/react"
import styles from "./loginPage.module.css"

function LoginPage() {
  const {data,status} = useSession()
  const router = useRouter()

  if(status === "loading"){
    return (<div className={styles.socilaGoogle}>Loading...</div>)
  }
  if(status === "authenticated"){
    router.push("/")
  }

  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.socilaGoogle} onClick={()=>signIn("google")}>
                Sign in with Google
            </div>
            <div className={styles.socilaGithub}>
                Sign in with Github
            </div>
        </div>
    </div>
  )
}

export default LoginPage
