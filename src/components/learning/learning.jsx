"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ModernLearning = () => {
  const [activeTab, setActiveTab] = useState('digital');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const tabContent = {
    digital: {
      title: "Digital Innovation Lab",
      description: "Cutting-edge technology meets creative problem-solving",
      features: [
        "AI & Machine Learning Workshops",
        "Virtual Reality Learning Experiences",
        "Blockchain & Cryptocurrency Studies",
        "3D Printing & Prototyping"
      ],
      icon: "💻"
    },
    creative: {
      title: "Creative Arts Studio",
      description: "Express yourself through multiple artistic mediums",
      features: [
        "Digital Media Production",
        "Interactive Design Thinking",
        "Music Technology & Production",
        "Performance Arts Integration"
      ],
      icon: "🎨"
    },
    research: {
      title: "Research & Discovery Center",
      description: "Explore the frontiers of human knowledge",
      features: [
        "Independent Research Projects",
        "Scientific Method Mastery",
        "Data Analysis & Visualization",
        "Peer Review Publications"
      ],
      icon: "🔬"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Hero Section */}
      <motion.section 
        className="relative z-10 pt-20 pb-32"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
          >
            <motion.h1 
              className="text-6xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 mb-8"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              NEXUS ACADEMY
            </motion.h1>
            <motion.p 
              className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Where tomorrow's innovators master today's technology and push the boundaries of what's possible
            </motion.p>
          </motion.div>

          {/* Stats Cards */}
          <motion.div 
            className="grid md:grid-cols-4 gap-6 mb-20"
            variants={containerVariants}
          >
            {[
              { number: "2030", label: "Future Ready", icon: "🚀" },
              { number: "100%", label: "Tech Integration", icon: "⚡" },
              { number: "24/7", label: "Learning Access", icon: "🌐" },
              { number: "∞", label: "Possibilities", icon: "💫" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="relative group"
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 text-center">
                  <div className="text-4xl mb-4">{stat.icon}</div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Learning Pathways Section */}
      <motion.section 
        className="relative z-10 py-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2 
            className="text-5xl font-bold text-center text-white mb-4"
            variants={itemVariants}
          >
            Learning Pathways
          </motion.h2>
          <motion.p 
            className="text-gray-400 text-center mb-16 text-xl"
            variants={itemVariants}
          >
            Choose your adventure in the world of knowledge
          </motion.p>

          {/* Tab Navigation */}
          <motion.div 
            className="flex justify-center mb-12"
            variants={itemVariants}
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-full p-2 border border-white/20">
              {Object.keys(tabContent).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-8 py-4 rounded-full font-medium transition-all duration-300 ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {tabContent[tab].icon} {tabContent[tab].title}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl mx-auto"
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-3xl blur-xl"></div>
                <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-12">
                  <div className="text-center mb-8">
                    <div className="text-6xl mb-4">{tabContent[activeTab].icon}</div>
                    <h3 className="text-3xl font-bold text-white mb-4">{tabContent[activeTab].title}</h3>
                    <p className="text-gray-300 text-lg">{tabContent[activeTab].description}</p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    {tabContent[activeTab].features.map((feature, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl border border-white/10"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"></div>
                        <span className="text-gray-200">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.section>

      {/* Interactive Learning Tools */}
      <motion.section 
        className="relative z-10 py-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2 
            className="text-5xl font-bold text-center text-white mb-16"
            variants={itemVariants}
          >
            Interactive Learning Ecosystem
          </motion.h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: "Holographic Classrooms",
                description: "Step into immersive 3D learning environments where abstract concepts become tangible experiences.",
                icon: "🌌",
                color: "from-purple-500 to-blue-500"
              },
              {
                title: "AI Learning Companion",
                description: "Your personal AI tutor adapts to your learning style and provides 24/7 support and guidance.",
                icon: "🤖",
                color: "from-blue-500 to-teal-500"
              },
              {
                title: "Global Collaboration Hub",
                description: "Connect with students worldwide on real-time projects that solve actual global challenges.",
                icon: "🌍",
                color: "from-teal-500 to-green-500"
              }
            ].map((tool, index) => (
              <motion.div
                key={index}
                className="relative group"
                variants={itemVariants}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${tool.color} opacity-20 rounded-3xl blur-xl group-hover:opacity-30 transition-opacity duration-300`}></div>
                <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 h-full">
                  <div className="text-5xl mb-6">{tool.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{tool.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{tool.description}</p>
                  <motion.div 
                    className={`mt-6 h-1 bg-gradient-to-r ${tool.color} rounded-full`}
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Future Skills Section */}
      <motion.section 
        className="relative z-10 py-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-3xl blur-2xl"></div>
            <div className="relative bg-white/5 backdrop-blur-lg border border-white/20 rounded-3xl p-16">
              <motion.h2 
                className="text-5xl font-bold text-center text-white mb-12"
                variants={itemVariants}
              >
                Skills for 2030 & Beyond
              </motion.h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { skill: "Quantum Computing", level: 95, icon: "⚛️" },
                  { skill: "Neural Networks", level: 88, icon: "🧠" },
                  { skill: "Space Technology", level: 92, icon: "🚀" },
                  { skill: "Bioengineering", level: 85, icon: "🧬" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    variants={itemVariants}
                  >
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <h3 className="text-white font-semibold mb-4">{item.skill}</h3>
                    <div className="relative h-2 bg-white/20 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-purple-400 to-blue-400"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.level}%` }}
                        transition={{ duration: 1.5, delay: index * 0.2 }}
                      ></motion.div>
                    </div>
                    <div className="text-gray-400 mt-2">{item.level}% Mastery</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section 
        className="relative z-10 py-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2 
            className="text-5xl font-bold text-white mb-8"
            variants={itemVariants}
          >
            Ready to Shape the Future?
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 mb-12"
            variants={itemVariants}
          >
            Join the next generation of innovators, creators, and problem-solvers at Nexus Academy
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center"
            variants={itemVariants}
          >
            <motion.button
              className="relative group px-10 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold rounded-full overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Start Your Journey</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>
            
            <motion.button
              className="px-10 py-4 border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Virtual Campus Tour
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default ModernLearning;