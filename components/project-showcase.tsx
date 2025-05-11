"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronUp, Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import GlowingCard from "@/components/glowing-card"
import Image from "next/image"

interface Project {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl: string
  repoUrl: string
}

interface ProjectShowcaseProps {
  projects: Project[]
  activeProject: number
  setActiveProject: (index: number) => void
  showAllProjects: boolean
  setShowAllProjects: (show: boolean) => void
}

export default function ProjectShowcase({
  projects,
  activeProject,
  setActiveProject,
  showAllProjects,
  setShowAllProjects,
}: ProjectShowcaseProps) {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  // Display only first 4 projects unless showAllProjects is true
  const displayedProjects = showAllProjects ? projects : projects.slice(0, 4)

  return (
    <div className="space-y-12">
      {/* Featured Project */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeProject}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <GlowingCard className="overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                className="relative aspect-video overflow-hidden"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={projects[activeProject].image}
                  alt={projects[activeProject].title}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="p-6 flex flex-col">
                <motion.h3
                  className="text-2xl font-bold mb-3 gradient-text"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  {projects[activeProject].title}
                </motion.h3>
                <motion.p
                  className="text-gray-600 dark:text-gray-300 mb-6 flex-grow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  {projects[activeProject].description}
                </motion.p>
                <motion.div
                  className="flex flex-wrap gap-2 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  {projects[activeProject].technologies.map((tech, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </motion.div>
                <motion.div
                  className="flex gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <Link href={projects[activeProject].repoUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="gap-2 relative overflow-hidden group border-purple-500">
                      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <Github size={16} className="relative z-10" />
                      <span className="relative z-10">Repository</span>
                    </Button>
                  </Link>
                  <Link href={projects[activeProject].liveUrl} target="_blank" rel="noopener noreferrer">
                    <Button className="gap-2 relative overflow-hidden group">
                      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <ExternalLink size={16} className="relative z-10" />
                      <span className="relative z-10">Live Demo</span>
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </GlowingCard>
        </motion.div>
      </AnimatePresence>

      {/* Project Thumbnails */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {displayedProjects.map((project, index) => (
          <motion.div
            key={project.id}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => setHoveredProject(index)}
            onHoverEnd={() => setHoveredProject(null)}
            onClick={() => setActiveProject(projects.indexOf(project))}
            className={`cursor-pointer relative rounded-lg overflow-hidden aspect-video ${
              projects.indexOf(project) === activeProject ? "ring-2 ring-purple-500" : ""
            }`}
          >
            <Image
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex items-end"
              initial={{ opacity: 0 }}
              animate={{ opacity: hoveredProject === index || projects.indexOf(project) === activeProject ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="p-3">
                <h4 className="text-white text-sm font-medium truncate">{project.title}</h4>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Show More/Less Button */}
      {projects.length > 4 && (
        <div className="flex justify-center mt-8">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={() => setShowAllProjects(!showAllProjects)}
              variant="outline"
              className="gap-2 relative overflow-hidden group border-purple-500"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {showAllProjects ? (
                <>
                  <ChevronUp size={18} className="relative z-10" />
                  <span className="relative z-10">Show Less</span>
                </>
              ) : (
                <>
                  <ChevronDown size={18} className="relative z-10" />
                  <span className="relative z-10">Show More</span>
                </>
              )}
            </Button>
          </motion.div>
        </div>
      )}
    </div>
  )
}
