"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Instagram, Mail } from "lucide-react"
import Link from "next/link"

export default function SocialLinks() {
  const socialLinks = [
    { icon: <Github size={20} />, href: "https://github.com/shounaksarker", label: "GitHub" },
    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/shounaksarker/", label: "LinkedIn" },
    // { icon: <Twitter size={20} />, href: "https://twitter.com/shounak", label: "Twitter" },
    { icon: <Instagram size={20} />, href: "https://www.instagram.com/helpful_virus/", label: "Instagram" },
    { icon: <Mail size={20} />, href: "mailto:shounaksarker@gmail.com", label: "Email" },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 300 } },
  }

  return (
    <motion.div
      className="flex space-x-4"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {socialLinks.map((link, index) => (
        <motion.div
          key={index}
          variants={item}
          whileHover={{
            scale: 1.1,
            boxShadow: "0 0 15px rgba(124, 58, 237, 0.5)",
            borderRadius: "10px"
          }}
          whileTap={{ scale: 0.9 }}
        >
          <Link
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
            aria-label={link.label}
          >
            {link.icon}
          </Link>
        </motion.div>
      ))}
    </motion.div>
  )
}
