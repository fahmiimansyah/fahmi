"use client"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import Navbar from "../../components/Navbar"
import ScrollReveal from '../../components/ScrollReveal';
import Hero from "../../components/Hero"
import Intro from "../../components/Intro"
import { useState, useEffect } from "react"
import MagicRings from "../../components/Background"
import fotoProfil from '../../public/Picsart_26-05-04_12-44-57-908.png';
import ProfileCard from "../../components/profileCard"
// import Link from "next/link" (kalo ada)

export default function Home() {
  const { scrollY } = useScroll();
  const ringOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  // 🔥 TAMBAHAN: State buat nahan render sampai useEffect jalan
  const [isMounted, setIsMounted] = useState(false);
  const [introDone, setIntroDone] = useState(false); 
  const mainBgColor = useTransform(scrollY, [0, 600], ["#0B0F19", "#2E1065"]);

  useEffect(() => {
    // Kasih tau app kalau komponen udah nempel di browser
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

  // 🔥 MENCEGAH KAGET (FLASH):
  // Pas pertama buka web, tahan pakai background hitam biar nyambung sama Intro
  if (!isMounted) return <div className="min-h-screen bg-black" />;

  return (
    <motion.div 
    className="min-h-screen overflow-hidden"
      style={{ backgroundColor: mainBgColor }}
>
      {/* 🔥 BUNGKUS PAKAI AnimatePresence: Biar pas ganti komponen ada transisinya */}
      <AnimatePresence mode="wait">
        {!introDone ? (
          
          // INTRO: Dikasih key="intro" dan exit opacity biar pas beres dia nge-fade out
          <motion.div 
            key="intro" 
            exit={{ opacity: 0 }} 
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <Intro onFinish={handleFinish} />
          </motion.div>

        ) : (

          // MAIN PAGE: Dikasih key="main" biar Framer Motion tau ini komponen baru
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
  <motion.div className="absolute inset-0 z-0 pointer-events-none"
  style={{opacity: ringOpacity}}>
  <MagicRings
    color="#A855F7"
    colorTwo="#6366F1"
    ringCount={6}
    speed={1}
    attenuation={10}
    lineThickness={2}
    baseRadius={0.35}
    radiusStep={0.1}
    scaleRate={0.1}
    opacity={1}
    blur={0}
    noiseAmount={0.1}
    rotation={0}
    ringGap={1.5}
    fadeIn={0.7}
    fadeOut={0.5}
    followMouse={false}
    mouseInfluence={0.2}
    hoverScale={1.2}
    parallax={0.05}
    clickBurst={false}
  />
</motion.div>
  <div className=" z-10 max-w-5xl w-full mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between">

    {/* --- BAGIAN KIRI: TEKS (Porsi 60%) --- */}
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="relative z-20 w-full md:w-[60%] flex flex-col items-center text-center"
    >
      {/* Nama + animasi (Font & margin dikecilin dikit) */}
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
        Front End Developer | I'know About Coding enough to be dangerous 😎
      </p>

      {/* --- BUNGKUSAN BARU (Glassmorphism Effect) --- */}
      <div className="mt-2 p-4 md:p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl flex flex-col items-center w-full max-w-xl">
        
        {/* WHO AM I */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          Saha ari kami?
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

    {/* --- BAGIAN KANAN: FOTO (Porsi 40%) --- */}
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="relative z-10 w-full md:w-[40%] flex justify-center mt-12 md:mt-0 md:-ml-24"
    >
      <ProfileCard
  name="Fahmi Imansyah"
  title="FrontEnd Develover"
  handle="javicodes"
  status="Online"
  contactText="Contact Me"
  avatarUrl= {fotoProfil.src}
  showUserInfo={false}
  enableTilt={true}
  enableMobileTilt={false}
  onContactClick={() => console.log('Contact clicked')}
  behindGlowColor="rgba(125, 190, 255, 0.67)"
  iconUrl="/assets/demo/iconpattern.png"
  behindGlowEnabled
  innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
/>
    </motion.div>

  </div>
  {/* 🔥 ANIMASI SCROLL DOWN (MURNI TEKS, HILANG DI HP) 🔥 */}
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
<section className="py-24 flex items-center justify-center relative z-10 border-t border-white/5">
              <div className="text-center p-4 max-w-5xl w-full">
                <ScrollReveal
  baseOpacity={0.1}
  enableBlur
  baseRotation={3}
  blurStrength={4}
  rotationEnd="center center" 
      wordAnimationEnd="center center"
>
  When does a man die? When he is hit by a bullet? No! When he suffers a disease?
  No! When he ate a soup made out of a poisonous mushroom?
  No! A man dies when he is forgotten!
</ScrollReveal>
              </div>
            </section>
            
          
          </motion.div>
          

        )}
      </AnimatePresence>

    </motion.div>
  )
}