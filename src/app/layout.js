import NavBar from '@/component/navbar/NavBar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/component/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NERYNODE',
  description: 'The best blog!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='container'>
          <div className='wrapper'>
          <NavBar/>
            {children} 
            <Footer/>
          </div>
        </div>
      </body>
    </html>
  )
}
