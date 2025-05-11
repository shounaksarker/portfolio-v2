"use client";

import React from "react";
import { motion } from "framer-motion";
import InteractiveSkills from "@/components/interactive-skills";

const SkillSection = ({ skillsRef }: any) => {
  return (
    <section
      id="skills"
      ref={skillsRef}
      className="py-20 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-background to-transparent z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent z-10"></div>

      <div className="container px-4 mx-auto relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">
            <span className="relative inline-block">
              Skills & Technologies
              <motion.div
                className="absolute -bottom-3 left-0 h-1 bg-gradient-to-r from-primary to-secondary w-full"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
              />
            </span>
          </h2>

          <div className="mt-16">
            <InteractiveSkills />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillSection;
