import './globals.css'
import { Outfit } from 'next/font/google'
import TransitionWrapper from '../../components/TransitionWrapper'

const outfit = Outfit({ subsets: ['latin'] })

export const metadata = {
  title: "fahmi imansyah",
  description: 'fahmi seorang Pengelana'
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={outfit.className}>
        <TransitionWrapper>
          {children}
        </TransitionWrapper>
      </body>
    </html>
  )
}