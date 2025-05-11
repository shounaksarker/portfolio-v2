"use client";

import React from "react";
import { motion } from "framer-motion";
import { achievements } from "@/lib/data";
import AchievementCard from "@/components/achievement-card";

const AchievementSection = ({ achievementsRef }: any) => {
  return (
    <section
      id="achievements"
      ref={achievementsRef}
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
              Achievements
              <motion.div
                className="absolute -bottom-3 left-0 h-1 bg-gradient-to-r from-primary to-secondary w-full"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
              />
            </span>
          </h2>

          <div className="max-w-4xl mx-auto mt-16">
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.2,
                  },
                },
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
            >
              {[...achievements.certificates, ...achievements.awards].map(
                (item, index) => (
                  <AchievementCard key={index} item={item} index={index} />
                )
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementSection;
