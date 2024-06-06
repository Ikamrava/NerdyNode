"use client"
import Image from 'next/image'
import styles from './themeToggle.module.css'
import { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '@/context/ThemeContact'


function ThemeToggle() {
  const {theme , toggle} = useContext(ThemeContext) 
  const [mounted,setMounted]= useState(false)

  useEffect(()=>{
      setMounted(true)
  },[])
  if(mounted){
  return (
    <div className={styles.container} onClick={toggle} style={theme === "dark" ? {backgroundColor:"white"}: {backgroundColor:"black"}}>
      <Image src="/moon.png" alt='' width={14} height={14}/>
      <div className={styles.ball} style={theme === "dark" ? {left:1,backgroundColor:"black"}: {right:1,backgroundColor:"white"}}></div>
      <Image src="/sun.png" alt='' width={20} height={20}/>
    </div>
  )
}}

export default ThemeToggle