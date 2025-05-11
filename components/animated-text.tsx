"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface AnimatedTextProps {
  text: string
}

export default function AnimatedText({ text }: AnimatedTextProps) {
  const [currentColorIndex, setCurrentColorIndex] = useState(0)
  const [animationKey, setAnimationKey] = useState(0)

  const colors = [
    "from-primary via-accent to-secondary",
    "from-secondary via-tertiary to-primary",
    "from-accent via-primary to-tertiary",
    "from-tertiary via-secondary to-accent",
  ]

  useEffect(() => {
    const colorInterval = setInterval(() => {
      setCurrentColorIndex((prev) => (prev + 1) % colors.length)
    }, 3000)

    const restartInterval = setInterval(() => {
      setAnimationKey((prev) => prev + 1)
    }, 9000)

    return () => {
      clearInterval(colorInterval)
      clearInterval(restartInterval)
    }
  }, [colors.length])

  const letters = Array.from(text)

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  }

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 500,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 500,
      },
    },
  }

  return (
    <motion.span
      key={animationKey} // triggers re-render and animation restart
      className={`inline-block font-bold bg-clip-text text-transparent bg-gradient-to-r ${colors[currentColorIndex]} glow-text`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={child}
          className="inline-block"
          whileHover={{
            scale: 1.5,
            rotate: Math.random() * 20 - 10,
            transition: { duration: 0.5 },
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.span>
  )
}
