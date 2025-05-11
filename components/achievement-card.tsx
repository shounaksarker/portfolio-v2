"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Image, { StaticImageData } from "next/image";
import { useState, useEffect } from "react";

interface AchievementItem {
  title: string;
  issuer?: string;
  organization?: string;
  date?: string;
  description?: string;
  image: StaticImageData;
  grade?: string;
}

interface AchievementCardProps {
  item: AchievementItem;
  index: number;
}

export default function AchievementCard({ item }: AchievementCardProps) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20, scale: 0.9 },
        show: { opacity: 1, y: 0, scale: 1 },
      }}
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      }}
      whileHover={{
        scale: 1.05,
        y: -10,
        boxShadow: isDark
          ? "0 20px 25px -5px rgba(34, 197, 94, 0.3), 0 10px 10px -5px rgba(34, 197, 94, 0.2)"
          : "0 20px 25px -5px rgba(34, 197, 94, 0.2), 0 10px 10px -5px rgba(34, 197, 94, 0.1)",
      }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="card-container overflow-hidden h-full scale-[0.95] hover:scale-100 transition-transform">
        <div className="aspect-[8/3] relative overflow-hidden">
          <Image
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="p-6">
          <h3 className="font-semibold text-xl mb-2 text-gradient">
            {item.title}
          </h3>
          <div className="text-sm text-gray-500 dark:text-gray-400 mb-2 flex justify-between items-center">
            {item.issuer || item.organization}{" "}
            {item.grade && <span>Grade: {item.grade}</span>}
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {item.date || item.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
