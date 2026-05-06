"use client"
import { motion } from "framer-motion"
import Navbar from "../../../components/Navbar"
import { FiDatabase, FiLock, FiCpu, FiSidebar } from "react-icons/fi"

export default function Projects() {
  const items = [
    {
      label: "About",
      bgColor: "#1B1722",
      textColor: "#fff",
      links: [
        { label: "My Story", href: "/about" }
      ]
    },
    {
      label: "Projects",
      bgColor: "#2F293A",
      textColor: "#fff",
      links: [
        { label: "Featured", href: "/#projects" },
        { label: "Case Studies", href: "/projects" }
      ]
    },
    {
      label: "Contact",
      bgColor: "#2F293A",
      textColor: "#fff",
      links: [
        { label: "Email", href: "/contact" },
        { label: "Twitter", href: "/contact" },
        { label: "LinkedIn", href: "/contact" }
      ]
    }
  ];

  return (
    <motion.div 
      className="min-h-screen bg-slate-950 bg-[radial-gradient(circle_800px_at_50%_-100px,#3b0764,transparent)] text-white pt-32 flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Navbar
        className="!fixed !top-6 left-1/2 -translate-x-1/2 z-50"
        logo={'fahmi'}
        items={items}
        baseColor="#fff"
        menuColor="#000"
        buttonBgColor="#111"
        buttonTextColor="#fff"
      />

      <div className="flex-grow max-w-5xl mx-auto px-6 md:px-12 space-y-24 pb-20">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col items-center text-center space-y-6">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Case Studies.
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-white/70 max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Implementasi nyata dari prinsip <b>Seni dalam Logika</b>. <i>Fun Fact:</i> Buat gua, cara tercepat untuk belajar adalah dengan mereplika (<i>Reverse Engineer</i>) web yang udah ada, lalu membangun ulang sistemnya dari nol pakai logika sendiri.
          </motion.p>
        </div>

        {/* PROJECT 1: NAXASHOP (CODASHOP REPLICA) */}
        <motion.div 
          className="w-full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-10 shadow-xl relative overflow-hidden">
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-blue-500/10 blur-[100px] pointer-events-none"></div>

            <div className="flex flex-col md:flex-row gap-10">
              {/* Info Project */}
              <div className="md:w-1/3">
                <span className="px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-500/30 text-xs font-bold tracking-wider uppercase text-blue-300">Full-Stack E-Commerce</span>
                <h2 className="text-3xl font-bold text-white mt-4 mb-2">NaXaShop</h2>
                <p className="text-white/60 mb-6">Replika dari web top-up CodaShop. Kawah candradimuka tempat logika Backend gua bener-bener dibanting dan dibentuk.</p>
                
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-lg text-sm text-green-300 font-medium">Node.js</span>
                  <span className="px-3 py-1 bg-orange-500/20 border border-orange-500/30 rounded-lg text-sm text-orange-300 font-medium">MySQL</span>
                  <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-lg text-sm text-blue-300 font-medium">Midtrans API</span>
                </div>
              </div>

              {/* Behind the Scene */}
              <div className="md:w-2/3 space-y-6">
                <h3 className="text-xl font-bold text-blue-300 border-b border-white/10 pb-2">Behind The Code</h3>
                
                {/* Challenge 1 */}
                <div className="flex gap-4">
                  <div className="mt-1 text-blue-400 text-xl"><FiLock /></div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Satpam Digital & Kasir Midtrans</h4>
                    <p className="text-white/70 leading-relaxed text-sm md:text-base">
                      Gua nggak mau ini cuma web pajangan. Gua ngebangun sistem otentikasi mandiri (Login/Register) dan bikin "Satpam Digital" pakai <code>localStorage</code> buat misahin <i>role</i> User biasa dan Admin. Tantangan paling gila? Integrasi <i>payment gateway</i> pakai <b>Midtrans</b>. Gua harus paham alur nembak API dari Front-End (<code>window.snap.pay</code>), ngirim data <code>POST</code> ke Node.js, sampe nerima karcis dari Midtrans biar transaksi beneran bisa jalan.
                    </p>
                  </div>
                </div>

                {/* Challenge 2 */}
                <div className="flex gap-4">
                  <div className="mt-1 text-orange-400 text-xl"><FiDatabase /></div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">The Missing SQL Images</h4>
                    <p className="text-white/70 leading-relaxed text-sm md:text-base">
                      Bikin <i>Dashboard Admin</i> yang bisa nge-ACC pesanan udah lumayan bikin pusing. Tapi ada satu <i>bug</i> sepele yang bikin <i>mental breakdown</i>: gambar produk dari <i>database</i> nggak mau muncul! Setelah berjam-jam mentok dan ngajak diskusi AI, gua baru paham konsep <i>absolute path</i> di server. Solusinya ternyata cuma nge-<i>serve</i> <i>folder public</i> pakai <code>path.join(__dirname, 'public')</code> di Express. <i>Mind-blowing!</i>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>


        {/* PROJECT 2: CYRENE (GAME8 CLONE) */}
        <motion.div 
          className="w-full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-10 shadow-xl relative overflow-hidden">
            <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-purple-500/10 blur-[100px] pointer-events-none"></div>

            <div className="flex flex-col md:flex-row gap-10">
              {/* Info Project */}
              <div className="md:w-1/3">
                <span className="px-4 py-1.5 rounded-full bg-purple-500/20 border border-purple-500/30 text-xs font-bold tracking-wider uppercase text-purple-300">Front-End Replica</span>
                <h2 className="text-3xl font-bold text-white mt-4 mb-2">Cyrene Guide</h2>
                <p className="text-white/60 mb-6">Kloning dari web <i>Game8</i>. Eksperimen Front-End buat mereplika UI/UX web panduan karakter HSR.</p>
                
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-sm text-white/80">HTML5</span>
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-sm text-white/80">CSS3</span>
                  <span className="px-3 py-1 bg-yellow-500/20 border border-yellow-500/30 rounded-lg text-sm text-yellow-300 font-medium">Vanilla JS</span>
                </div>
              </div>

              {/* Behind the Scene */}
              <div className="md:w-2/3 space-y-6">
                <h3 className="text-xl font-bold text-purple-300 border-b border-white/10 pb-2">Behind The Code</h3>
                
                {/* Challenge 1 */}
                <div className="flex gap-4">
                  <div className="mt-1 text-purple-400 text-xl"><FiSidebar /></div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Hamburger Menu & The Rogue "s"</h4>
                    <p className="text-white/70 leading-relaxed text-sm md:text-base">
                      Tantangan <i>layouting</i> terbesar ada di menu navigasi. Gua bikin <i>sidebar</i> yang statis di desktop, tapi kalau di mobile berubah jadi <i>Hamburger Menu</i>. Ditambah lagi momen <i>debugging</i> paling kocak: <i>layout</i> tabel sempet hancur lebur gara-gara ada satu <i>typo</i> huruf <b>"s"</b> nyasar di dalem tag HTML-nya.
                    </p>
                  </div>
                </div>

                {/* Challenge 2 */}
                <div className="flex gap-4">
                  <div className="mt-1 text-pink-400 text-xl"><FiCpu /></div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">The AI Assist: Scroll Reveal</h4>
                    <p className="text-white/70 leading-relaxed text-sm md:text-base">
                      Gua pengen ada animasi transisi pas elemen di-<i>scroll</i>. Masalahnya, CSS murni cuma bisa nge-<i>trigger</i> animasi berdasarkan waktu. Akhirnya gua nanya ke AI, dan dikasih solusi pakai <code>IntersectionObserver</code> di Vanilla JS. Begitu 15% elemen masuk layar, JS otomatis nambahin class <code>.active</code> buat ngejalanin animasinya. Kolaborasi manusia x AI yang epik!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>

      {/* FOOTER */}
      <footer className="w-full border-t border-white/10 py-8 bg-slate-950/50 backdrop-blur-md mt-auto">
        <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center justify-center space-y-2">
          <p className="text-white/60 text-sm md:text-base font-medium tracking-wide">
            Crafted with passion by Fahmi Imansyah
          </p>
          <p className="text-white/40 text-xs md:text-sm">
            © {new Date().getFullYear()} All rights reserved. Built with Next.js & Framer Motion.
          </p>
        </div>
      </footer>

    </motion.div>
  )
}