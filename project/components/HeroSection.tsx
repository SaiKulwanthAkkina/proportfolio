'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Download, Mail, FileText } from 'lucide-react';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const strings = [
    'Computer Science Student',
    'Software Developer Intern',
    'Java Developer',
    'Problem Solver',
    'AI Enthusiast',
    'Continuous Learner',
  ];

  // Typing animation effect
  useEffect(() => {
    const currentString = strings[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayText.length < currentString.length) {
          setDisplayText(currentString.slice(0, displayText.length + 1));
        } else {
          // Pause before deleting
          setTimeout(() => {
            setIsDeleting(true);
          }, 1000);
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          // Move to next string
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % strings.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex, strings]);

  // Cursor blink effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  } as const;

  const floatVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      y: [0, -20, 0] as number[],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut' as const,
      },
    },
  };

  const scrollIndicatorVariants = {
    animate: {
      y: [0, 10, 0] as number[],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut' as const,
      },
    },
  };

  const socialLinks: Array<
    | { name: string; url: string; icon: React.ReactNode }
    | { name: string; url: string; badge: string }
  > = [
    {
      name: 'GitHub',
      url: 'https://github.com/SaiKulwanthAkkina',
      icon: <Github size={20} />,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/sai-kulwanth-sharma-akkina/',
      icon: <Linkedin size={20} />,
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/SaiKulwanth/',
      badge: 'LC',
    },
    {
      name: 'Credly',
      url: 'https://www.credly.com/users/sai-kulwanth',
      badge: 'Cr',
    },
  ];

  const floatingTechs = ['Java', 'Python', 'React', 'Node.js', 'MySQL'];

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
    >
      {/* Floating tech icons */}
      <div className="hidden md:block absolute inset-0 pointer-events-none">
        {floatingTechs.map((tech, index) => (
          <motion.div
            key={tech}
            variants={floatVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="absolute text-xs font-semibold text-blue-400/30"
            style={{
              left: `${10 + (index * 18) % 70}%`,
              top: `${20 + (index * 25) % 60}%`,
            }}
          >
            {tech}
          </motion.div>
        ))}
      </div>

      {/* Main content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 gradient-text"
        >
          Sai Kulwanth Akkina
        </motion.h1>

        {/* Typing animation */}
        <motion.div
          variants={itemVariants}
          className="h-16 flex items-center justify-center"
        >
          <p className="text-xl sm:text-2xl md:text-3xl neon-text">
            {displayText}
            <span className={`ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`}>
              |
            </span>
          </p>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl md:text-2xl mb-6 neon-text"
        >
          Software Developer Intern
        </motion.p>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg md:text-xl text-slate-400 mb-8 max-w-2xl mx-auto"
        >
          Learning, Building, and Growing Through Code
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          {/* View Projects Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollTo('projects')}
            className="px-6 sm:px-8 py-3 border-2 border-blue-500 text-blue-400 rounded-lg font-semibold hover:bg-blue-500/10 transition-all duration-300 neon-glow"
          >
            View Projects
          </motion.button>

          {/* Download Resume Button */}
          <a
            href="https://drive.google.com/file/d/1_C_BPu2D-N8WFKI9viQ8LnifUvWBu_EU/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 sm:px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg font-semibold flex items-center gap-2 justify-center hover:shadow-lg neon-glow transition-all duration-300"
            >
              <FileText size={20} />
              Download Resume
            </motion.button>
          </a>

          {/* Contact Me Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollTo('contact')}
            className="px-6 sm:px-8 py-3 border-2 border-slate-400 text-slate-300 rounded-lg font-semibold hover:bg-slate-400/10 transition-all duration-300"
          >
            <div className="flex items-center gap-2 justify-center">
              <Mail size={20} />
              Contact Me
            </div>
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex gap-4 justify-center"
        >
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              title={link.name}
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-lg border border-slate-400/30 text-slate-300 flex items-center justify-center hover:border-blue-400/70 hover:text-blue-400 transition-all duration-300 neon-glow"
              >
                {'icon' in link ? link.icon : <span className="text-xs font-bold">{link.badge}</span>}
              </motion.button>
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        variants={scrollIndicatorVariants}
        animate="animate"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-blue-400/60"
      >
        <ChevronDown size={28} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
