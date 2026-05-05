"use client"
import { motion, useMotionValue, useTransform, animate } from "framer-motion"
import { useEffect } from "react"
import { 
  SiNextdotjs, 
  SiReact, 
  SiNodedotjs, 
  SiJavascript, 
  SiGithub,
  SiGit,
  SiTailwindcss,
  SiHtml5,
  SiMysql
} from "react-icons/si"

// 🔥 COMPONENT COUNTER
function Counter({ value }) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, latest => Math.round(latest))

  useEffect(() => {
    const controls = animate(count, value, {
      duration: 1.5,
      ease: "easeOut"
    })
    return controls.stop
  }, [value])

  return <motion.span>{rounded}</motion.span>
}

// 🔥 MAIN STACK
const techTools = [
  { name: "Next.js", level: 80, icon: <SiNextdotjs className="w-10 h-10" />, color: "text-white" },
  { name: "React", level: 85, icon: <SiReact className="w-10 h-10" />, color: "text-blue-500" },
  { name: "Node.js", level: 70, icon: <SiNodedotjs className="w-10 h-10" />, color: "text-green-500" },
  { name: "JavaScript", level: 88, icon: <SiJavascript className="w-10 h-10" />, color: "text-yellow-400" },
  { name: "Tailwind", level: 90, icon: <SiTailwindcss className="w-10 h-10" />, color: "text-cyan-400" },
  { name: "HTML", level: 95, icon: <SiHtml5 className="w-10 h-10" />, color: "text-orange-500" },
  { name: "SQL", level: 65, icon: <SiMysql className="w-10 h-10" />, color: "text-blue-400" },
]

// 🔥 BONUS
const bonusTools = [
  { name: "GitHub", level: 80, icon: <SiGithub className="w-10 h-10" />, color: "text-neutral-300" },
  { name: "Git", level: 75, icon: <SiGit className="w-10 h-10" />, color: "text-orange-500" },
]

export default function TechStack() {
  return (
    <section className="py-24 relative z-10 w-full max-w-5xl mx-auto px-4 md:px-8">
      
      {/* TITLE */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Tech Stack
        </h2>
        <p className="text-white/70 max-w-2xl mx-auto">
          Skill utama buat ngebangun web modern & scalable.
        </p>
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
        {techTools.map((tech, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center p-5 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl hover:border-white/30 hover:bg-white/10"
          >
            
            {/* ICON */}
            <div className={`mb-3 ${tech.color}`}>
              {tech.icon}
            </div>

            {/* NAME */}
            <span className="text-white text-sm mb-2">
              {tech.name}
            </span>

            {/* 🔥 COUNTER */}
            <div className="text-white text-sm mb-2">
              <Counter value={tech.level} />%
            </div>

            {/* PROGRESS BAR */}
            <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: `${tech.level}%` }}
                transition={{ duration: 1 }}
                className="h-full bg-white"
              />
            </div>

          </motion.div>
        ))}
      </div>

      {/* BONUS */}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-semibold text-white">
          Bonus Skill
        </h3>
      </div>

      <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
        {bonusTools.map((tech, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center p-5 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl hover:border-white/30 hover:bg-white/10"
          >
            <div className={`mb-3 ${tech.color}`}>
              {tech.icon}
            </div>

            <span className="text-white text-sm mb-2">
              {tech.name}
            </span>

            {/* COUNTER */}
            <div className="text-white text-sm mb-2">
              <Counter value={tech.level} />%
            </div>

            <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: `${tech.level}%` }}
                transition={{ duration: 1 }}
                className="h-full bg-white"
              />
            </div>

          </motion.div>
        ))}
      </div>

    </section>
  )
}