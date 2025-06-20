"use client";
import React, { useEffect, useState } from 'react';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.pageYOffset);
    };

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const parallaxOffset = scrollY * 0.5;

  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900 pt-26">
      {/* Dynamic Background with Parallax */}
      <div 
        className="absolute inset-0 w-full h-full transition-transform duration-100 ease-out"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: `${50 + mousePosition.x * 0.05}% ${50 + mousePosition.y * 0.05}%`,
          transform: `translateY(${parallaxOffset * 0.3}px) scale(1.1)`
        }}
      />
      
      {/* Animated Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-tr from-purple-900/80 via-blue-900/60 to-cyan-900/80"
        style={{
          background: `linear-gradient(135deg, 
            rgba(88, 28, 135, 0.9) 0%, 
            rgba(30, 58, 138, 0.7) 35%, 
            rgba(21, 94, 117, 0.8) 70%, 
            rgba(6, 78, 59, 0.9) 100%)`
        }}
      />

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-72 h-72 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-500/20 blur-3xl animate-float-slow"
          style={{
            top: '10%',
            left: '80%',
            transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`
          }}
        />
        <div 
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-purple-400/15 to-pink-500/15 blur-3xl animate-float-reverse"
          style={{
            bottom: '20%',
            left: '10%',
            transform: `translate(${mousePosition.x * -0.05}px, ${mousePosition.y * -0.05}px)`
          }}
        />
        <div 
          className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-yellow-400/10 to-orange-500/10 blur-2xl animate-float"
          style={{
            top: '60%',
            right: '20%',
            transform: `translate(${mousePosition.x * 0.08}px, ${mousePosition.y * 0.08}px)`
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 mb-8 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 animate-fade-in">
          <span className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></span>
          <span className="text-sm font-medium text-white">Now Enrolling for 2025-26</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 animate-slide-up">
          <span className="block text-white mb-2 tracking-tight">
            Excellence
          </span>
          <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient-shift">
            Academy
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed font-light animate-fade-in-delayed">
          Where innovation meets tradition. Shaping brilliant minds through cutting-edge education, 
          technology integration, and personalized learning experiences.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in-delayed-2">
          <button className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
            <span className="flex items-center">
              Explore Programs
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>
          <button className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:border-white/50">
            Virtual Tour
          </button>
        </div>

        {/* Enhanced Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-fade-in-delayed-3">
          <div className="text-center group hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
              </svg>
            </div>
            <div className="text-3xl font-bold text-white mb-1">1200+</div>
            <div className="text-sm text-gray-300">Active Students</div>
          </div>

          <div className="text-center group hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <div className="text-3xl font-bold text-white mb-1">98%</div>
            <div className="text-sm text-gray-300">Success Rate</div>
          </div>

          <div className="text-center group hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div className="text-3xl font-bold text-white mb-1">75+</div>
            <div className="text-sm text-gray-300">Expert Faculty</div>
          </div>

          <div className="text-center group hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="text-3xl font-bold text-white mb-1">25+</div>
            <div className="text-sm text-gray-300">Years Excellence</div>
          </div>
        </div>
      </div>

      

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        @keyframes float-reverse {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(15px) rotate(-3deg);
          }
        }

        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-fade-in-delayed {
          animation: fade-in 0.8s ease-out 0.2s both;
        }

        .animate-fade-in-delayed-2 {
          animation: fade-in 0.8s ease-out 0.4s both;
        }

        .animate-fade-in-delayed-3 {
          animation: fade-in 0.8s ease-out 0.6s both;
        }

        .animate-slide-up {
          animation: slide-up 1s ease-out;
        }

        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }

        .animate-float-reverse {
          animation: float-reverse 8s ease-in-out infinite;
        }

        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;