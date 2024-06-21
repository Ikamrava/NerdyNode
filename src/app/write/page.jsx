"use client"
import { useState } from 'react'
import styles from './write.module.css'
import Image from 'next/image'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.bubble.css'

function WritePage() {
  const [open, setOpen] = useState(false)
  const [value, setValue]= useState("")
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