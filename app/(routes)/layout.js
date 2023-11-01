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
          <main style={{overflowX: "hidden"}}>
            {children}
          </main>
        <Footer/>
        <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>        </body>
    </html>
  )
}
