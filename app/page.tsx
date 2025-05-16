"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import ParallaxHero from "@/components/parallax-hero"
import MouseFollower from "@/components/mouse-follower"
import ScrollProgress from "@/components/scroll-progress"
import AboutSection from "@/components/sections/AboutSection"
import SkillSection from "@/components/sections/SkillSection"
import PortfolioSection from "@/components/sections/PortfolioSection"
import AchievementSection from "@/components/sections/AchievementSection"
import ContactSection from "@/components/sections/ContactSection"
import FooterSection from "@/components/sections/FooterSection"

export default function Home() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Refs for scroll animations
  const skillsRef = useRef<HTMLDivElement | any>(null)
  const projectsRef = useRef<HTMLDivElement | any>(null)
  const aboutRef = useRef<HTMLDivElement | any>(null)
  const contactRef = useRef<HTMLDivElement | any>(null)

  // Scroll animations
  const { scrollYProgress } = useScroll()
  const headerOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 1])

  useEffect(() => {
    setMounted(true)
  }, [])

  

  const scrollToSection = (elementRef: React.RefObject<HTMLDivElement>) => {
    elementRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  if (!mounted) return null

  return (
    <main className="relative min-h-screen overflow-hidden">
      <MouseFollower />
      <ScrollProgress />

      {/* Floating header */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/10 dark:bg-black/10"
        style={{ opacity: headerOpacity }}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-gradient">
            Shounak
          </Link>
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex gap-6">
              <button onClick={() => scrollToSection(aboutRef)} className="nav-link">
                About
              </button>
              <button onClick={() => scrollToSection(skillsRef)} className="nav-link">
                Skills
              </button>
              <Link href='/about' className="nav-link">
                Experience
              </Link>
              <button onClick={() => scrollToSection(projectsRef)} className="nav-link">
                Projects
              </button>
              <button onClick={() => scrollToSection(contactRef)} className="nav-link">
                Contact
              </button>
            </nav>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
              className="relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-br from-primary/20 to-tertiary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              {theme === "dark" ? (
                <Sun className="h-5 w-5 relative z-10" />
              ) : (
                <Moon className="h-5 w-5 relative z-10" />
              )}
            </Button>
          </div>
        </div>
      </motion.header>

      {/* Hero Section with Parallax */}
      <ParallaxHero />

      {/* About Section */}
      <AboutSection aboutRef={aboutRef} />

      {/* Skills Section */}
      <SkillSection skillsRef={skillsRef} />

      {/* Portfolio Section */}
      <PortfolioSection projectsRef={projectsRef} />

      {/* Achievements Section */}
      <AchievementSection />

      {/* Contact Section */}
      <ContactSection contactRef={contactRef} />

      {/* Footer */}
      <FooterSection />
    </main>
  )
}
