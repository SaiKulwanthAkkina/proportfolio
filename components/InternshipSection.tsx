"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Code2,
  Database,
  GitBranch,
  Users,
  Bug,
  Monitor,
  Layers,
} from "lucide-react";

const InternshipSection = () => {
  const learningAreas = [
    { icon: Monitor, label: "Frontend Development" },
    { icon: Code2, label: "Backend Development" },
    { icon: Database, label: "Database Management" },
    { icon: GitBranch, label: "Git & GitHub" },
    { icon: Layers, label: "Software Engineering Practices" },
    { icon: Users, label: "Team Collaboration" },
    { icon: Bug, label: "Debugging & Testing" },
  ];

  const highlights = [
    "Developing full-stack web applications with modern technologies",
    "Contributing to real-world projects and code reviews",
    "Learning industry best practices and collaborative workflows",
    "Building expertise in software architecture and system design",
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
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const pulseVariants = {
    pulse: {
      boxShadow: [
        "0 0 0 0 rgba(59, 130, 246, 0.7)",
        "0 0 0 10px rgba(59, 130, 246, 0)",
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="internship" className="py-20 md:py-32 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Internship Experience
            </span>
          </h2>

          {/* Decorative Divider */}
          <div className="flex justify-center items-center gap-4 mb-8">
            <div className="hidden sm:block h-px w-12 bg-gradient-to-r from-transparent to-blue-400"></div>
            <div className="w-2 h-2 rounded-full bg-blue-400 shadow-lg shadow-blue-400/50"></div>
            <div className="hidden sm:block h-px w-12 bg-gradient-to-l from-transparent to-blue-400"></div>
          </div>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Timeline Line - Hidden on mobile */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-cyan-400 to-blue-500 shadow-lg shadow-blue-400/50"></div>

          {/* Timeline Entry */}
          <div className="md:pl-32">
            <div className="flex gap-6 md:gap-0">
              {/* Timeline Dot */}
              <motion.div
                variants={pulseVariants}
                animate="pulse"
                className="hidden md:flex items-center justify-center absolute -left-6 top-6 w-12 h-12 bg-blue-500 rounded-full border-2 border-blue-300 shadow-lg shadow-blue-500/50"
              ></motion.div>

              {/* Card */}
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="w-full group"
              >
                {/* Glass Card with Neon Border */}
                <div className="relative p-6 md:p-8 rounded-xl border border-blue-400/30 bg-gradient-to-br from-slate-900/40 via-slate-900/20 to-slate-900/40 backdrop-blur-md shadow-lg hover:shadow-blue-500/20 transition-shadow duration-300 overflow-hidden">
                  {/* Neon Border Glow */}
                  <div className="absolute inset-0 rounded-xl border border-blue-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg shadow-blue-500/50 pointer-events-none"></div>

                  {/* Background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5 rounded-xl pointer-events-none"></div>

                  {/* Content */}
                  <div className="relative z-10 space-y-6">
                    {/* Role and Company */}
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent mb-2">
                        Software Developer Intern
                      </h3>
                      <div className="flex items-center gap-2 text-blue-300">
                        <Briefcase size={18} className="text-blue-400" />
                        <span className="font-semibold">Enshire</span>
                      </div>
                    </div>

                    {/* Duration with Badge */}
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="text-sm md:text-base text-gray-300">
                        June 2026 – Present
                      </span>
                      <motion.span
                        animate={{
                          boxShadow: [
                            "0 0 10px rgba(34, 197, 94, 0.5)",
                            "0 0 20px rgba(34, 197, 94, 0.8)",
                            "0 0 10px rgba(34, 197, 94, 0.5)",
                          ],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut" as const,
                        }}
                        className="px-3 py-1 rounded-full text-xs font-semibold text-green-300 bg-green-500/20 border border-green-400/50"
                      >
                        Current
                      </motion.span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                      Currently working as a Software Developer Intern, gaining
                      hands-on experience in software development and
                      industry-standard workflows.
                    </p>

                    {/* Learning Areas */}
                    <div>
                      <h4 className="text-lg font-semibold text-blue-300 mb-4">
                        Learning Areas
                      </h4>
                      <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"
                      >
                        {learningAreas.map((area, index) => {
                          const Icon = area.icon;
                          return (
                            <motion.div
                              key={index}
                              variants={itemVariants}
                              className="group/item p-3 rounded-lg border border-blue-400/20 bg-blue-500/5 backdrop-blur-sm hover:border-blue-400/50 hover:bg-blue-500/10 transition-all duration-300"
                            >
                              <div className="flex flex-col items-center gap-2 text-center">
                                <Icon
                                  size={20}
                                  className="text-blue-400 group-hover/item:text-cyan-300 transition-colors"
                                />
                                <span className="text-xs text-gray-300 group-hover/item:text-blue-300 transition-colors">
                                  {area.label}
                                </span>
                              </div>
                            </motion.div>
                          );
                        })}
                      </motion.div>
                    </div>

                    {/* Highlights */}
                    <div>
                      <h4 className="text-lg font-semibold text-blue-300 mb-4">
                        Highlights
                      </h4>
                      <motion.ul
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-3"
                      >
                        {highlights.map((highlight, index) => (
                          <motion.li
                            key={index}
                            variants={itemVariants}
                            className="flex items-start gap-3 text-sm md:text-base text-gray-300"
                          >
                            <span className="mt-1.5 w-2 h-2 rounded-full bg-blue-400 flex-shrink-0 shadow-lg shadow-blue-400/50"></span>
                            <span>{highlight}</span>
                          </motion.li>
                        ))}
                      </motion.ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternshipSection;
