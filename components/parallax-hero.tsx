"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronDown, Github, FileText } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import AnimatedText from "@/components/animated-text"

export default function ParallaxHero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  // Parallax effects
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  // Floating shapes
  const shape1Y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const shape2Y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const shape3Y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"])

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden border-b shadow-md">
      {/* Background layers */}
      <motion.div className="absolute inset-0 -z-30" style={{ y: backgroundY }}>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background/20" />
      </motion.div>

      {/* Floating shapes */}
      <motion.div
        className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-primary/20 blur-3xl mix-blend-multiply"
        style={{ y: shape1Y }}
        animate={{
          x: [0, 20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 15,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-40 left-[15%] w-80 h-80 rounded-full bg-secondary/20 blur-3xl mix-blend-multiply"
        style={{ y: shape2Y }}
        animate={{
          x: [0, -30, 0],
          rotate: [0, -8, 0],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 18,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-1/3 left-[20%] w-40 h-40 rounded-full bg-accent/20 blur-3xl mix-blend-multiply"
        style={{ y: shape3Y }}
        animate={{
          x: [0, 15, 0],
          y: [0, -20, 0],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 12,
          ease: "easeInOut",
        }}
      />

      {/* Content */}
      <motion.div className="container px-4 mx-auto text-center z-10" style={{ y: textY, opacity: opacityText }}>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="text-5xl md:text-8xl font-bold mb-6">
              Hi, I'm <AnimatedText text="Shounak" />
            </h1>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h2 className="text-2xl md:text-4xl font-medium mb-8">
              <span className="relative">
                <span className="relative z-10">Software Engineer</span>
                <motion.span
                  className="absolute bottom-0 left-0 h-3 bg-primary/30 w-full -z-0"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 1.2 }}
                />
              </span>
            </h2>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl max-w-2xl mx-auto mb-10"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            I build exceptional digital experiences with modern technologies. Passionate about creating intuitive and
            performant applications that leave a lasting impression.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <Link href="https://github.com/shounaksarker" target="_blank" rel="noopener noreferrer">
              <Button className="gap-2 btn-gradient">
                <Github size={18} className="relative z-10" />
                <span className="relative z-10">GitHub</span>
              </Button>
            </Link>
            <Link href="https://drive.google.com/file/d/1BIsTvUnUPIuJqoU2MQ7OUJEHDj-KsVev/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="gap-2 btn-hover border-primary">
                <FileText size={18} className="relative z-10" />
                <span className="relative z-10">Resume</span>
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{
              y: [0, 10, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 2,
              ease: "easeInOut",
            }}
          >
            <ChevronDown className="h-8 w-8 text-primary" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
