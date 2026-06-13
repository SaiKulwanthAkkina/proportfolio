"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Globe,
  Server,
  Database,
  Wrench,
  Cpu,
} from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      iconColor: "text-blue-400",
      skills: ["Java", "Python", "JavaScript"],
    },
    {
      title: "Frontend Development",
      icon: Globe,
      iconColor: "text-cyan-400",
      skills: ["HTML5", "CSS3", "JavaScript", "React"],
    },
    {
      title: "Backend Development",
      icon: Server,
      iconColor: "text-blue-400",
      skills: ["Node.js", "Express.js"],
    },
    {
      title: "Database",
      icon: Database,
      iconColor: "text-cyan-400",
      skills: ["MySQL"],
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      iconColor: "text-blue-400",
      skills: ["Git", "GitHub", "VS Code"],
    },
    {
      title: "CS Fundamentals",
      icon: Cpu,
      iconColor: "text-cyan-400",
      skills: [
        "Data Structures & Algorithms",
        "OOP",
        "DBMS",
        "Problem Solving",
        "Responsive Web Design",
      ],
    },
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
  } as const;

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  } as const;

  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
            Skills & Technologies
          </h2>
          {/* Decorative Divider */}
          <div className="flex justify-center items-center gap-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-blue-400" />
            <div className="w-2 h-2 rounded-full bg-cyan-400" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-400" />
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group relative"
              >
                {/* Glass Card Background with Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Card */}
                <div className="relative backdrop-blur-md bg-slate-800/50 border border-slate-700/50 rounded-lg p-6 hover:border-slate-600/80 transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl">
                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <div className={`p-3 rounded-lg bg-slate-700/30 ${category.iconColor}`}>
                      <IconComponent size={48} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-white text-center mb-4">
                    {category.title}
                  </h3>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 rounded-full text-sm backdrop-blur-sm bg-slate-700/40 border border-slate-600/50 text-slate-200 hover:border-blue-400 transition-all duration-200 cursor-default"
                      >
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
