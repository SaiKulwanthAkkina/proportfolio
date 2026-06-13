"use client";

import { motion } from "framer-motion";
import { Trophy, Code2, Cloud, Brain, Briefcase } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "Top 10 in Smart India Hackathon",
    description: "Internal Evaluation — Digital Mental Health Support System",
    accent: "from-amber-400 to-orange-500",
    iconBg: "bg-amber-500/20 text-amber-400",
    borderHover: "hover:border-amber-500/40",
  },
  {
    icon: Code2,
    title: "200+ LeetCode Problems Solved",
    description: "Data Structures & Algorithms — Consistent problem-solving practice",
    accent: "from-cyan-400 to-blue-500",
    iconBg: "bg-cyan-500/20 text-cyan-400",
    borderHover: "hover:border-cyan-500/40",
  },
  {
    icon: Cloud,
    title: "AWS Cloud Foundations Certified",
    description: "Amazon Web Services — Cloud computing fundamentals",
    accent: "from-orange-400 to-amber-500",
    iconBg: "bg-orange-500/20 text-orange-400",
    borderHover: "hover:border-orange-500/40",
  },
  {
    icon: Brain,
    title: "Azure AI Fundamentals (AI-900)",
    description: "Microsoft — Artificial intelligence concepts and Azure AI services",
    accent: "from-blue-400 to-cyan-500",
    iconBg: "bg-blue-500/20 text-blue-400",
    borderHover: "hover:border-blue-500/40",
  },
  {
    icon: Briefcase,
    title: "Software Developer Intern at Enshire",
    description: "Gaining hands-on experience in full-cycle software development",
    accent: "from-emerald-400 to-green-500",
    iconBg: "bg-emerald-500/20 text-emerald-400",
    borderHover: "hover:border-emerald-500/40",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 md:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-1 w-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
            <div className="w-2 h-2 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50" />
            <div className="h-1 w-12 bg-gradient-to-l from-blue-500 to-cyan-400 rounded-full" />
          </div>
        </motion.div>

        {/* Achievement Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.03, y: -4 }}
                className={`group relative bg-slate-900/40 backdrop-blur-xl border border-slate-700/30 rounded-2xl p-6 ${achievement.borderHover} hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300`}
              >
                {/* Glow overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${achievement.accent} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${achievement.iconBg} mb-4 group-hover:shadow-lg transition-shadow duration-300`}>
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                    {achievement.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
