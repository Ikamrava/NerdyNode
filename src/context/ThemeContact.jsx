"use client"
import { useEffect, useState } from 'react';
import { createContext } from "react";

export const ThemeContext = createContext()

const getfromLocalStorage = ()=>{
    if(typeof window !== "undefined") {
        const value = localStorage.getItem("theme")
        return value || "light"
    }
    
}

export const ThemeContextProvider = ({children}) => {
    const [theme, setTheme] = useState(()=>{
        return getfromLocalStorage()
    })

    const toggle = ()=>{
        setTheme(theme === "light" ? "dark" : "light")
    }   

    useEffect(()=>{
        localStorage.setItem("theme", theme)
    },[theme])

    return (
        <ThemeContext.Provider 
            value={{theme, setTheme, toggle}}>
            {children}
        </ThemeContext.Provider>
    )
}