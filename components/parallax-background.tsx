"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function ParallaxBackground() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "25%"])
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "35%"])

  return (
    <div ref={ref} className="absolute inset-0 -z-10 overflow-hidden">
      <motion.div className="absolute top-0 left-0 w-full h-full" style={{ y: y1 }}>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background/20" />
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10" />
      </motion.div>

      <motion.div
        className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-primary/20 blur-3xl mix-blend-multiply"
        style={{ y: y2 }}
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
        style={{ y: y3 }}
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
    </div>
  )
}
