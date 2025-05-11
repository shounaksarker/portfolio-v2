"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"

export default function FloatingShapes() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isDark = theme === "dark"

  const shapes = [
    {
      shape: "circle",
      size: "w-32 h-32 md:w-48 md:h-48",
      position: "-top-10 -right-10",
      color: isDark ? "bg-purple-700" : "bg-purple-400",
      animation: {
        x: [0, 30, 0],
        y: [0, 40, 0],
        rotate: [0, 10, 0],
      },
      duration: 15,
    },
    {
      shape: "circle",
      size: "w-40 h-40 md:w-64 md:h-64",
      position: "-bottom-20 -left-20",
      color: isDark ? "bg-blue-700" : "bg-blue-400",
      animation: {
        x: [0, -30, 0],
        y: [0, -40, 0],
        rotate: [0, -10, 0],
      },
      duration: 18,
    },
    {
      shape: "rounded-xl",
      size: "w-24 h-24 md:w-32 md:h-32",
      position: "top-1/4 -left-10",
      color: isDark ? "bg-pink-700" : "bg-pink-400",
      animation: {
        x: [0, 20, 0],
        y: [0, -30, 0],
        rotate: [0, 20, 0],
      },
      duration: 12,
    },
    {
      shape: "rounded-xl",
      size: "w-20 h-20 md:w-28 md:h-28",
      position: "bottom-1/4 -right-5",
      color: isDark ? "bg-teal-700" : "bg-teal-400",
      animation: {
        x: [0, -15, 0],
        y: [0, 25, 0],
        rotate: [0, -15, 0],
      },
      duration: 14,
    },
  ]

  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className={`absolute ${shape.position} ${shape.size} ${shape.shape} ${shape.color} mix-blend-multiply filter blur-3xl opacity-30`}
          animate={shape.animation}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: shape.duration,
            ease: "easeInOut",
            repeatType: "reverse",
          }}
        />
      ))}
    </div>
  )
}
