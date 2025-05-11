"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Sun, Moon, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Timeline, TimelineItem } from "@/components/timeline";
import { education, experience } from "@/lib/data";
import { useState, useEffect } from "react";
import MouseFollower from "@/components/mouse-follower";
import PageTransition from "@/components/page-transition";
import ParallaxBackground from "@/components/parallax-background";
import FooterSection from "@/components/sections/FooterSection";
import Image from "next/image";
import propic from "@/assets/imgs/Others/snk-wht.png";

export default function AboutPage() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <PageTransition>
      <main className="min-h-screen relative">
        <MouseFollower />
        <ParallaxBackground />

        <div className="container px-4 mx-auto py-8">
          <div className="flex justify-between items-center mb-12">
            <Link href="/">
              <Button variant="ghost" className="gap-2 btn-hover">
                <ArrowLeft size={18} className="relative z-10" />
                <span className="relative z-10">Back to Home</span>
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
              className="btn-hover"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5 relative z-10" />
              ) : (
                <Moon className="h-5 w-5 relative z-10" />
              )}
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-12 text-center text-gradient"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              About Me
            </motion.h1>

            <div className="max-w-4xl mx-auto mb-20">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="card-container p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="order-2 md:order-1">
                      <p className="text-lg leading-relaxed mb-6">
                        I’m Shounak, a Software Engineer at Pathao Ltd., where I
                        build scalable, efficient web platforms that millions
                        use daily. I work across development and
                        optimization—creating new features, refining UI/UX, and
                        resolving system issues to improve performance and
                        reliability.
                      </p>
                      <p className="text-lg leading-relaxed">
                        From ride-sharing services to rewards and finance
                        modules, I focus on solving real-world problems through
                        thoughtful engineering and intuitive interfaces. I’m
                        passionate about clean code, performance, and crafting
                        seamless digital experiences.
                      </p>
                    </div>

                    <div className="order-1 md:order-2 flex justify-center">
                      <motion.div
                        className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary/30"
                        initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        whileHover={{ scale: 1.05, rotate: 2 }}
                      >
                        <Image
                          src={propic}
                          alt="Shounak"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Experience Section */}
            <section>
              <motion.h2
                className="text-3xl font-bold mb-10 text-center"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <span className="relative inline-block">
                  Work Experience
                  <motion.div
                    className="absolute -bottom-3 left-0 h-1 bg-gradient-to-r from-primary to-secondary w-full"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1, delay: 1.6 }}
                  />
                </span>
              </motion.h2>

              <div className="max-w-3xl mx-auto">
                <Timeline>
                  {experience.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 1.4 + index * 0.2 }}
                    >
                      <TimelineItem
                        title={item.position}
                        institution={item.company}
                        period={`${item.startDate} - ${
                          item.endDate || "Present"
                        }`}
                        description={item.description}
                        tags={item.technologies}
                      />
                    </motion.div>
                  ))}
                </Timeline>
              </div>
            </section>

            {/* Education Section */}
            <section className="mb-20">
              <motion.h2
                className="text-3xl font-bold mb-10 text-center"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <span className="relative inline-block">
                  Education
                  <motion.div
                    className="absolute -bottom-3 left-0 h-1 bg-gradient-to-r from-primary to-secondary w-full"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1, delay: 1 }}
                  />
                </span>
              </motion.h2>

              <div className="max-w-3xl mx-auto">
                <Timeline>
                  {education.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
                    >
                      <TimelineItem
                        title={item.degree}
                        institution={item.institution}
                        period={`${item.startYear} - ${item.endYear}`}
                        description={item.description}
                      />
                    </motion.div>
                  ))}
                </Timeline>
              </div>
            </section>
          </motion.div>
        </div>

        {/* Footer */}
        <FooterSection />
      </main>
    </PageTransition>
  );
}
