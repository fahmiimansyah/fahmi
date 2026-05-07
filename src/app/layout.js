import './globals.css'
import { Outfit } from 'next/font/google'
import TransitionWrapper from '../../components/TransitionWrapper'

const outfit = Outfit({ subsets: ['latin'] })

export const metadata = {
  title: "Fahmi Imansyah | Full-Stack Web Developer",
  description: "Portofolio digital Fahmi Imansyah, seorang self-taught Web Developer. Membangun pengalaman digital interaktif dengan Frontend & Backend (Next.js, Node.js, MySQL).",
  keywords: ["Fahmi Imansyah", "Web Developer Indonesia", "Frontend Developer", "Backend Developer", "Portofolio Programmer", "Next.js Developer"],
  authors: [{ name: "Fahmi Imansyah" }],
  creator: "Fahmi Imansyah",
  
  // 🔥 INI GANTI PAKE DOMAIN BARU LU BREE
  metadataBase: new URL("https://fahmiimansyah.my.id"), 
  
  openGraph: {
    title: "Fahmi Imansyah | Web Developer Portfolio",
    description: "Seni dalam Logika. Jelajahi case studies dan perjalanan coding gua di sini.",
    
    // 🔥 INI JUGA GANTI BIAR PREVIEW SHARE-NYA PAS
    url: "https://fahmiimansyah.my.id", 
    
    siteName: "Fahmi Imansyah",
    images: [
      {
        url: "/ssPort.png", // thumbnail pas dishare
        width: 1200,
        height: 630,
        alt: "Fahmi Imansyah Portfolio",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fahmi Imansyah | Web Developer",
    description: "Full-Stack Web Developer Portfolio",
    images: ["/ssPort.png"],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={outfit.className}>
        <TransitionWrapper>
          {children}
        </TransitionWrapper>
      </body>
    </html>
  )
}