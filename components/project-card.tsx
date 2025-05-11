"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"
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

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <motion.div
        className="relative aspect-video overflow-hidden"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3 }}
      >
        <Image src={project.image} alt={project.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 w-full">
            <div className="flex gap-2 justify-end">
              <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                <Button size="sm" variant="secondary" className="gap-1">
                  <Github size={14} />
                  Repo
                </Button>
              </Link>
              <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <Button size="sm" className="gap-1">
                  <ExternalLink size={14} />
                  Live
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.technologies.map((tech, index) => (
            <Badge key={index} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  )
}
