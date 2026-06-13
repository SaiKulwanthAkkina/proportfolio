'use client';

import { motion } from 'framer-motion';
import { Cloud, Brain, ExternalLink, ShieldCheck } from 'lucide-react';

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

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
} as const;

const CertificationsSection = () => {
  const certifications = [
    {
      id: 1,
      title: 'AWS Cloud Foundations',
      issuer: 'Amazon Web Services',
      icon: Cloud,
      iconGradient: 'from-orange-400 to-amber-500',
      verifyUrl: 'https://drive.google.com/file/d/1P8sidmjNlAuDM70rVIjqvksgms_TTbQc/view',
    },
    {
      id: 2,
      title: 'Microsoft Azure AI Fundamentals (AI-900)',
      issuer: 'Microsoft',
      icon: Brain,
      iconGradient: 'from-blue-400 to-blue-600',
      verifyUrl: 'https://drive.google.com/file/d/1z0TjeHfs6-no_39mbfeOCBVcF__rH-lV/view',
    },
  ];

  return (
    <section id="certifications" className="py-20 md:py-32 px-4">
      <div className="max-w-5xl mx-auto">
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
              Certifications
            </span>
          </h2>
          <div className="flex justify-center gap-3">
            <div className="h-1 w-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
            <div className="h-1 w-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
            <div className="h-1 w-8 bg-gradient-to-r from-purple-600 to-cyan-400 rounded-full"></div>
          </div>
        </motion.div>

        {/* Certification Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {certifications.map((cert) => {
            const IconComponent = cert.icon;
            return (
              <motion.div
                key={cert.id}
                variants={cardVariants}
                whileHover={{ scale: 1.05 }}
                className="group relative bg-slate-900/40 backdrop-blur-xl border border-slate-700/30 rounded-2xl p-8 hover:border-slate-600/50 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300"
              >
                {/* Icon Background */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${cert.iconGradient} mb-6 p-3`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                <p className="text-slate-300 mb-4">{cert.issuer}</p>

                {/* Verified Badge */}
                <div className="flex items-center gap-2 mb-6">
                  <ShieldCheck className="w-5 h-5 text-green-400" />
                  <span className="text-green-400 text-sm font-medium">Verified</span>
                </div>

                {/* Verify Button */}
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
                >
                  Verify Credential
                  <ExternalLink className="w-4 h-4" />
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsSection;
