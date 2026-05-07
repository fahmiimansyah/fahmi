"use client"

import {
  motion,
  AnimatePresence,
  LazyMotion,
  domAnimation,
} from "framer-motion"

import Navbar from "../../components/Navbar"
import ScrollReveal from "../../components/ScrollReveal"
import Hero from "../../components/Hero"
import Intro from "../../components/Intro"
import { useState, useEffect } from "react"

import fotoProfil from "../../public/Picsart_26-05-04_12-44-57-908.png"

import ProfileCard from "../../components/profileCard"
import TechStack from "../../components/TechStack"
import FeaturedProjects from "../../components/Project"

export default function Home() {
  const [isMounted, setIsMounted] = useState(false)
  const [introDone, setIntroDone] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    const played = sessionStorage.getItem("introPlayed") === "true"
    setIntroDone(played)
  }, [])

  const handleFinish = () => {
    setIntroDone(true)
    sessionStorage.setItem("introPlayed", "true")
  }

  const items = [
    {
      label: "About Me",
      bgColor: "#1B1722",
      textColor: "#fff",
      links: [{ label: "My Story", href: "/about" }],
    },
    {
      label: "E-Learning Journey",
      bgColor: "#2F293A",
      textColor: "#fff",
      links: [{ label: "Case Studies", href: "/projects" }],
    },
    {
      label: "Contact",
      bgColor: "#2F293A",
      textColor: "#fff",
      links: [{ label: "Lets Connect", href: "/contact" }],
    },
  ]

  if (!isMounted) {
    return <div className="min-h-screen bg-black" />
  }

  return (
    <LazyMotion features={domAnimation}>
      <motion.div className="min-h-screen overflow-x-hidden bg-slate-950 bg-[radial-gradient(circle_700px_at_50%_-100px,#3b0764,transparent)] text-white">
        
        <AnimatePresence mode="wait">
          {!introDone ? (
            <motion.div
              key="intro"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
            >
              <Intro onFinish={handleFinish} />
            </motion.div>
          ) : (
            <motion.div
              key="main"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
            >
              {/* NAVBAR */}
              <Navbar
                className="!fixed !top-6 left-1/2 -translate-x-1/2 z-50"
                logo={"/iconF.svg"}
                items={items}
                baseColor="#fff"
                menuColor="#000"
                buttonBgColor="#111"
                buttonTextColor="#fff"
              />

              {/* HERO SECTION */}
              <section className="relative min-h-screen flex items-center justify-center pt-32 md:pt-0 overflow-hidden">
                
                <div className="z-10 max-w-5xl w-full mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between">
                  
                  {/* LEFT */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 70,
                      damping: 18,
                      delay: 0.1,
                    }}
                    style={{ willChange: "transform, opacity" }}
                    className="relative z-20 w-full md:w-[60%] flex flex-col items-center text-center transform-gpu"
                  >
                    <div className="flex items-center justify-center gap-2 flex-wrap w-full mb-1">
                      <h1 className="text-2xl md:text-3xl text-white font-bold">
                        Hi, I&rsquo;m
                      </h1>

                      <Hero
                        texts={["Fahmi", "Imansyah"]}
                        mainClassName="px-3 bg-blue-500 text-white py-1 rounded-lg text-3xl md:text-5xl font-semibold shadow-lg"
                        staggerFrom="last"
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-120%" }}
                        staggerDuration={0.02}
                        splitLevelClassName="overflow-hidden"
                        transition={{
                          type: "spring",
                          damping: 22,
                          stiffness: 180,
                        }}
                        rotationInterval={2500}
                        splitBy="words"
                        auto
                        loop
                      />
                    </div>

                    <p className="text-white/90 text-base md:text-lg mb-6">
                      I know About Coding enough to be dangerous 👨‍💻
                    </p>

                    <div className="mt-2 p-4 md:p-6 bg-white/5 border border-white/10 rounded-2xl shadow-xl flex flex-col items-center w-full max-w-xl">
                      
                      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                        Saha ari Kaula?
                      </h2>

                      <p className="text-white/90 text-base md:text-lg leading-snug mb-4 text-center">
                        Gua adalah seorang Front End Developer yang suka banget
                        ngulik teknologi web modern. Gua percaya kalau website
                        itu gak cuma soal barisan kode, tapi soal gimana kita
                        ngebangun{" "}
                        <span className="text-white font-extrabold">
                          vibe dan experience
                        </span>{" "}
                        yang mulus buat user.
                      </p>

                      <p className="text-white/90 text-base md:text-lg leading-snug text-center">
                        Sebagai seorang <i>self-taught coder</i>, gua selalu haus
                        buat eksplorasi hal baru. Mulai dari ngeracik UI yang
                        interaktif, ngatur animasi biar web terasa hidup, sampai
                        mastiin performanya tetep ngebut.{" "}
                        <i>Let&rsquo;s build something awesome!</i>
                      </p>
                    </div>
                  </motion.div>

                  {/* RIGHT */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 70,
                      damping: 18,
                      delay: 0.25,
                    }}
                    style={{ willChange: "transform, opacity" }}
                    className="relative z-10 w-full md:w-[40%] flex justify-center mt-12 md:mt-0 md:-ml-24 transform-gpu"
                  >
                    <ProfileCard
                      name="Fahmi"
                      title="Front-End Developer"
                      handle="Fahmi"
                      status="Online"
                      contactText=".dev"
                      priority
                      avatarUrl={fotoProfil.src}
                      showUserInfo={true}
                      enableTilt={
                        typeof window !== "undefined" &&
                        window.innerWidth > 768
                      }
                      enableMobileTilt={false}
                      behindGlowColor="rgba(125, 190, 255, 0.67)"
                      iconUrl="/code-icon.svg"
                      behindGlowEnabled={false}
                      innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
                    />
                  </motion.div>
                </div>

                {/* SCROLL TEXT */}
                <div className="hidden md:flex absolute bottom-5 left-1/2 -translate-x-1/2 justify-center z-20 cursor-pointer">
                  <motion.div
                    animate={{
                      opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 3,
                      ease: "easeInOut",
                    }}
                    className="text-white/80 font-semibold tracking-[0.35em] uppercase text-lg"
                  >
                    Scroll Down
                  </motion.div>
                </div>
              </section>

              {/* MANIFESTO */}
              <section className="py-32 flex items-center justify-center relative z-10">
                
                <div className="w-full max-w-5xl mx-auto px-4 md:px-8">
                  
                  <div className="relative bg-[#1a1423]/70 border border-white/10 rounded-3xl p-8 md:p-16 shadow-2xl flex flex-col items-center text-center overflow-hidden">
                    
                    <div className="absolute -top-40 -left-40 w-96 h-96 bg-[radial-gradient(circle,rgba(168,85,247,0.10)_0%,transparent_70%)] pointer-events-none" />

                    <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[radial-gradient(circle,rgba(99,102,241,0.10)_0%,transparent_70%)] pointer-events-none" />

                    <div className="relative z-10 mb-8 md:mb-12">
                      <span className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-purple-300 shadow-sm">
                        Developer&apos;s Manifesto
                      </span>
                    </div>

                    <div className="relative z-10 w-full max-w-4xl mx-auto">
                      <ScrollReveal
                        baseOpacity={0.25}
                        enableBlur={false}
                        baseRotation={0}
                        blurStrength={1}
                        rotationEnd="center center"
                        wordAnimationEnd="center center"
                        textClassName="text-xl md:text-2xl lg:text-3xl text-white/90 font-medium leading-relaxed md:leading-[1.7]"
                      >
                        Orang bilang coding itu cuma soal ngetik barisan
                        perintah buat mesin. Tapi buat gua, ini soal ngebangun
                        dunia dari nol. Dari layar teks yang kosong, hingga
                        akhirnya semua elemen menyatu jadi sebuah harmoni.
                        Semua rasa frustrasi itu kebayar lunas pas ngeliat UI
                        yang responsif dan performa yang ngebut. Karena pada
                        akhirnya, kita gak cuma nulis kode buat komputer, tapi
                        kita nyiptain jembatan buat interaksi manusia.
                      </ScrollReveal>
                    </div>
                  </div>
                </div>
              </section>

              {/* OTHER SECTION */}
              <>
                <TechStack />
                <FeaturedProjects />

                <section className="py-12 relative z-10 flex flex-col items-center justify-center">
                  
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      stiffness: 80,
                      damping: 20,
                    }}
                    className="flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full shadow-lg"
                  >
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                    </span>

                    <p className="text-sm md:text-base text-white/80 font-medium">
                      Currently deep-diving into{" "}
                      <span className="text-blue-400 font-bold">
                        Backend Development
                      </span>{" "}
                      (Node.js & SQL)
                    </p>
                  </motion.div>

                  {/* RUNNING TEXT */}
                  <div className="mt-8 overflow-hidden w-full max-w-4xl opacity-20 pointer-events-none">
                    <motion.div
                      animate={{ x: ["0%", "-50%"] }}
                      transition={{
                        repeat: Infinity,
                        duration: 28,
                        ease: "linear",
                      }}
                      className="flex whitespace-nowrap gap-10 text-4xl md:text-6xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white/20 to-white/5"
                    >
                      <span>
                        Express.js • PostgreSQL • Rest API • System Design •
                        Node.js •
                      </span>

                      <span>
                        Express.js • PostgreSQL • Rest API • System Design •
                        Node.js •
                      </span>
                    </motion.div>
                  </div>
                </section>

                {/* FOOTER */}
                <footer className="w-full border-t border-white/10 py-8 bg-slate-950/50 mt-auto">
                  <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center justify-center space-y-2">
                    
                    <p className="text-white/60 text-sm md:text-base font-medium tracking-wide">
                      Crafted with passion by Fahmi Imansyah
                    </p>

                    <p className="text-white/40 text-xs md:text-sm">
                      © {new Date().getFullYear()} All rights reserved. Built
                      with Next.js & Framer Motion.
                    </p>
                  </div>
                </footer>
              </>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </LazyMotion>
  )
}