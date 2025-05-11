"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface Skill {
  name: string
  icon: string
  color: string
}

interface SkillIconProps {
  skill: Skill
}

export default function SkillIcon({ skill }: SkillIconProps) {
  return (
    <motion.div className="flex flex-col items-center" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
      <div className={`w-16 h-16 md:w-20 md:h-20 rounded-xl flex items-center justify-center mb-2 ${skill.color}`}>
        <Image src={skill.icon} alt={skill.name} className="w-10 h-10 md:w-12 md:h-12" />
      </div>
      <span className="text-sm font-medium">{skill.name}</span>
    </motion.div>
  )
}
