"use client"
import { useEffect, useState } from 'react'
import styles from './write.module.css'
import Image from 'next/image'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.bubble.css'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

function WritePage() {
  const [open, setOpen] = useState(false)
  const [value, setValue]= useState("")
  const [loading, setLoading] = useState(true);

  const { data: session, status } = useSession();
  const router = useRouter()
  console.log(process.env.ADMIN_EMAIL)
  const [allowedUser, setAllowedUser] = useState(false);
  const allowedEmail = process.env.NEXT_PUBLIC_ALLOWED_EMAIL;


  useEffect(() => {
    const checkUserAccess = async () => {
      if (status === 'authenticated') {
        // Replace 'imankamrava@gmail.com' with the allowed email
        if (session.user.email === allowedEmail) {
          setAllowedUser(true);
        } else {
          router.push('/');
        }
      } else if (status === 'unauthenticated') {
        router.push('/');
      }
      setLoading(false);
    };

    checkUserAccess();
  }, [status, session, router]);

  if (status === "loading") {
    return (<div className={styles.socialGoogle}>Loading...</div>);
  }

  return (
    <div className={styles.container}>
       <input className={styles.input} type="text" placeholder='Title' />
       <div className={styles.editor}>
        <button className={styles.button} onClick={()=>setOpen(!open)}>
        <Image src="/plus.png" width = {16} height={16} alt='logo' />
        </button>
        {open && (
          <div className={styles.add}>
            <button className={styles.addbutton}>
            <Image src="/image.png" width = {16} height={16} alt='logo' />
            </button>
            <button className={styles.addbutton}>
            <Image src="/external.png" width = {16} height={16} alt='logo' />
            </button>
            <button className={styles.addbutton}>
            <Image src="/video.png" width = {16} height={16} alt='logo' />
            </button>
          </div>
        )}
        <ReactQuill className={styles.textArea} theme='bubble' value={value} onChange={setValue} placeholder='Lets Write'  />
       </div>
       <button className={styles.publish}>Publish</button>
    </div>
  )
}

export default WritePage