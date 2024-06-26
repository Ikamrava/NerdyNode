"use client"

import { ThemeContext } from "@/context/ThemeContact"
import { useContext, useEffect, useState } from "react"

function ThemeProvider({children}) {
    const {theme} = useContext(ThemeContext)
    const [mounted,setMounted]= useState(false)

    useEffect(()=>{
        setMounted(true)
    },[])
    
  
    if(mounted){
        return (
            <div className={theme}>{children}</div>
        )

    }
  
}

export default ThemeProvider