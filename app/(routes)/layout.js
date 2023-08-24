import '../_assets/styles/index.scss'
import { Inter } from 'next/font/google'
import Navbar from '../_components/secions/navbar/Navbar'
import Footer from '../_components/secions/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio',
  description: 'István Pataki \'s personal portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
