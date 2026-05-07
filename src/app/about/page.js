"use client"
import { motion } from "framer-motion"
import Navbar from "../../../components/Navbar"
import { SiJavascript, SiPython, SiCplusplus } from "react-icons/si"
import { FiSearch, FiTerminal, FiCheckCircle, FiMessageSquare } from "react-icons/fi"
import fotoProfil from '../../../public/Fahmikece.jpg';

export default function About() {
  const items = [
    {
      label: "Home",
      bgColor: "#1B1722",
      textColor: "#fff",
      links: [
        { label: "Back To Home", href: "/" }
      ]
    },
    {
      label: "E-Learning Journey",
      bgColor: "#2F293A",
      textColor: "#fff",
      links: [
        { label: "Case Studies", href: "/projects" }
      ]
    },
    {
      label: "Contact",
      bgColor: "#2F293A",
      textColor: "#fff",
      links: [
        { label: "Let's Connect", href: "/contact" }
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
        logo={'/iconF.svg'}
        items={items}
        baseColor="#fff"
        menuColor="#000"
        buttonBgColor="#111"
        buttonTextColor="#fff"
      />

      <div className="flex-grow max-w-5xl mx-auto px-6 md:px-12 space-y-24 pb-10">
        
        {/* STORYTELLING & PHOTO SECTION */}
        <div className="flex flex-col items-center space-y-12">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            The "Hello World" Effect.
          </motion.h1>
          
          <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-16 w-full">
            {/* Kolom Kiri: Teks Cerita */}
           {/* Kolom Kiri: Teks Cerita */}
            <motion.div 
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-10 shadow-xl flex-1 text-left"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <p className="text-white/80 leading-relaxed mb-6 text-base md:text-lg">
                Semuanya dimulai dari nyoba-nyoba: ngetik di VSCode<br /> <b>"<code>&lt;h1&gt;Hello World&lt;/h1&gt;</code>"</b>. Waktu teks itu beneran muncul di web, ada kepuasan aneh yang bikin gua ketagihan sampai akhirnya jadi hobi. Dari sekadar nulis HTML dasar, gua mulai mikir, <i>"Gimana caranya biar web ini bisa ngelakuin sesuatu?"</i> dan dari situlah gua terjun ke JavaScript.
              </p>
              <p className="text-white/80 leading-relaxed mb-6 text-base md:text-lg">
                Sebagai <i>self-taught developer</i>, perjalanan gua penuh dengan momen <i>trial and error</i>. Frustrasi ngadepin <i>bug</i>, nyari tau logika di balik sebuah fungsi, sampai akhirnya ngerasain <b>euforia</b> pas kodenya jalan dengan mulus. Dan perasaan itulah yang bikin gua betah di VSCode. Berawal dari rasa penasaran ngeliat web orang lain, <i>"Kok bisa seinteraktif ini?"</i>, gua mulai belajar nge-<i>craft</i> UI yang dinamis, ngasih nyawa ke elemen web lewat animasi, dan ngebangun fungsionalitas yang bener-bener kepake sama <i>user</i>.
              </p>
              <p className="text-white/80 leading-relaxed text-base md:text-lg">
                Hari ini, <i>coding</i> bukan cuma sekadar hobi atau barisan teks buat gua. Ini adalah cara buat ngebangun dan menstrukturkan ide jadi sesuatu yang nyata dan bisa diinteraksikan. Dan pastinya, perjalanan gua di sini masih panjang.
              </p>
            </motion.div>

            {/* Kolom Kanan: Foto Profil */}
            <motion.div 
              className="w-full md:w-1/3 flex justify-center relative"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              {/* Efek Glow di belakang foto */}
              <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full scale-90"></div>
              
              <img 
                src={fotoProfil.src} 
                alt="Fahmi Imansyah" 
                className="relative z-10 w-64 md:w-full max-w-[300px] aspect-square object-cover rounded-3xl border-2 border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)] rotate-3 hover:rotate-0 transition-transform duration-500"
              />
            </motion.div>
          </div>
        </div>
        {/* SENI DALAM LOGIKA SECTION */}
        <motion.div 
          className="w-full max-w-4xl mx-auto pt-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gradient-to-br from-purple-900/40 to-blue-900/40 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            
            {/* Efek cahaya estetik di background card */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-500/20 blur-[80px] rounded-full pointer-events-none"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500/20 blur-[80px] rounded-full pointer-events-none"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3 flex justify-center">
                <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 leading-tight text-center md:text-left">
                  Seni <br className="hidden md:block" /> dalam <br className="hidden md:block" /> Logika.
                </h2>
              </div>
              
              <div className="md:w-2/3 border-t md:border-t-0 md:border-l border-white/20 pt-6 md:pt-0 md:pl-8">
                <p className="text-white/80 leading-relaxed text-base md:text-lg mb-4">
                  Buat gua, <i>coding</i> itu perpaduan antara dua dunia yang beda. Di satu sisi, ada <b>Seni</b>: gimana gua ngeracik UI yang memanjakan mata, ngatur transisi animasi biar kerasa hidup, dan mastiin <i>vibe</i> desainnya dapet banget secara visual.
                </p>
                <p className="text-white/80 leading-relaxed text-base md:text-lg">
                  Tapi di balik tampilan yang mulus itu, ada <b>Logika</b> yang berjalan ketat. Struktur kode yang solid, fungsi yang dieksekusi <i>step-by-step</i> tanpa celah, dan performa yang ngebut. Estetika tanpa logika cuma bakal jadi kanvas kosong yang nggak bisa apa-apa, dan logika tanpa seni bakal kerasa kaku dan ngebosenin buat <i>user</i>. Gua ada di tengah-tengahnya buat nyeimbangin keduanya.
                </p>
              </div>
            </div>

          </div>
        </motion.div>
      {/* DEBUGGING PHILOSOPHY SECTION */}
        <motion.div 
          className="w-full max-w-4xl mx-auto space-y-10 pt-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-300">My Debugging Philosophy</h2>
            <p className="text-white/60 text-base md:text-lg">Bug itu bukan musuh, tapi teka-teki logika yang nunggu buat dipecahin.</p>
          </div>

          {/* Diubah jadi grid 2x2 biar rapi buat 4 item */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Step 1 */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 shadow-xl hover:bg-white/10 transition-colors duration-300">
              <div className="w-14 h-14 bg-blue-500/10 border border-blue-500/30 rounded-2xl flex items-center justify-center mb-6 text-blue-400 text-2xl">
                <FiSearch />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">1. Break It Down</h3>
              <p className="text-white/70 text-sm md:text-base leading-relaxed">
                Langkah pertama gua selalu baca <i>error log</i> dengan teliti, terus mecah masalah besarnya jadi potongan logika yang lebih kecil biar gampang dianalisis.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 shadow-xl hover:bg-white/10 transition-colors duration-300">
              <div className="w-14 h-14 bg-purple-500/10 border border-purple-500/30 rounded-2xl flex items-center justify-center mb-6 text-purple-400 text-2xl">
                <FiTerminal />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">2. Step-by-Step Logic</h3>
              <p className="text-white/70 text-sm md:text-base leading-relaxed">
                Daripada nebak-nebak, gua jalanin kodenya baris demi baris secara konseptual. Nulis <code>console.log()</code> di sana-sini buat bener-bener paham alur data dan di mana fungsi itu mulai melenceng.
              </p>
            </div>

            {/* Step 3: THE AI PROTOCOL WKWK */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 shadow-xl hover:bg-white/10 transition-colors duration-300">
              <div className="w-14 h-14 bg-orange-500/10 border border-orange-500/30 rounded-2xl flex items-center justify-center mb-6 text-orange-400 text-2xl">
                <FiMessageSquare />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">3. The "Mentok" Protocol</h3>
              <p className="text-white/70 text-sm md:text-base leading-relaxed">
                Kalau otak beneran udah ngebul dan jalan buntu, gua nggak gengsi buat curhat dan diskusi bareng AI (termasuk nanya ke asisten AI yang ngebantu gua nulis ini wkwk). Bukan minta dibikinin <i>full code</i>, tapi buat <i>brainstorming</i> dan nyari <i>blind spot</i> dari logika gua.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 shadow-xl hover:bg-white/10 transition-colors duration-300">
              <div className="w-14 h-14 bg-green-500/10 border border-green-500/30 rounded-2xl flex items-center justify-center mb-6 text-green-400 text-2xl">
                <FiCheckCircle />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">4. Fix & Refactor</h3>
              <p className="text-white/70 text-sm md:text-base leading-relaxed">
                Setelah nemu akar masalah dan <i>bug</i>-nya kelar. Gua nge-<i>review</i> lagi kodenya: apa bisa dibikin lebih efisien? Apa bisa ditulis lebih rapi biar gampang dibaca orang lain nanti?
              </p>
            </div>

          </div>
        </motion.div>

        {/* ROADMAP SECTION */}
        <motion.div 
          className="max-w-2xl mx-auto w-full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Judul udah diganti jadi "My Developer Roadmap" */}
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-purple-300">My Developer Roadmap to be Dangerous</h2>
          
          <div className="flex flex-col">
            
            {/* STAGE 1: JAVASCRIPT */}
            <div className="flex gap-4 md:gap-6">
              <div className="flex flex-col items-center">
                <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-slate-900 border border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)] shrink-0 z-10">
                  <span className="absolute inset-0 rounded-full animate-ping bg-blue-500/30"></span>
                  <SiJavascript className="text-blue-400 text-2xl relative z-20" />
                </div>
                <div className="flex-1 w-[2px] bg-gradient-to-b from-blue-500/80 to-white/20 my-2"></div>
              </div>
              
              <div className="flex-1 pb-10">
                <div className="bg-white/10 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-6 shadow-lg">
                  <span className="text-blue-400 font-bold text-xs md:text-sm tracking-wider uppercase mb-1 block">Current Stage</span>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">JavaScript Ecosystem</h3>
                  <p className="text-white/70 text-sm md:text-base">
                    Fokus utama saat ini. Menguasai alur kerja Front-End dan Back-End <i>web development</i>. Meracik interaksi UI dengan React & Next.js, sekaligus memperkuat logika <i>server-side</i> menggunakan Node.js dan SQL.
                  </p>
                </div>
              </div>
            </div>

            {/* STAGE 2: PYTHON */}
            <div className="flex gap-4 md:gap-6 group">
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-900 border border-white/20 shrink-0 z-10 group-hover:border-white/60 group-hover:bg-white/10 transition-colors duration-300">
                  <SiPython className="text-white/50 text-2xl group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="flex-1 w-[2px] bg-white/20 my-2"></div>
              </div>
              
              <div className="flex-1 pb-10 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <span className="text-white/50 font-bold text-xs md:text-sm tracking-wider uppercase mb-1 block">Next Target</span>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Python</h3>
                  <p className="text-white/70 text-sm md:text-base">
                    Melangkah dari web ke ranah pengolahan data dan otomasi. Pengen eksplorasi bagaimana Python bisa ngebantu nulis skrip yang lebih efisien dan masuk ke dunia integrasi AI.
                  </p>
                </div>
              </div>
            </div>

            {/* STAGE 3: C++ */}
            <div className="flex gap-4 md:gap-6 group">
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-900 border border-white/20 shrink-0 z-10 group-hover:border-white/60 group-hover:bg-white/10 transition-colors duration-300">
                  <SiCplusplus className="text-white/40 text-2xl group-hover:text-white transition-colors duration-300" />
                </div>
              </div>
              
              <div className="flex-1 pb-4 opacity-40 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <span className="text-white/40 font-bold text-xs md:text-sm tracking-wider uppercase mb-1 block">End Goal</span>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">C++</h3>
                  <p className="text-white/70 text-sm md:text-base">
                    Kembali ke akar pemrograman tingkat rendah (<i>low-level</i>). Tujuannya untuk bener-bener paham manajemen memori, performa komputasi tinggi, dan fondasi inti dari <i>software engineering</i> sesungguhnya.
                  </p>
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