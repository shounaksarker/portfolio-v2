"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface GlowingCardProps {
  children: React.ReactNode
  className?: string
}

export default function GlowingCard({ children, className }: GlowingCardProps) {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isDark = theme === "dark"

  return (
    <motion.div className="relative group" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
      <div
        className={cn(
          "absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl opacity-30 group-hover:opacity-100 blur group-hover:blur-md transition duration-1000",
          isDark ? "opacity-50" : "opacity-30",
        )}
      />
      <div className={cn("relative bg-white dark:bg-gray-900 rounded-xl", "glass", className)}>{children}</div>
    </motion.div>
  )
}
