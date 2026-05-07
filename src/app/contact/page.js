"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import Navbar from "../../../components/Navbar"
import { FiMail, FiGithub, FiInstagram, FiSend, FiCoffee, FiCheckCircle } from "react-icons/fi"
import { FaWhatsapp } from "react-icons/fa"

export default function Contact() {
  // State buat ngatur loading dan pesan sukses/gagal
  const [result, setResult] = useState("");
  const [isSending, setIsSending] = useState(false);

  // Fungsi buat ngirim data ke Web3Forms tanpa refresh halaman
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setResult("Lagi ngirim...");

    const formData = new FormData(e.target);
    
    // 🔥 GANTI PAKE ACCESS KEY DARI WEB3FORMS LU BRE:
    formData.append("access_key", "867f2130-9a97-4ce7-ab26-d52a023fcffb");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("pesan terkirim tungguin ya"); 
        e.target.reset(); // Kosongin form kalau udah sukses
      } else {
        setResult("Waduh gagal bre, coba lagi ya!");
      }
    } catch (error) {
      setResult("Servernya ngadat meureun, coba ntar lagi!");
    } finally {
      setIsSending(false);
    }
  };

  const items = [
    {
      label: "About",
      bgColor: "#1B1722",
      textColor: "#fff",
      links: [{ label: "My Story", href: "/about" }]
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
      label: "Home",
      bgColor: "#2F293A",
      textColor: "#fff",
      links: [
        { label: "Back to Home", href: "/" }
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

      <div className="flex-grow max-w-6xl mx-auto px-6 md:px-12 w-full pb-20">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* BAGIAN KIRI: TEKS & SOSMED */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div>
              <h1 className="text-5xl md:text-7xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/50">
                Let's <br /> Connect.
              </h1>
              <p className="text-white/70 text-lg md:text-xl leading-relaxed max-w-md">
                Punya ide <i>project</i> gila? Butuh kolaborasi buat ngebangun UI/UX yang interaktif? Atau cuma pengen ngobrol? <b>Gua siap dengerin.</b>
              </p>
            </div>

            <div className="flex flex-col space-y-4 pt-4 border-t border-white/10 w-fit">
              <p className="text-white/40 text-sm font-bold tracking-widest uppercase mb-2">Find me on</p>
              
              {/* 🔥 GANTI NOMOR WA LU DI SINI (Pake 62) */}
              <a href="https://wa.me/6281548583978" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-white/80 hover:text-green-400 transition-colors group">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center group-hover:bg-green-500/20 group-hover:border-green-500/40 transition-all">
                  <FaWhatsapp className="text-xl" />
                </div>
                <div className="flex flex-col">
                   <span className="font-medium text-lg leading-tight">WhatsApp</span>
                   <span className="text-xs text-white/40 italic">Fast Response</span>
                </div>
              </a>

              {/* 🔥 GANTI EMAIL LU DI SINI */}
              <a href="mailto:fahmiimansyah28@gmail.com" className="flex items-center gap-4 text-white/80 hover:text-blue-400 transition-colors group">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center group-hover:bg-blue-500/20 group-hover:border-blue-500/40 transition-all">
                  <FiMail className="text-xl" />
                </div>
                <span className="font-medium text-lg">Email</span>
              </a>

              <a href="https://github.com/fahmiimansyah/" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-white/80 hover:text-purple-400 transition-colors group">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center group-hover:bg-purple-500/20 group-hover:border-purple-500/40 transition-all">
                  <FiGithub className="text-xl" />
                </div>
                <span className="font-medium text-lg">GitHub</span>
              </a>

              <a href="https://www.instagram.com/dlicrates/" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-white/80 hover:text-pink-400 transition-colors group">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center group-hover:bg-pink-500/20 group-hover:border-pink-500/40 transition-all">
                  <FiInstagram className="text-xl" />
                </div>
                <span className="font-medium text-lg">Instagram</span>
              </a>
            </div>
          </motion.div>

          {/* BAGIAN KANAN: FORM KONTAK */}
          <motion.div 
            className="w-full relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {/* Glow effect di belakang form */}
            <div className="absolute inset-0 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl relative z-10">
              
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-white/60 uppercase tracking-wider ml-1">Nama Lu</label>
                  <input 
                    name="name" 
                    type="text" 
                    placeholder="Asep" 
                    className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/30 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-white/60 uppercase tracking-wider ml-1">Email Lu</label>
                  <input 
                    name="email" 
                    type="email" 
                    placeholder="Asep@example.com" 
                    className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/30 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-white/60 uppercase tracking-wider ml-1">Pesan / Ide Gila Lu</label>
                  <textarea 
                    name="message" 
                    rows="4"
                    placeholder="Bree, gua ada project nih..." 
                    className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/30 focus:outline-none focus:border-pink-500/50 focus:ring-1 focus:ring-pink-500/50 transition-all resize-none"
                    required
                  ></textarea>
                </div>

                <button 
                  disabled={isSending}
                  type="submit" 
                  className="w-full bg-white text-black font-bold text-lg rounded-xl px-5 py-4 flex items-center justify-center gap-3 hover:bg-purple-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>{isSending ? "Lagi Ngirim..." : "Kirim Pesan"}</span>
                  <FiSend />
                </button>

                {/* NOTIFIKASI MUNCUL DI SINI KALAU SUKSES / GAGAL */}
                {result && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }} 
                    animate={{ opacity: 1, y: 0 }}
                    className={`mt-4 p-4 rounded-xl text-center font-bold flex items-center justify-center gap-2 ${result.includes('terkirim') ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}
                  >
                    {result.includes('terkirim') && <FiCheckCircle />}
                    {result}
                  </motion.div>
                )}
              </form>

              <div className="mt-6 flex items-center justify-center gap-2 text-white/40 text-sm">
                <FiCoffee />
                <span>Powered by Caffeine & Code</span>
              </div>
            </div>
          </motion.div>

        </div>
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