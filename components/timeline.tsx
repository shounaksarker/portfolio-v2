"use client";

import type React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

interface TimelineItemProps {
  title: string;
  institution: string;
  period: string;
  description: string | string[];
  tags?: string[];
}

export function TimelineItem({
  title,
  institution,
  period,
  description,
  tags,
}: TimelineItemProps) {
  return (
    <div className="mb-10 ml-6">
      <motion.span
        className="absolute flex items-center justify-center w-6 h-6 bg-purple-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-purple-900"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
      >
        <div className="w-3 h-3 rounded-full bg-purple-500"></div>
      </motion.span>
      <motion.div
        className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700 glass"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 100 }}
        whileHover={{
          y: -5,
          boxShadow:
            "0 10px 25px -5px rgba(124, 58, 237, 0.3), 0 8px 10px -6px rgba(124, 58, 237, 0.2)",
        }}
      >
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white gradient-text">
            {title}
          </h3>
          <time className="mb-1 text-sm font-normal text-gray-400 sm:order-last sm:mb-0">
            {period}
          </time>
        </div>
        <div className="text-base font-medium text-gray-600 dark:text-gray-500 mb-2">
          {institution}
        </div>
        {typeof description === "string" ? (
          <div className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            {description}
          </div>
        ) : (
          <ul className="leading-relaxed list-disc my-4 flex flex-col gap-y-4 text-gray-500 dark:text-gray-400 pl-4">
            {description.map((description, index) => (
              <li key={index}>{description}</li>
            ))}
          </ul>
        )}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Badge
                key={index}
                variant="outline"
                className="bg-purple-100/30 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 border-purple-300 dark:border-purple-700"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
}

export function Timeline({ children }: { children: React.ReactNode }) {
  return (
    <ol className="relative border-l border-gray-200 dark:border-gray-700 ml-3">
      {children}
    </ol>
  );
}
