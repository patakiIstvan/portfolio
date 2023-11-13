import '../_assets/styles/index.scss'
import { Inter } from 'next/font/google'
import Navbar from '../_components/secions/navbar/Navbar'
import Footer from '../_components/secions/footer/Footer'
import Script from 'next/script'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio',
  description: 'István Pataki\'s web developer portfolio',
  keywords: ["Pataki","István","Pataki István", "Web developer portfolio", "next.js","react","javascript", "web development projects"],
  creator: 'István Pataki'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>

      <script async src="https://www.googletagmanager.com/gtag/js?id=G-6G2CQXWW0W"></script>
      <cript
      dangerouslySetInnerHTML={{
        __html: `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-6G2CQXWW0W');`}}
      />
      <Script type="text/javascript"
      dangerouslySetInnerHTML={{
        __html: `(function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "jq168828n2");`
      }}
      />
      </Head>
      <body className={inter.className}>
        <Navbar/>
          <main style={{overflowX: "hidden"}}>
            {children}
          </main>
        <Footer/>
      </body>
    </html>
  )
}
