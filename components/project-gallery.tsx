"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

interface Project {
  id: string;
  title: string;
  description: string;
  image: StaticImageData;
  technologies: string[];
  liveUrl: string;
  repoUrl?: string;
}

interface ProjectGalleryProps {
  projects: Project[];
  showCaseRef: React.RefObject<HTMLDivElement | null>;
}

export default function ProjectGallery({
  projects,
  showCaseRef,
}: ProjectGalleryProps) {
  const [activeProject, setActiveProject] = useState(0);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [isHovering, setIsHovering] = useState<number | null>(null);

  // Display only first 4 projects unless showAllProjects is true
  const displayedProjects = showAllProjects ? projects : projects.slice(0, 4);

  return (
    <div className="space-y-16" ref={showCaseRef}>
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
          <div className="card-container overflow-hidden">
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
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
              <div className="p-6 flex flex-col">
                <motion.h3
                  className="text-2xl font-bold mb-3 text-gradient"
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
                      className="bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-foreground"
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
                  {projects[activeProject].repoUrl && (
                    <Link
                      href={projects[activeProject].repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="gap-2 btn-gradient">
                        <Github size={16} className="relative z-10" />
                        <span className="relative z-10">View Code</span>
                      </Button>
                    </Link>
                  )}
                  <Link
                    href={projects[activeProject].liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="gap-2 btn-gradient">
                      <ExternalLink size={16} className="relative z-10" />
                      <span className="relative z-10">Live Demo</span>
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Project Grid */}
      <div>
        <h3 className="text-xl font-semibold mb-6 text-center">
          Browse Projects
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="project-card"
              onMouseEnter={() => setIsHovering(index)}
              onMouseLeave={() => setIsHovering(null)}
              onClick={() => {
                setActiveProject(projects.indexOf(project));
                showCaseRef.current?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <div className="relative aspect-video overflow-hidden cursor-pointer">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex items-end transition-opacity duration-300 ${
                    isHovering === index ||
                    projects.indexOf(project) === activeProject
                      ? "opacity-100"
                      : "opacity-0"
                  }`}
                >
                  <div className="p-4 w-full">
                    <h4 className="text-white text-lg font-medium truncate">
                      {project.title}
                    </h4>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {project.technologies.slice(0, 2).map((tech, i) => (
                        <Badge
                          key={i}
                          variant="outline"
                          className="text-xs text-white border-white/30"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 2 && (
                        <Badge
                          variant="outline"
                          className="text-xs text-white border-white/30"
                        >
                          +{project.technologies.length - 2}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>

                {/* Active indicator */}
                {projects.indexOf(project) === activeProject && (
                  <div className="absolute top-2 right-2">
                    <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Show More/Less Button */}
      {projects.length > 4 && (
        <div className="flex justify-center mt-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Button
              onClick={() => setShowAllProjects(!showAllProjects)}
              variant="outline"
              className="gap-2 btn-hover border-primary"
            >
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
  );
}
