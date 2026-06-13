"use client";

import { motion } from "framer-motion";
import { GraduationCap, School, BookOpen, MapPin } from "lucide-react";

interface EducationEntry {
  id: number;
  institution: string;
  degree: string;
  field?: string;
  duration: string;
  location: string;
  icon: React.ReactNode;
  badge?: string;
  badgeColor?: string;
}

const educationEntries: EducationEntry[] = [
  {
    id: 1,
    institution: "SR University",
    degree: "Bachelor of Technology",
    field: "Computer Science and Engineering",
    duration: "2023–Present",
    location: "Warangal Telangana",
    icon: <GraduationCap className="w-6 h-6" />,
    badge: "Current",
    badgeColor: "bg-green-500/20 text-green-300 border border-green-500/30",
  },
  {
    id: 2,
    institution: "Shivani Junior College",
    degree: "Intermediate (MPC)",
    duration: "2021–2023",
    location: "Warangal Telangana",
    icon: <School className="w-6 h-6" />,
  },
  {
    id: 3,
    institution: "Kerala Model School",
    degree: "SSC",
    duration: "Completed 2021",
    location: "Warangal Telangana",
    icon: <BookOpen className="w-6 h-6" />,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
} as const;

const cardVariants = {
  hidden: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? 100 : -100,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
} as const;

export default function EducationSection() {
  return (
    <section id="education" className="py-20 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="flex justify-center">
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></div>
          </div>
        </motion.div>

        {/* Timeline Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Center Line - Hidden on Mobile */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500/50 via-cyan-500/30 to-blue-500/50 transform -translate-x-1/2"></div>

          {/* Mobile Left Line */}
          <div className="md:hidden absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500/50 via-cyan-500/30 to-blue-500/50"></div>

          {/* Education Entries */}
          <div className="space-y-12 md:space-y-20">
            {educationEntries.map((entry, index) => (
              <motion.div
                key={entry.id}
                custom={index % 2 === 0 ? 1 : -1}
                variants={cardVariants}
                className={`flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Card Container */}
                <div className="w-full md:w-[calc(50%-2rem)] flex items-start">
                  {/* Timeline Dot - Hidden on Mobile, shown on Desktop */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-900 z-10"></div>

                  {/* Mobile Timeline Dot */}
                  <div className="md:hidden absolute left-2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-900 z-10 top-8"></div>

                  {/* Card */}
                  <div className="w-full md:ml-0 ml-12 group glass-card bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 hover:border-blue-500/50 rounded-lg p-6 md:p-8 transition-all duration-300">
                    {/* Header with Icon and Badge */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                        {entry.icon}
                      </div>
                      {entry.badge && (
                        <span
                          className={`text-xs font-semibold px-3 py-1 rounded-full ${entry.badgeColor}`}
                        >
                          {entry.badge}
                        </span>
                      )}
                    </div>

                    {/* Institution and Degree */}
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                      {entry.institution}
                    </h3>
                    <p className="text-blue-300 font-semibold mb-1">
                      {entry.degree}
                    </p>
                    {entry.field && (
                      <p className="text-slate-400 text-sm mb-3">{entry.field}</p>
                    )}

                    {/* Duration */}
                    <p className="text-cyan-400 text-sm font-medium mb-4">
                      {entry.duration}
                    </p>

                    {/* Location */}
                    <div className="flex items-center gap-2 text-slate-300 text-sm">
                      <MapPin className="w-4 h-4 text-cyan-400" />
                      <span>{entry.location}</span>
                    </div>
                  </div>
                </div>

                {/* Spacer for Desktop Layout */}
                <div className="hidden md:block w-[calc(50%-2rem)]"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
