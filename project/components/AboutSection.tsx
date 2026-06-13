"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Users,
  Zap,
  Brain,
  Target,
  Lightbulb,
  Award,
  BookOpen,
  Cloud,
} from "lucide-react";

const AboutSection: React.FC = () => {
  const paragraphs = [
    "Hi, I'm Sai Kulwanth Akkina, a Computer Science student and Software Developer Intern passionate about technology, programming, and building meaningful software solutions.",
    "I enjoy learning new technologies, solving problems, and transforming ideas into real-world applications through code.",
    "Currently pursuing a B.Tech in Computer Science and Engineering while continuously improving my programming, web development, and problem-solving skills.",
    "My goal is to grow as a skilled developer capable of creating impactful solutions and contributing to innovative technology projects.",
  ];

  const traits = [
    { label: "Software Developer Intern", icon: Code2 },
    { label: "B.Tech CSE Student", icon: BookOpen },
    { label: "Fast Learner", icon: Zap },
    { label: "Team Player", icon: Users },
    { label: "Problem Solver", icon: Target },
    { label: "Tech Enthusiast", icon: Lightbulb },
  ];

  const stats = [
    { label: "3+ Projects", icon: Code2 },
    { label: "AWS Certified", icon: Cloud },
    { label: "Azure AI Certified", icon: Brain },
    { label: "200+ LeetCode Problems", icon: Target },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const slideInVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section
      id="about"
      className="py-20 md:py-32 px-4 md:px-8 bg-black text-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent gradient-text">
              About Me
            </span>
          </h2>

          {/* Decorative Line with Gradient Dots */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-1 w-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
            <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50"></div>
            <div className="w-2 h-2 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50"></div>
            <div className="w-2 h-2 rounded-full bg-purple-600 shadow-lg shadow-purple-600/50"></div>
            <div className="h-1 w-12 bg-gradient-to-l from-purple-600 to-blue-500 rounded-full"></div>
          </div>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Paragraphs */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                variants={itemVariants}
                className="text-lg text-gray-300 leading-relaxed"
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>

          {/* Right Column - Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Who I Am Card */}
            <motion.div
              variants={slideInVariants}
              className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-md border border-cyan-500/30 rounded-lg p-6 shadow-lg shadow-cyan-500/20"
            >
              <h3 className="text-xl font-bold mb-6 text-cyan-400">
                Who I Am
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {traits.map((trait, index) => {
                  const IconComponent = trait.icon;
                  return (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-3 bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur border border-purple-500/30 rounded-lg p-3 hover:shadow-lg hover:shadow-purple-500/20 transition-all"
                    >
                      <IconComponent className="w-5 h-5 text-purple-400 flex-shrink-0" />
                      <span className="text-sm text-gray-300">
                        {trait.label}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Key Stats Card */}
            <motion.div
              variants={slideInVariants}
              className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-md border border-purple-500/30 rounded-lg p-6 shadow-lg shadow-purple-500/20"
            >
              <h3 className="text-xl font-bold mb-6 text-purple-400">
                Key Stats
              </h3>
              <div className="space-y-4">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <motion.div
                      key={index}
                      whileHover={{ x: 10 }}
                      className="flex items-center gap-4 p-3 bg-gradient-to-r from-cyan-900/20 to-blue-900/20 backdrop-blur border border-cyan-500/20 rounded-lg hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
                    >
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/30 to-blue-500/30 flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-cyan-400" />
                      </div>
                      <span className="text-gray-300 font-medium">
                        {stat.label}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
