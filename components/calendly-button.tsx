"use client"

import { useState, useEffect } from "react"
import { LucideCalendar } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { cn } from "@/lib/utils"

export default function CalendlyButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  const calendlyLink = "https://calendly.com/softtrail/briefing"

  useEffect(() => {
    // Show button after scrolling down a bit
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
        setShowTooltip(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    // Show button after 3 seconds even without scrolling
    const timer = setTimeout(() => {
      setIsVisible(true)

      // Show tooltip briefly
      setShowTooltip(true)
      setTimeout(() => setShowTooltip(false), 5000)
    }, 3000)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearTimeout(timer)
    }
  }, [])

  return (
    <div className="fixed bottom-[70px] xl:bottom-24 right-4 xl:right-6 z-50">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="absolute bottom-full right-0 mb-2 p-3 bg-white rounded-lg shadow-lg max-w-[200px] text-sm text-gray-700 font-medium"
          >
            Schedule a Call
            <div className="absolute bottom-[-6px] right-6 w-3 h-3 bg-white transform rotate-45"></div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            <Link
              href={calendlyLink}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "flex items-center justify-center w-12 xl:w-16 h-12 xl:h-16 rounded-full",
                "bg-gradient-to-r from-indigo-500 to-indigo-600",
                "text-white shadow-lg",
                "hover:shadow-indigo-500/30 hover:from-indigo-600 hover:to-indigo-700",
                "transition-all duration-300",
              )}
            >
              <LucideCalendar className="w-6 xl:w-8 h-6 xl:h-8" />
              <span className="sr-only">Schedule a Call</span>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

