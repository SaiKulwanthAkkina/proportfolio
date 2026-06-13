"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

interface SectionPosition {
  id: string;
  offset: number;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [sectionPositions, setSectionPositions] = useState<SectionPosition[]>(
    []
  );
  const navRef = useRef<HTMLDivElement>(null);

  const sections = [
    "home",
    "about",
    "internship",
    "skills",
    "projects",
    "education",
    "achievements",
    "certifications",
    "profiles",
    "contact",
  ];

  const navLinks = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Internship", id: "internship" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Education", id: "education" },
    { label: "Achievements", id: "achievements" },
    { label: "Certifications", id: "certifications" },
    { label: "Contact", id: "contact" },
  ];

  // Calculate section positions
  useEffect(() => {
    const calculatePositions = () => {
      const positions = sections
        .map((id) => {
          const element = document.getElementById(id);
          return {
            id,
            offset: element?.offsetTop ?? 0,
          };
        })
        .sort((a, b) => a.offset - b.offset);
      setSectionPositions(positions);
    };

    calculatePositions();
    window.addEventListener("resize", calculatePositions);
    return () => window.removeEventListener("resize", calculatePositions);
  }, []);

  // Track active section and scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(scrolled);

      // Determine active section
      let currentSection = "home";
      for (let i = sectionPositions.length - 1; i >= 0; i--) {
        if (scrollTop >= sectionPositions[i].offset - 100) {
          currentSection = sectionPositions[i].id;
          break;
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionPositions]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const handleLogoClick = () => {
    scrollToSection("home");
  };

  const containerVariants = {
    hidden: { y: -100 },
    visible: {
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const menuVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut" as const,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2,
        ease: "easeIn" as const,
      },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.4,
        ease: "easeOut" as const,
      },
    }),
  };

  const mobileMenuItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 + i * 0.08,
        duration: 0.4,
        ease: "easeOut" as const,
      },
    }),
  };

  return (
    <>
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 z-50"
        style={{ width: `${scrollProgress}%` }}
        initial={{ width: "0%" }}
      />

      {/* Navbar */}
      <motion.nav
        ref={navRef}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="fixed top-0 left-0 right-0 z-40 backdrop-blur-xl bg-black/40 border-b border-blue-500/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.button
              onClick={handleLogoClick}
              className="text-2xl md:text-3xl font-bold tracking-wider cursor-pointer relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-white relative z-10">SAK</span>
              <div className="absolute inset-0 bg-blue-500/30 blur-lg group-hover:bg-blue-400/40 transition-colors rounded-lg" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-300 blur-xl opacity-0 group-hover:opacity-30 transition-opacity rounded-lg" />
            </motion.button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2 lg:gap-1">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  variants={linkVariants}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                    activeSection === link.id
                      ? "text-blue-400"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.label}
                  {activeSection === link.id && (
                    <motion.div
                      layoutId="underline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400"
                      transition={{
                        type: "spring" as const,
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-30 md:hidden backdrop-blur-xl bg-black/60 border-b border-blue-500/10"
            style={{ top: "64px" }}
          >
            <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] gap-4 px-4">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  variants={mobileMenuItemVariants}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  className={`text-2xl font-semibold transition-colors ${
                    activeSection === link.id
                      ? "text-blue-400"
                      : "text-gray-300"
                  }`}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
