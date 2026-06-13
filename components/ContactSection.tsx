"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Send,
  Linkedin,
  Github,
  ExternalLink,
  MessageSquare,
  Briefcase,
  Award,
  FileText,
} from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [notification, setNotification] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) setErrors((prev) => { const n = {...prev}; delete n[name]; return n; });
  };

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );
    const mailtoLink = `mailto:saikulwanthakkina@gmail.com?subject=${subject}&body=${body}`;

    window.open(mailtoLink, "_blank");

    setNotification({
      type: "success",
      message: "Your email client has been opened with the message ready to send!",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });

    setTimeout(() => setNotification(null), 5000);
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91-8099820945",
      href: "tel:+91-8099820945",
    },
    {
      icon: Mail,
      label: "Email",
      value: "saikulwanthakkina@gmail.com",
      href: "mailto:saikulwanthakkina@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Sai Kulwanth Sharma",
      href: "https://www.linkedin.com/in/sai-kulwanth-sharma-akkina/",
      isExternal: true,
    },
    {
      icon: Github,
      label: "GitHub",
      value: "SaiKulwanthAkkina",
      href: "https://github.com/SaiKulwanthAkkina",
      isExternal: true,
    },
    {
      icon: Award,
      label: "LeetCode",
      value: "SaiKulwanth",
      href: "https://leetcode.com/u/SaiKulwanth/",
      isExternal: true,
    },
    {
      icon: Award,
      label: "Credly",
      value: "Certifications",
      href: "https://www.credly.com/users/sai-kulwanth",
      isExternal: true,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="contact" className="py-20 md:py-32 px-4">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Section Title */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>

          {/* Decorative Divider */}
          <div className="flex justify-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
            <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
            <div className="w-2 h-2 rounded-full bg-purple-500"></div>
          </div>

          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/5 border border-blue-500/20 backdrop-blur-xl rounded-2xl p-8 hover:border-blue-500/40 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <MessageSquare className="text-blue-400" size={28} />
                Contact Information
              </h3>

              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  const isEmail = info.label === "Email";
                  const isPhone = info.label === "Phone";
                  const isExternal = info.isExternal;

                  return (
                    <motion.a
                      key={index}
                      href={info.href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-4 p-4 rounded-lg border border-transparent hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 group cursor-pointer"
                      whileHover={{ x: 5 }}
                    >
                      <div className="text-blue-400 group-hover:text-cyan-400 transition-colors">
                        <IconComponent size={24} />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-400">{info.label}</p>
                        <p className="text-white font-semibold flex items-center gap-2">
                          {info.value}
                          {isExternal && (
                            <ExternalLink size={16} className="opacity-60" />
                          )}
                        </p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>

              {/* View Resume Button */}
              <motion.a
                href="https://drive.google.com/file/d/1_C_BPu2D-N8WFKI9viQ8LnifUvWBu_EU/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full flex items-center justify-center gap-3 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-300"
              >
                <FileText size={20} />
                View Resume
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/5 border border-blue-500/20 backdrop-blur-xl rounded-2xl p-8 hover:border-blue-500/40 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <Mail className="text-blue-400" size={28} />
                Send a Message
              </h3>

              <form onSubmit={handleSendMessage} className="space-y-6">
                {/* Name Input */}
                <div>
                  <label className="block text-sm text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    required
                    className={`w-full bg-white/5 border rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-1 transition-all duration-300 ${errors.name ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/20' : 'border-blue-500/20 focus:border-blue-500/50 focus:ring-blue-500/20'}`}
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                </div>

                {/* Email Input */}
                <div>
                  <label className="block text-sm text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                    className={`w-full bg-white/5 border rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-1 transition-all duration-300 ${errors.email ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/20' : 'border-blue-500/20 focus:border-blue-500/50 focus:ring-blue-500/20'}`}
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                </div>

                {/* Subject Input */}
                <div>
                  <label className="block text-sm text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What is this about?"
                    required
                    className={`w-full bg-white/5 border rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-1 transition-all duration-300 ${errors.subject ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/20' : 'border-blue-500/20 focus:border-blue-500/50 focus:ring-blue-500/20'}`}
                  />
                  {errors.subject && <p className="text-red-400 text-xs mt-1">{errors.subject}</p>}
                </div>

                {/* Message Textarea */}
                <div>
                  <label className="block text-sm text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your message here..."
                    rows={5}
                    required
                    className={`w-full bg-white/5 border rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-1 transition-all duration-300 resize-none ${errors.message ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/20' : 'border-blue-500/20 focus:border-blue-500/50 focus:ring-blue-500/20'}`}
                  ></textarea>
                  {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                </div>

                {/* Notification Message */}
                {notification && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`p-4 rounded-lg text-sm font-medium ${
                      notification.type === "success"
                        ? "bg-green-500/20 border border-green-500/50 text-green-300"
                        : "bg-red-500/20 border border-red-500/50 text-red-300"
                    }`}
                  >
                    {notification.message}
                  </motion.div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  {/* Send Message Button */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-300"
                  >
                    <Send size={20} />
                    Send Message
                  </motion.button>

                  {/* Hire Me Button */}
                  <motion.a
                    href="mailto:saikulwanthakkina@gmail.com?subject=Hiring Opportunity"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg border-2 border-cyan-500/50 text-cyan-400 font-semibold hover:border-cyan-500 hover:bg-cyan-500/10 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all duration-300"
                  >
                    <Briefcase size={20} />
                    Hire Me
                  </motion.a>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
