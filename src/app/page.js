"use client"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import Navbar from "../../components/Navbar"
import ScrollReveal from '../../components/ScrollReveal';
import Hero from "../../components/Hero"
import Intro from "../../components/Intro"
import { useState, useEffect } from "react"
// MagicRings udah dipensiunkan wkwk
import fotoProfil from '../../public/Picsart_26-05-04_12-44-57-908.png';
import ProfileCard from "../../components/profileCard"
import TechStack from '../../components/TechStack'
import FeaturedProjects from "../../components/Project";

export default function Home() {
  const { scrollY } = useScroll();
  // ringOpacity udah dihapus biar gak menuh-menuhin memori
  const [isMounted, setIsMounted] = useState(false);
  const [introDone, setIntroDone] = useState(false); 
  useEffect(() => {
    setIsMounted(true);
    const played = sessionStorage.getItem("introPlayed") === "true";
    setIntroDone(played);
  }, []);

  const handleFinish = () => {
    setIntroDone(true);
    sessionStorage.setItem("introPlayed", "true");
  };

  const items = [
    {
      label: "About",
      bgColor: "#1B1722",
      textColor: "#fff",
      links: [
        { label: "Company", href: "/about" },
        { label: "Careers", href: "/about" }
      ]
    },
    {
      label: "Projects",
      bgColor: "#2F293A",
      textColor: "#fff",
      links: [
        { label: "Featured", href: "/projects" },
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
  ]

  if (!isMounted) return <div className="min-h-screen bg-black" />;

  return (
    <motion.div 
      className="min-h-screen overflow-hidden bg-slate-950 bg-[radial-gradient(circle_800px_at_50%_-100px,#3b0764,transparent)] text-white"
    >
      <AnimatePresence mode="wait">
        {!introDone ? (
          <motion.div 
            key="intro" 
            exit={{ opacity: 0 }} 
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <Intro onFinish={handleFinish} />
          </motion.div>
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {/* NAVBAR */}
            <Navbar
              className="!fixed !top-6 left-1/2 -translate-x-1/2 z-50"
              logo={'fahmi'}
              items={items}
              baseColor="#fff"
              menuColor="#000"
              buttonBgColor="#111"
              buttonTextColor="#fff"
            />

            <section className="relative min-h-screen flex items-center justify-center pt-32 md:pt-0 overflow-hidden">
              
              {/* MagicRings Component udah kita buang dari sini biar enteng! */}

              <div className="z-10 max-w-5xl w-full mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between">
                
                {/* --- BAGIAN KIRI: TEKS --- */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="relative z-20 w-full md:w-[60%] flex flex-col items-center text-center"
                >
                  <div className="flex items-center justify-center gap-2 flex-wrap w-full mb-1">
                    <h1 className="text-2xl md:text-3xl text-white font-bold">
                      Hi, I&rsquo;m
                    </h1>
                    <Hero
                      texts={['Fahmi', 'Imansyah']}
                      mainClassName="px-3 bg-blue-500 text-white py-1 rounded-lg text-3xl md:text-5xl font-semibold shadow-lg"
                      staggerFrom="last"
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      exit={{ y: "-120%" }}
                      staggerDuration={0.03}
                      splitLevelClassName="overflow-hidden"
                      transition={{ type: "spring", damping: 30, stiffness: 400 }}
                      rotationInterval={2000}
                      splitBy="characters"
                      auto
                      loop
                    />
                  </div>

                  <p className="text-white/90 text-base md:text-lg mb-6">
                    I know About Coding enough to be dangerous 👨‍💻
                  </p>

                  <div className="mt-2 p-4 md:p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl shadow-xl flex flex-col items-center w-full max-w-xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                      Saha ari Kaula?
                    </h2>
                    <p className="text-white/90 text-base md:text-lg leading-snug mb-4 text-center">
                      Gua adalah seorang Front End Developer yang suka banget ngulik teknologi web modern.
                      Gua percaya kalau website itu gak cuma soal barisan kode, tapi soal gimana kita ngebangun{' '}
                      <span className="text-white font-extrabold">vibe dan experience</span> yang mulus buat user.
                    </p>
                    <p className="text-white/90 text-base md:text-lg leading-snug text-center">
                      Sebagai seorang <i>self-taught coder</i>, gua selalu haus buat eksplorasi hal baru.
                      Mulai dari ngeracik UI yang interaktif, ngatur animasi biar web terasa hidup, sampai
                      mastiin performanya tetep ngebut. <i>Let&rsquo;s build something awesome!</i>
                    </p>
                  </div>
                </motion.div>

                {/* --- BAGIAN KANAN: FOTO --- */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="relative z-10 w-full md:w-[40%] flex justify-center mt-12 md:mt-0 md:-ml-24"
                >
                  <ProfileCard
                    name="Fahmi Imansyah"
                    title="Front-End Developer"
                    handle="javicodes"
                    status="Online"
                    contactText="Contact Me"
                    priority
                    avatarUrl={fotoProfil.src}
                    showUserInfo={false}
                    enableTilt={true}
                    enableMobileTilt={false}
                    onContactClick={() => console.log('Contact clicked')}
                    behindGlowColor="rgba(125, 190, 255, 0.67)"
                    iconUrl="/code-icon.svg"
                    behindGlowEnabled={false} 
                    innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
                  />
                </motion.div>

              </div>
              
              <div className="hidden md:flex absolute bottom-5 left-1/2 -translate-x-1/2 justify-center z-20 cursor-pointer">
                <motion.div
                  animate={{ 
                    opacity: [0.3, 1, 0.3], 
                    textShadow: [
                      "0px 0px 0px rgba(255,255,255,0)", 
                      "0px 0px 12px rgba(255,255,255,0.9)", 
                      "0px 0px 0px rgba(255,255,255,0)"
                    ]
                  }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="text-white font-semibold tracking-[0.4em] uppercase text-xl"
                >
                  Scroll Down
                </motion.div>
              </div>
            </section>

            <section className="py-32 flex items-center justify-center relative z-10">
              <div className="w-full max-w-5xl mx-auto px-4 md:px-8">
                
                <div className="relative bg-[#1a1423]/80 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-16 shadow-2xl flex flex-col items-center text-center overflow-hidden">
                  
                  <div className="absolute -top-40 -left-40 w-96 h-96 bg-[radial-gradient(circle,rgba(168,85,247,0.15)_0%,transparent_70%)] pointer-events-none" />
                  <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[radial-gradient(circle,rgba(99,102,241,0.15)_0%,transparent_70%)] pointer-events-none" />

                  {/* --- JUDUL / BADGE --- */}
                  <div className="relative z-10 mb-8 md:mb-12">
                    <span className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-purple-300 shadow-sm">
                      Developer's Manifesto
                    </span>
                  </div>

                  {/* --- TEKS PAKE SCROLL REVEAL --- */}
                  <div className="relative z-10 w-full max-w-4xl mx-auto">
                    <ScrollReveal
                      baseOpacity={0.2}
                      enableBlur={true}
                      baseRotation={0} 
                      blurStrength={4}
                      rotationEnd="center center" 
                      wordAnimationEnd="center center"
                      textClassName="text-xl md:text-2xl lg:text-3xl text-white/90 font-medium leading-relaxed md:leading-[1.7]"
                    >
                      Orang bilang coding itu cuma soal ngetik barisan perintah buat mesin. Tapi buat gua, ini soal ngebangun dunia dari nol. Dari layar teks yang kosong, hingga akhirnya semua elemen menyatu jadi sebuah harmoni. Semua rasa frustrasi itu kebayar lunas pas ngeliat UI yang responsif dan performa yang ngebut. Karena pada akhirnya, kita gak cuma nulis kode buat komputer, tapi kita nyiptain jembatan buat interaksi manusia.
                    </ScrollReveal>
                  </div>

                </div>
              </div>
            </section>
            
            <>
              <TechStack />
              <FeaturedProjects />
              <section className="py-12 relative z-10 flex flex-col items-center justify-center">
  {/* --- BADGE STATUS --- */}
  <motion.div 
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    className="flex items-center gap-3 px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full shadow-lg"
  >
    {/* Lampu Indikator Kedap-Kedip */}
    <span className="relative flex h-3 w-3">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
    </span>
    
    <p className="text-sm md:text-base text-white/80 font-medium">
      Currently deep-diving into <span className="text-blue-400 font-bold">Backend Development</span> (Node.js & SQL)
    </p>
  </motion.div>

  {/* --- OPTIONAL: TEKS BERJALAN (SUBTLE) --- */}
  <div className="mt-8 overflow-hidden w-full max-w-4xl opacity-30 pointer-events-none">
    <motion.div 
      animate={{ x: ["0%", "-50%"] }}
      transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      className="flex whitespace-nowrap gap-10 text-4xl md:text-6xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white/20 to-white/5"
    >
      <span>Express.js • PostgreSQL • Rest API • System Design • Node.js • </span>
      <span>Express.js • PostgreSQL • Rest API • System Design • Node.js • </span>
    </motion.div>
  </div>
</section>
            </>
          
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}