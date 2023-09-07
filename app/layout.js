
import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import NavbarComponent from '../components/navbar'
import Footer from '@/components/footer'



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Xploring AI World",
  description: "Welcome to Xploring AI World - Your Gateway to Artificial Intelligence and Technology Insights. Explore the latest AI tools, AI news, and tech updates. Stay informed about groundbreaking advancements, trends, and innovations that are shaping the future of AI and technology."
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='dark'>


      <body className={`${inter.className}`} style={{ backgroundColor: "hsla(0,0%,0%,1)", backgroundImage: "radial-gradient(at 100% 100%, hsla(212,100%,46%,1) 0px, transparent 50%),radial-gradient(at 0% 0%, hsla(343,0%,0%,1) 0px, transparent 50%)", backgroundAttachment: "fixed" }}>
        <Providers>
          <NavbarComponent />
          {children}
        </Providers>
        <footer>
          <Footer />
        </footer>
      </body>

    </html>
  )
}
