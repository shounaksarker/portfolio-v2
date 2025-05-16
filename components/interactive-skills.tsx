"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skills } from "@/lib/data";
import Image from "next/image";

export default function InteractiveSkills() {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  const allSkills = Object.values(skills).flat();
  const activeSkillData = allSkills.find((skill) => skill.name === activeSkill);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  const visibleEntries = showAll
    ? Object.entries(skills)
    : Object.entries(skills).slice(0, 1); // Only first section (e.g., "Frontend")

  return (
    <div className="relative space-y-12">
      {/* === Skill Modal === */}
      <AnimatePresence>
        {activeSkill && activeSkillData && (
          <motion.div
            className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            // onClick={() => setActiveSkill(null)}
          >
            <motion.div
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-6 max-w-xl w-full relative z-50"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-xl"
                onClick={() => setActiveSkill(null)}
              >
                ✕
              </button>

              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="w-20 h-20 flex items-center justify-center">
                  <Image
                    src={activeSkillData.icon || "/placeholder.svg"}
                    alt={activeSkill}
                    className="w-16 h-16"
                    width={64}
                    height={64}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-gradient">
                    {activeSkill}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">
                    {activeSkillData.description ||
                      `Advanced proficiency in ${activeSkill} with several years of experience building production applications.`}
                  </p>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <motion.div
                      className="bg-gradient-to-r from-primary to-secondary h-2.5 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${activeSkillData.level || 85}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    />
                  </div>
                  {/* <div className="flex justify-between mt-1 text-xs text-gray-500 dark:text-gray-400">
                    <span>Beginner</span>
                    <span>Expert</span>
                  </div> */}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>


      {/* === Animated Skills Sections === */}
      <AnimatePresence initial={false}>
        {visibleEntries.map(([category, skillList]) => (
          <motion.section
            key={category}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 capitalize mb-4 text-cente underline underline-offset-2">
              {category.replace(/_/g, " ")}
            </h2>
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:justify-center"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
            >
              {skillList.map((skill, idx) => (
                <motion.div
                  key={skill.name}
                  variants={item}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow:
                      "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }}
                  className="skill-card"
                  // onClick={() => setActiveSkill(skill.name)}
                >
                  <div className="flex flex-col items-center relative">
                    <div
                      className={`w-16 h-16 md:w-20 md:h-20 rounded-xl flex items-center justify-center mb-3 ${skill.color}`}
                    >
                      <motion.div
                        whileHover={{ rotate: 10 }}
                        transition={{ type: "spring", stiffness: 200 }}
                        className="w-10 h-10 md:w-12 md:h-12"
                      >
                        <Image
                          src={skill.icon}
                          alt={skill.name}
                          width={48}
                          height={48}
                          className="w-full h-full"
                        />
                      </motion.div>
                    </div>
                    <span className="text-sm font-medium">{skill.name}</span>
                    <motion.div
                      className="absolute bottom-2 right-2 w-2 h-2 rounded-full bg-primary"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.7, 1, 0.7],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 2,
                        ease: "easeInOut",
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>
        ))}
        {/* === See More / See Less Button === */}
      <div className="flex justify-center mb-6">
        <motion.button
          whileHover={{
            boxShadow: "0 0 20px rgba(255, 99, 132, 0.6)",
          }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 text-lg font-bold rounded-full bg-gradient-to-r from-primary to-secondary text-white shadow-xl ring-2 ring-white/20 hover:ring-white/30 transition duration-300"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "✨ See Less" : "🌤 See More Skills"}
        </motion.button>
      </div>
      </AnimatePresence>
    </div>
  );
}
