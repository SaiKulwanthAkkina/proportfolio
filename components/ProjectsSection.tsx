'use client';

import { motion } from 'framer-motion';
import { FolderGit2, ExternalLink, Hammer, Trophy, Code2, Zap } from 'lucide-react';

interface ProjectCardProps {
  isDisabled?: boolean;
}

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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
} as const;

const ProjectCard = ({
  title,
  category,
  description,
  features,
  tech,
  progress,
  progressLabel,
  githubUrl,
  badge,
  isDisabled = false,
}: {
  title: string;
  category: string;
  description: string;
  features: string[];
  tech: string[];
  progress?: number;
  progressLabel?: string;
  githubUrl?: string;
  badge?: { icon?: React.ReactNode; text: string; type: 'building' | 'achievement' };
  isDisabled?: boolean;
}) => {
  return (
    <motion.div
      variants={cardVariants}
      className="group relative"
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 rounded-xl blur-xl transition-opacity duration-300" />

      {/* Card */}
      <div className="relative bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6 hover:border-slate-600/80 transition-colors duration-300">
        {/* Badge */}
        {badge && (
          <div
            className={`inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full text-sm font-medium ${
              badge.type === 'building'
                ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
            }`}
          >
            {badge.type === 'building' && (
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>
            )}
            {badge.icon && <span>{badge.icon}</span>}
            <span>{badge.text}</span>
          </div>
        )}

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
          <FolderGit2 className="w-5 h-5 text-blue-400" />
          {title}
        </h3>

        {/* Category */}
        <p className="text-sm text-slate-400 mb-4 font-medium">{category}</p>

        {/* Description */}
        <p className="text-slate-300 text-sm mb-6 leading-relaxed">{description}</p>

        {/* Features */}
        <div className="mb-6">
          <p className="text-xs font-semibold text-slate-400 mb-3 uppercase tracking-wider">
            Planned Features
          </p>
          <ul className="space-y-2">
            {features.map((feature, idx) => (
              <li key={idx} className="text-sm text-slate-300 flex items-center gap-2">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="mb-6 flex flex-wrap gap-2">
          {tech.map((item, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/50 text-xs font-medium text-slate-300 hover:border-slate-600/80 transition-colors"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Progress Bar */}
        {progress !== undefined && (
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-semibold text-slate-400">Progress</span>
              <span className="text-xs font-medium text-blue-400">{progressLabel}</span>
            </div>
            <div className="w-full bg-slate-800/50 rounded-full h-2 overflow-hidden border border-slate-700/30">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
              />
            </div>
          </div>
        )}

        {/* Button */}
        {isDisabled ? (
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700/30 text-slate-500 font-medium text-sm cursor-not-allowed opacity-60">
            <FolderGit2 className="w-4 h-4" />
            View Repository
          </span>
        ) : (
          <motion.a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-medium text-sm transition-all duration-300 group/btn"
          >
            <FolderGit2 className="w-4 h-4" />
            View GitHub Repository
            <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
          </motion.a>
        )}
      </div>
    </motion.div>
  );
};

export default function ProjectsSection() {
  const projects = [
    {
      title: 'SolveNSync',
      category: 'Educational Technology Platform',
      description:
        'A comprehensive DSA learning and progress tracking platform designed to help students improve their Data Structures & Algorithms preparation with curated roadmaps and progress analytics.',
      features: [
        'Curated DSA Learning Roadmaps',
        'Topic-wise Problem Organization',
        'Progress Tracking Dashboard',
        'User Authentication',
        'Learning Analytics',
        'Responsive User Interface',
      ],
      tech: ['React', 'JavaScript', 'Node.js', 'Express.js', 'postgreSQL'],
      progress: 40,
      progressLabel: 'In Development',
      badge: { icon: <Hammer className="w-4 h-4" />, text: 'Currently Building', type: 'building' as const },
      isDisabled: true,
    },
    {
      title: 'Criconnect',
      category: 'Sports Analytics',
      description:
        'A sophisticated cricket analytics platform providing comprehensive insights into player performance, match statistics, and data-driven cricket analysis for enthusiasts and professionals.',
      features: [
        'Player Statistics Dashboard',
        'Performance Analysis',
        'Cricket Data Management',
        'Analytics Visualization',
        'Responsive Interface',
      ],
      tech: ['HTML', 'CSS', 'JavaScript', 'Node.js'],
      githubUrl: 'https://github.com/SaiKulwanthAkkina/Criconnnect',
    },
    {
      title: 'Digital Mental Health Support System',
      category: 'Healthcare Technology',
      description:
        'An intelligent mental health support platform providing mood tracking, self-assessment tools, and personalized recommendations to promote student well-being and mental health awareness.',
      features: [
        'Mood Tracking',
        'Self Assessment Tools',
        'Recommendation System',
        'Student Feedback Support',
        'User-Friendly Interface',
      ],
      tech: ['HTML', 'CSS', 'JavaScript'],
      badge: { icon: <Trophy className="w-4 h-4" />, text: 'Top 10 in Smart India Hackathon', type: 'achievement' as const },
      githubUrl: 'https://github.com/SaiKulwanthAkkina/SIH',
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>

        {/* Decorative Divider */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <div className="h-1 w-12 bg-gradient-to-r from-transparent to-blue-500 rounded-full" />
          <Code2 className="w-5 h-5 text-blue-400" />
          <div className="h-1 w-12 bg-gradient-to-l from-transparent to-purple-500 rounded-full" />
        </div>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-8"
      >
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </motion.div>
    </section>
  );
}
