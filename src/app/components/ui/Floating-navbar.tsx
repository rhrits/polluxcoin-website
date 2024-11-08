// src/app/components/ui/floating-navbar.tsx

"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils"; // Helper for classnames

// Floating Navbar Component
export const FloatingNav = ({ navItems, className }: { navItems: { name: string; link: string; icon?: JSX.Element }[]; className?: string }) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);

  // Detect scroll direction
  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious()!;
      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
        className={cn(
          "fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full bg-white dark:bg-black shadow-lg z-50 px-6 py-2 flex justify-center space-x-6",
          className
        )}
      >
        {navItems.map((navItem, idx) => (
          <Link
            key={idx}
            href={navItem.link}
            className={cn(
              "relative flex items-center space-x-1 text-neutral-600 dark:text-white hover:text-green-500"
            )}
          >
            <span>{navItem.icon}</span>
            <span className="hidden sm:block">{navItem.name}</span>
          </Link>
        ))}
        {/* Optional: Add a button or additional element */}
        <button className="text-sm font-medium text-black dark:text-white px-4 py-2 border border-neutral-200 dark:border-white/[0.2] rounded-full">
          <span>Get $POLLUX</span>
        </button>
      </motion.div>
    </AnimatePresence>
  );
};
