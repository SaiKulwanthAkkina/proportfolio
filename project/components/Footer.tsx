'use client';

import { motion } from 'framer-motion';
import { ArrowUp, Github, Linkedin, ExternalLink, Award, Heart, Code2 } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    const element = document.getElementById('home');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/SaiKulwanthAkkina',
      label: 'GitHub',
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/sai-kulwanth-sharma-akkina/',
      label: 'LinkedIn',
    },
    {
      icon: Award,
      href: 'https://leetcode.com/u/SaiKulwanth/',
      label: 'LeetCode',
    },
    {
      icon: ExternalLink,
      href: 'https://www.credly.com/users/sai-kulwanth',
      label: 'Credly',
    },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="border-t border-blue-500/10 backdrop-blur-md bg-black/40 py-8"
    >
      <div className="flex flex-col items-center gap-4">
        {/* Back to Top Button */}
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="relative p-3 rounded-full border border-blue-500/20 bg-blue-500/5 backdrop-blur-sm hover:border-blue-400/40 hover:bg-blue-500/10 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300"
        >
          <ArrowUp size={20} className="text-blue-400" />
        </motion.button>

        {/* Social Links */}
        <div className="flex gap-4">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="relative p-3 rounded-full border border-blue-500/20 bg-blue-500/5 backdrop-blur-sm hover:border-blue-400/40 hover:bg-blue-500/10 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300"
                title={link.label}
              >
                <Icon size={18} className="text-blue-400" />
              </motion.a>
            );
          })}
        </div>

        {/* Tagline */}
        <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
          <span className="flex items-center gap-1">
            Built with <Heart size={14} className="text-red-500" />, Code{' '}
            <Code2 size={14} className="text-blue-400" /> & Continuous Learning.
          </span>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-500">© 2026 Sai Kulwanth Akkina</p>
      </div>
    </motion.footer>
  );
}
