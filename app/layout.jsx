import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import './globals.css'

export const metadata = {
  title: 'Ahmed Khalil | Space Portfolio',
  description: 'Full Stack Web Developer Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="layout-html">
      <body className="layout-body">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
