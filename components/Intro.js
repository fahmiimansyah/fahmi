"use client"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const words = [
  "Hello",       // English
  "Halo",        // Indonesia
  "Hola",        // Spanish
  "Bonjour",     // French
  "Ciao",        // Italian     
  "Olá",         // Portuguese
  "Ni Hao",        // Chinese (Ni hao)
  "Konichiwa",  // Japanese (Konnichiwa)
  "Annyeonghaseyo",  // Korean (Annyeonghaseyo)
  "Привет",      // Russian (Privet)
  "مرحبا",       // Arabic (Marhaba)
]

export default function Intro({ onFinish }) {
  const [index, setIndex] = useState(0)

useEffect(() => {
  let timer;
  if (index < words.length - 1) {
    timer = setTimeout(() => setIndex(index + 1), 300);
  } else {
    timer = setTimeout(onFinish, 1800);
  }
  return () => clearTimeout(timer);
}, [index, onFinish]);

  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.h1
          key={words[index]}
          transition={{ duration: 0.1 }}
          className="text-black text-4xl md:text-6xl font-medium tracking-wide"
        >
          {words[index]}
        </motion.h1>
      </AnimatePresence>
    </div>
  )
}