"use client";
import React, { useState, useEffect } from 'react';

const WellnessPlatform = () => {
  const [activeProgram, setActiveProgram] = useState('all');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  const programs = [
    {
      id: 1,
      title: "Master of Business Administration",
      duration: "24 months",
      category: "business",
      level: "Graduate",
      faculty: "Dr. Sarah Mitchell",
      enrollment: 180,
      rating: 4.9,
      tuition: "$85,000",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Comprehensive business program designed to develop strategic leadership and analytical skills for executive roles.",
      outcomes: ["Executive Leadership", "Strategic Planning", "Global Business", "Entrepreneurship"],
      schedule: ["Fall Intake", "Spring Intake", "Evening Classes Available"]
    },
    {
      id: 2,
      title: "Juris Doctor Program",
      duration: "36 months",
      category: "law",
      level: "Professional",
      faculty: "Dean Marcus Chen",
      enrollment: 240,
      rating: 4.8,
      tuition: "$95,000",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Rigorous legal education preparing students for practice in corporate law, litigation, and public service.",
      outcomes: ["Legal Research", "Courtroom Advocacy", "Corporate Law", "Constitutional Law"],
      schedule: ["Full-time Program", "Part-time Evening", "Summer Intensives"]
    },
    {
      id: 3,
      title: "Master of Engineering",
      duration: "18 months",
      category: "engineering",
      level: "Graduate",
      faculty: "Prof. Elena Rodriguez",
      enrollment: 150,
      rating: 4.7,
      tuition: "$72,000",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Advanced engineering program focusing on innovation, technology leadership, and sustainable solutions.",
      outcomes: ["Technical Leadership", "Project Management", "Innovation Design", "Sustainability"],
      schedule: ["Fall Start", "Spring Start", "Flexible Scheduling"]
    },
    {
      id: 4,
      title: "Master of Public Health",
      duration: "20 months",
      category: "health",
      level: "Graduate",
      faculty: "Dr. Michael Johnson",
      enrollment: 120,
      rating: 5.0,
      tuition: "$68,000",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Comprehensive public health education focusing on epidemiology, policy, and community health leadership.",
      outcomes: ["Health Policy", "Epidemiology", "Community Health", "Global Health"],
      schedule: ["Full-time Cohort", "Executive Format", "Research Track"]
    },
    {
      id: 5,
      title: "Master of Education",
      duration: "15 months",
      category: "education",
      level: "Graduate",
      faculty: "Dr. Amanda Foster",
      enrollment: 90,
      rating: 4.9,
      tuition: "$52,000",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Advanced education program preparing leaders for K-12 administration and curriculum development.",
      outcomes: ["Educational Leadership", "Curriculum Design", "Assessment", "Technology Integration"],
      schedule: ["Summer Cohort", "Weekend Program", "Online Hybrid"]
    },
    {
      id: 6,
      title: "Executive Certificate Programs",
      duration: "6-12 months",
      category: "executive",
      level: "Professional",
      faculty: "Various Faculty",
      enrollment: 200,
      rating: 4.6,
      tuition: "$15,000-35,000",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Intensive professional development programs for working executives and senior professionals.",
      outcomes: ["Executive Skills", "Industry Expertise", "Networking", "Strategic Thinking"],
      schedule: ["Weekend Intensive", "Evening Sessions", "Online Modules"]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Programs', icon: '🎓', color: 'from-blue-600 to-indigo-600' },
    { id: 'business', name: 'Business', icon: '💼', color: 'from-green-600 to-emerald-600' },
    { id: 'law', name: 'Law', icon: '⚖️', color: 'from-red-600 to-rose-600' },
    { id: 'engineering', name: 'Engineering', icon: '🔧', color: 'from-orange-600 to-amber-600' },
    { id: 'health', name: 'Public Health', icon: '🏥', color: 'from-teal-600 to-cyan-600' },
    { id: 'education', name: 'Education', icon: '📚', color: 'from-purple-600 to-violet-600' },
    { id: 'executive', name: 'Executive Ed', icon: '🌟', color: 'from-pink-600 to-rose-600' }
  ];

  const testimonials = [
    {
      name: "David Thompson",
      program: "MBA Graduate '23",
      text: "The program's emphasis on real-world application and the network I built have been invaluable to my career advancement to VP level.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5
    },
    {
      name: "Sarah Rodriguez",
      program: "JD Graduate '22",
      text: "The rigorous curriculum and mentorship from distinguished faculty prepared me exceptionally well for practice at a top-tier law firm.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b1c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5
    },
    {
      name: "Michael Chen",
      program: "MEng Graduate '23",
      text: "The program's focus on innovation and sustainability aligned perfectly with my career goals in clean technology leadership.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5
    }
  ];

  const filteredPrograms = activeProgram === 'all' 
    ? programs 
    : programs.filter(program => program.category === activeProgram);

  const getLevelColor = (level) => {
    switch (level) {
      case 'Graduate': return 'text-blue-700 bg-blue-100';
      case 'Professional': return 'text-purple-700 bg-purple-100';
      default: return 'text-gray-700 bg-gray-100';
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Custom Styles */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-slide-left { animation: slideInLeft 0.8s ease-out forwards; }
        .animate-slide-right { animation: slideInRight 0.8s ease-out forwards; }
        .animate-scale-in { animation: scaleIn 0.6s ease-out forwards; }
        .animate-shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }
        .glass-morphism {
          background: rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }
        .professional-card {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.5);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }
        .text-shadow { text-shadow: 1px 1px 2px rgba(0,0,0,0.1); }
        .hover-lift:hover {
          transform: translateY(-8px) scale(1.02);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-indigo-600/10 to-purple-600/10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-400/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-400/15 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="animate-scale-in">
            <h1 className="text-6xl lg:text-8xl font-bold text-gray-900 mb-8 mt-20 text-shadow">
              National
              <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Professional Education
              </span>
            </h1>
            <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
              Discover world-class graduate programs designed for ambitious professionals. 
              Join our distinguished community of scholars, innovators, and leaders shaping tomorrow's world.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300">
              Apply Now
            </button>
            <button className="px-8 py-4 professional-card text-gray-800 rounded-full font-semibold hover:bg-white/80 transition-all duration-300">
              Schedule Campus Visit
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { number: "2,500+", label: "Alumni Network", icon: "👥" },
              { number: "95%", label: "Employment Rate", icon: "💼" },
              { number: "50+", label: "Industry Partners", icon: "🤝" },
              { number: "#15", label: "National Ranking", icon: "🏆" }
            ].map((stat, index) => (
              <div key={index} className="professional-card rounded-2xl p-6 hover-lift">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-8 professional-card sticky top-0 z-50 border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveProgram(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeProgram === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-xl scale-105`
                    : 'bg-white/70 text-gray-700 hover:bg-white hover:text-gray-900 hover:scale-105 border border-gray-200'
                }`}
              >
                <span className="mr-2 text-lg">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 px-8" id="programs">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6 text-shadow">Academic Programs</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Explore our comprehensive portfolio of graduate and professional programs designed for career advancement
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {filteredPrograms.map((program, index) => (
              <div
                key={program.id}
                className={`group professional-card rounded-3xl overflow-hidden hover-lift ${
                  isVisible.programs ? 'animate-scale-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Program Image */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Level Badge */}
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${getLevelColor(program.level)}`}>
                    {program.level}
                  </div>

                  {/* Rating */}
                  <div className="absolute top-4 right-4 professional-card rounded-full px-3 py-1 text-gray-800 text-sm font-medium">
                    ⭐ {program.rating}
                  </div>

                  {/* Duration */}
                  <div className="absolute bottom-4 right-4 professional-card rounded-full px-4 py-2 text-gray-800 font-medium">
                    {program.duration}
                  </div>
                </div>

                {/* Program Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-blue-700 bg-blue-100 px-3 py-1 rounded-full">
                      {categories.find(cat => cat.id === program.category)?.icon} {categories.find(cat => cat.id === program.category)?.name}
                    </span>
                    <span className="text-sm text-gray-600">{program.faculty}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {program.title}
                  </h3>

                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {program.description}
                  </p>

                  {/* Learning Outcomes */}
                  <div className="mb-6">
                    <h4 className="text-gray-900 font-semibold mb-3">Key Learning Outcomes:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {program.outcomes.map((outcome, idx) => (
                        <div key={idx} className="flex items-center text-gray-700 text-sm">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                          {outcome}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Schedule Options */}
                  <div className="mb-6">
                    <h4 className="text-gray-900 font-semibold mb-3">Format Options:</h4>
                    <div className="space-y-1">
                      {program.schedule.map((option, idx) => (
                        <div key={idx} className="text-gray-700 text-sm bg-gray-50 rounded px-3 py-1">
                          {option}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Program Details */}
                  <div className="flex items-center justify-between mb-6 text-sm text-gray-600">
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                      </svg>
                      {program.enrollment} students
                    </span>
                    <span className="font-semibold text-blue-600">{program.tuition}</span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-6 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300">
                      Learn More
                    </button>
                    <button className="px-4 py-3 bg-gray-100 rounded-full text-gray-600 hover:text-gray-800 hover:bg-gray-200 transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Success Stories */}
      <section className="py-20 px-8 relative overflow-hidden bg-gradient-to-r from-gray-50 to-blue-50" id="testimonials">
        <div className="relative max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-16 text-shadow">Alumni Success Stories</h2>
          
          <div className="relative h-80">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ${
                  index === currentTestimonial ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
              >
                <div className="professional-card rounded-3xl p-8 max-w-2xl mx-auto">
                  <div className="flex items-center justify-center mb-6">
                    <img 
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-20 h-20 rounded-full border-4 border-blue-400"
                    />
                  </div>
                  <p className="text-xl text-gray-800 mb-6 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <h4 className="text-gray-900 font-semibold text-lg">{testimonial.name}</h4>
                  <p className="text-blue-600 text-sm font-medium">{testimonial.program}</p>
                  <div className="flex justify-center mt-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-500 text-xl">⭐</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? 'bg-blue-600 w-8' : 'bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Application CTA Section */}
      <section className="py-20 px-8 relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-white mb-6 text-shadow">Ready to Advance Your Career?</h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Join our distinguished community of professionals and scholars. Take the next step in your career 
            with world-class education and an unparalleled alumni network.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <button className="px-10 py-4 bg-white text-blue-600 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
              Start Application
            </button>
            <button className="px-10 py-4 glass-morphism text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300">
              Request Information
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { icon: "📋", title: "Simple Application", desc: "Streamlined online process" },
              { icon: "💰", title: "Financial Aid", desc: "Scholarships & flexible payment" },
              { icon: "🎯", title: "Career Services", desc: "Lifetime career support" }
            ].map((feature, index) => (
              <div key={index} className="glass-morphism rounded-2xl p-6 hover-lift">
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                <p className="text-white/80 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WellnessPlatform;