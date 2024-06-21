import styles from "./loginPage.module.css"

function LoginPage() {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.socilaGoogle}>
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
