"use client";

import { motion } from "framer-motion";
import { Code2, ExternalLink, Trophy, Flame, Target, TrendingUp } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const highlights = [
  { icon: Code2, label: "200+ Problems Solved", color: "text-cyan-400" },
  { icon: Target, label: "Data Structures & Algorithms", color: "text-blue-400" },
  { icon: Flame, label: "Problem Solving Focus", color: "text-orange-400" },
  { icon: TrendingUp, label: "Consistent Learning Journey", color: "text-green-400" },
];

export default function CodingProfilesSection() {
  return (
    <section id="profiles" className="py-20 md:py-32 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              LeetCode Profile
            </span>
          </h2>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-1 w-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
            <div className="w-2 h-2 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50" />
            <div className="h-1 w-12 bg-gradient-to-l from-blue-500 to-cyan-400 rounded-full" />
          </div>
        </motion.div>

        {/* LeetCode Profile Card */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative group"
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 rounded-2xl blur-xl transition-opacity duration-300" />

          <div className="relative bg-slate-900/40 backdrop-blur-xl border border-slate-700/30 rounded-2xl p-8 md:p-10 hover:border-slate-600/50 transition-all duration-300">
            {/* Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center text-white font-bold text-xl">
                LC
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">LeetCode</h3>
                <p className="text-slate-400">@SaiKulwanth</p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {highlights.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/5 border border-slate-700/30 rounded-xl p-4 text-center hover:border-blue-500/30 transition-all duration-300"
                  >
                    <IconComponent className={`w-6 h-6 mx-auto mb-2 ${item.color}`} />
                    <p className="text-sm text-slate-300">{item.label}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* Achievement Badge */}
            <div className="flex items-center gap-3 mb-8 p-4 rounded-xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20">
              <Trophy className="w-6 h-6 text-amber-400" />
              <div>
                <p className="text-white font-semibold">200+ Problems Solved</p>
                <p className="text-sm text-slate-400">Consistent daily practice and growing problem-solving skills</p>
              </div>
            </div>

            {/* Visit Profile Button */}
            <motion.a
              href="https://leetcode.com/u/SaiKulwanth/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-300"
            >
              Visit LeetCode Profile
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
