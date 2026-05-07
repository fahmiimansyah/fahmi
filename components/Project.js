"use client"
import { motion } from "framer-motion"

export default function FeaturedProjects() {
  // Data dummy buat project lu (Nanti lu ganti sama NaXaShop atau project HSR)
  const projects = [
    {
      title: "Copy CodaShop",
      description: "Platform top-up game dengan UI/UX yang mulus dan proses checkout yang cepat.",
      tech: ["HTML", "CSS", "JavaScript", "Node.js", "MySQL", "Express.js"],
      link: "#",
      // Gambar sementara, ganti sama path screenshot lu nanti
      imgSrc: "/sscoda.png" 
    },
    {
      title: "Honkai Star Rail Guide",
      description: "Web interaktif buat panduan build karakter HSR. Fiturnya lengkap dan responsif.",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "https://fahmiimansyah.github.io/Build-Cyrene-HSR",
      imgSrc: "/ssCyrene.png"
    }
  ]

  // Variants buat animasi Framer Motion (Biar mirip feel Reactbits)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2 // Munculin card satu per satu
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 12 }
    }
  }

  return (
    <section className="py-24 relative z-10 w-full max-w-6xl mx-auto px-4 md:px-8 border-t border-white/5">
      
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
          Featured Works.
        </h2>
        <p className="text-white/70 text-base md:text-xl max-w-2xl mx-auto leading-relaxed">
          Beberapa hasil ngulik kode malam-malam. Dari ngatur <span className="text-white font-semibold">state management</span> sampai nge-<i>tweak</i> <span className="text-white font-semibold">pixel-perfect</span> UI. Gak sekadar jalan, tapi harus enak dilihat.
        </p>
      </motion.div>

      {/* Grid Project Cards */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }} // Animasi mulai dikit sebelum masuk layar
      >
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            variants={cardVariants}
            className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 transition-all duration-300"
          >
            {/* Bagian Gambar */}
            <div className="relative h-64 overflow-hidden bg-gray-800">
                {/* Ganti ini sama tag <img /> atau <Image /> dari Next.js nanti */}
              <img  className="absolute inset-0 flex items-center justify-center text-white/50 bg-neutral-800/80 group-hover:scale-105 transition-transform duration-500"
                src={project.imgSrc}
                alt={project.title} />
              
              
              {/* Overlay pas di-hover */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                 <a 
                   href={project.link} 
                   className="px-6 py-2 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300"
                 >
                   View Project
                 </a>
              </div>
            </div>

            {/* Bagian Info */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-3">
                {project.title}
              </h3>
              <p className="text-white/70 mb-6 leading-relaxed text-sm md:text-base">
                {project.description}
              </p>
              
              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span 
                    key={techIndex} 
                    className="px-3 py-1 text-xs font-medium text-white/80 bg-white/10 rounded-full border border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

    </section>
  )
}