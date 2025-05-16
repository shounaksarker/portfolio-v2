"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import propic from "@/assets/imgs/Others/snk-wht.png";
import { FastForward } from "lucide-react";

const AboutSection = ({ aboutRef }: any) => {
  return (
    <section
      id="about"
      ref={aboutRef}
      className="py-20 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-background to-transparent z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent z-10"></div>

      <div className="container px-4 mx-auto relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">
            <span className="relative inline-block">
              About Me
              <motion.div
                className="absolute -bottom-3 left-0 h-1 bg-gradient-to-r from-primary to-secondary w-full"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4 }}
              />
            </span>
          </h2>

          {/* <AboutMeSection /> */}
          <div className="max-w-4xl mx-auto mt-16">
            <div className="card-container p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1 text">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <h3 className="text-2xl font-semibold mb-4 text-gradient">
                      Working at Pathao
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      As a Software Engineer at Pathao, I work on developing and
                      maintaining scalable applications that serve thousands of
                      users daily. My responsibilities include frontend
                      development, API integration, and performance
                      optimization.
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      I specialize in creating high-performance web
                      applications, combining frontend creativity with backend
                      logic. With experience in both startup environments and
                      large-scale projects, I enjoy the challenge of turning
                      complex ideas into user-friendly digital experiences.
                    </p>
                    <div className="mt-12">
                      <Link href="/about">
                        <motion.button
                          whileHover={{
                            scale: 1.05,
                            boxShadow: "0 0 25px rgba(99,102,241,0.6)",
                          }}
                          whileTap={{ scale: 0.95 }}
                          className="relative w-full overflow-hidden rounded-lg bg-gradient-to-r from-primary/90 via-black to-secondary px-6 py-3 text-white font-bold shadow-lg transition-all duration-300 ease-in-out group"
                        >
                          <span className="flex items-center justify-center gap-3 z-10 relative">
                            Learn more about my experience
                            <motion.span
                              className="inline-block"
                              initial={{ x: 0 }}
                              animate={{ x: [0, 5, 0] }}
                              transition={{ repeat: Infinity, duration: 1.5 }}
                            >
                              <FastForward />
                            </motion.span>
                          </span>

                          <span className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition duration-1000 blur-sm bg-gradient-to-l from-black via-primary/70 to-secondary"></span>
                        </motion.button>
                      </Link>
                    </div>
                  </motion.div>
                </div>
                <div className="order-1 md:order-2 flex justify-center">
                  <motion.div
                    className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary/30"
                    initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
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
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
