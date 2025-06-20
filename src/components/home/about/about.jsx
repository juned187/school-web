"use client";
import React from 'react';

const About = () => {
  // Animation styles for CSS animations (since framer-motion isn't available)
  const fadeInUpStyle = {
    animation: 'fadeInUp 0.6s ease-out forwards',
    opacity: 0,
    transform: 'translateY(60px)'
  };

  const fadeInLeftStyle = {
    animation: 'fadeInLeft 0.6s ease-out forwards',
    opacity: 0,
    transform: 'translateX(-60px)'
  };

  const fadeInRightStyle = {
    animation: 'fadeInRight 0.6s ease-out forwards',
    opacity: 0,
    transform: 'translateX(60px)'
  };

  const scaleInStyle = {
    animation: 'scaleIn 0.5s ease-out forwards',
    opacity: 0,
    transform: 'scale(0.8)'
  };

  return (
    <div className="relative bg-gray-50">
      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInLeft {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeInRight {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes scaleIn {
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes drawLine {
          to {
            stroke-dashoffset: 0;
          }
        }
        .animate-delay-100 { animation-delay: 0.1s; }
        .animate-delay-200 { animation-delay: 0.2s; }
        .animate-delay-300 { animation-delay: 0.3s; }
        .animate-delay-400 { animation-delay: 0.4s; }
        .animate-delay-600 { animation-delay: 0.6s; }
        .animate-delay-800 { animation-delay: 0.8s; }
        .line-draw {
          stroke-dasharray: 100;
          stroke-dashoffset: 100;
          animation: drawLine 1.5s ease-in-out forwards;
        }
        .hover-scale:hover {
          transform: scale(1.05);
          transition: transform 0.3s ease;
        }
        .hover-lift:hover {
          transform: translateY(-5px) scale(1.03);
          transition: transform 0.3s ease;
        }
        .hover-rotate:hover {
          transform: rotate(5deg) scale(1.1);
          transition: transform 0.3s ease;
        }
      `}</style>

      {/* Welcome Section */}
      <section className="sticky top-0 z-10 bg-gradient-to-r from-purple-600 to-indigo-800 text-white py-16 px-8">
        <div className="max-w-4xl mx-auto">
          <h1 
            className="text-4xl lg:text-5xl font-bold mb-6 text-center animate-delay-300"
            style={fadeInUpStyle}
          >
            Welcome to Excellence Academy
          </h1>
        </div>
      </section>

      {/* Main content */}
      <div className="relative z-20 bg-gray-50">
        <div className="flex">
          {/* Left Sidebar */}
          <aside className="w-80 bg-white shadow-sm min-h-screen relative">
            {/* White Header Section */}
            <div className="bg-white h-8 w-full"></div>
            
            <div className="px-8 -mt-4 pb-12 relative">
              {/* Animated Arrow Pointer */}
              <div className="flex justify-center animate-delay-200" style={fadeInUpStyle}>
                <div className="flex flex-col items-center">
                  <svg 
                    className="w-8 h-56 text-purple-600 hover-scale" 
                    viewBox="0 0 24 48"
                  >
                    <path 
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      d="M12 3v35"
                      fill="none"
                      className="line-draw"
                    />
                    <path
                      d="M12 45L5 38L12 38L19 38L12 45Z"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinejoin="round"
                      style={{
                        animation: 'scaleIn 0.6s ease-out 1.2s forwards',
                        opacity: 0,
                        transform: 'scale(0)'
                      }}
                    />
                  </svg>
                </div>
              </div>

              {/* Navigation Items */}
              {[
                { icon: "🎓", title: "Advanced\nCurriculum" },
                { icon: "👥", title: "Career\nGuidance" },
                { icon: "🏫", title: "Campus Life" },
                { icon: "🔬", title: "Research Center" },
                { icon: "🛠️", title: "Innovation\nLab" },
                { icon: "💻", title: "Digital Learning" },
                { icon: "🎨", title: "Creative\nStudios" }
              ].map((item, index) => (
                <div 
                  key={index}
                  className={`mb-16 text-center animate-delay-300`}
                  style={fadeInUpStyle}
                >
                  <div className="flex justify-center mb-6 hover-rotate">
                    <div className="w-16 h-16 text-4xl flex items-center justify-center bg-purple-100 rounded-full">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-purple-600 mb-8 whitespace-pre-line">
                    {item.title}
                  </h3>
                  
                  <div 
                    className="w-24 h-1 bg-purple-600 mx-auto"
                    style={{
                      animation: 'scaleIn 0.8s ease-out 0.3s forwards',
                      opacity: 0,
                      transform: 'scaleX(0)'
                    }}
                  ></div>
                </div>
              ))}
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Content Section */}
            <section className="py-16 px-8">
              <div className="flex flex-col lg:flex-row gap-12 max-w-6xl">
                {/* Text Content */}
                <div 
                  className="lg:w-1/2 bg-green-100 p-8 rounded-lg hover-scale animate-delay-300"
                  style={fadeInLeftStyle}
                >
                  <h2 className="text-2xl font-semibold mb-6 text-indigo-800">
                    A premier educational institution for grades 6-12 students.
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Excellence Academy stands as a beacon of innovative education, fostering critical thinking 
                    and creativity in our students. Our passionate educators and cutting-edge facilities create 
                    an inspiring environment where young minds flourish and discover their potential.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Through our integrated STEAM curriculum and personalized learning approaches, we prepare 
                    students to become tomorrow's leaders, innovators, and global citizens ready to tackle 
                    the challenges of the 21st century.
                  </p>
                  <button className="bg-purple-600 text-white px-6 py-3 rounded-md font-medium hover:bg-purple-700 transition-colors hover-scale">
                    Discover More
                  </button>
                </div>

                {/* Image Section */}
                <div 
                  className="lg:w-1/2 animate-delay-300"
                  style={fadeInRightStyle}
                >
                  <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg h-96 hover-lift">
                    <img 
                      src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                      alt="Students collaborating in modern classroom"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Student Spotlight Section */}
            <section 
              className="py-16 px-8 bg-white animate-delay-300"
              style={fadeInUpStyle}
            >
              <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Student Spotlight
                </h2>
                <p className="text-gray-600 mb-12 text-lg">
                  Celebrating the achievements and spirit of our Excellence Academy scholars
                </p>
                
                {/* Grid of Student Photos */}
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  {[
                    {
                      name: "Alex",
                      grade: "Grade 11 - Robotics Champion",
                      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                    },
                    {
                      name: "Maya",
                      grade: "Grade 10 - Science Olympiad",
                      image: "https://images.unsplash.com/photo-1494790108755-2616c6640887?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                    },
                    {
                      name: "Jordan",
                      grade: "Grade 12 - Arts Council President",
                      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                    }
                  ].map((student, index) => (
                    <div 
                      key={index}
                      className={`relative bg-gray-900 rounded-2xl overflow-hidden shadow-xl aspect-[4/5] hover-lift animate-delay-${200 + index * 200}`}
                      style={scaleInStyle}
                    >
                      <img 
                        src={student.image}
                        alt={`${student.name} - ${student.grade}`}
                        className="w-full h-full object-cover"
                      />
                      
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                        <h3 className="text-white font-semibold text-lg">{student.name}</h3>
                        <p className="text-white/80 text-sm">{student.grade}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <p 
                  className="text-gray-600 text-lg max-w-2xl mx-auto animate-delay-600"
                  style={fadeInUpStyle}
                >
                  "Excellence Academy has transformed my passion for learning into a lifelong journey. 
                  The innovative programs and supportive mentors here inspire us to reach beyond our limits!"
                </p>
              </div>
            </section>

            {/* Core Values Section */}
            <section className="bg-gray-50 py-16 px-8">
              <div className="max-w-6xl mx-auto">
                <div 
                  className="text-center mb-12 animate-delay-300"
                  style={fadeInUpStyle}
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
                  <p className="text-gray-600 text-lg">
                    The principles that guide everything we do at Excellence Academy
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                    {
                      icon: "🌟",
                      title: "Excellence",
                      description: "We strive for the highest standards in everything we do, pushing boundaries and exceeding expectations."
                    },
                    {
                      icon: "🤝",
                      title: "Collaboration",
                      description: "We believe in the power of teamwork and building strong relationships within our community."
                    },
                    {
                      icon: "💡",
                      title: "Innovation",
                      description: "We embrace creativity and forward-thinking approaches to solve tomorrow's challenges."
                    },
                    {
                      icon: "🌍",
                      title: "Global Citizenship",
                      description: "We prepare students to be responsible leaders in an interconnected world."
                    }
                  ].map((value, index) => (
                    <div 
                      key={index}
                      className={`bg-white p-6 rounded-lg shadow-md text-center hover-scale animate-delay-${300 + index * 100}`}
                      style={fadeInUpStyle}
                    >
                      <div className="text-4xl mb-4">{value.icon}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Statistics Section */}
            <section className="bg-purple-600 text-white py-16 px-8">
              <div className="max-w-6xl mx-auto">
                <div 
                  className="text-center mb-12 animate-delay-300"
                  style={fadeInUpStyle}
                >
                  <h2 className="text-3xl font-bold mb-4">Excellence by the Numbers</h2>
                  <p className="text-purple-100 text-lg">
                    Our track record speaks for itself
                  </p>
                </div>

                <div className="grid md:grid-cols-4 gap-8 text-center">
                  {[
                    { number: "98%", label: "College Acceptance Rate" },
                    { number: "15:1", label: "Student-Teacher Ratio" },
                    { number: "50+", label: "Advanced Courses" },
                    { number: "25+", label: "Years of Excellence" }
                  ].map((stat, index) => (
                    <div 
                      key={index}
                      className={`animate-delay-${300 + index * 100}`}
                      style={scaleInStyle}
                    >
                      <div className="text-4xl font-bold mb-2">{stat.number}</div>
                      <div className="text-purple-200">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Call to Action Section */}
            <section className="bg-white py-16 px-8">
              <div className="max-w-4xl mx-auto text-center">
                <div 
                  className="animate-delay-300"
                  style={fadeInUpStyle}
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Ready to Join Excellence Academy?
                  </h2>
                  <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                    Take the first step towards an exceptional education. Schedule a campus tour 
                    or learn more about our admission process.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-purple-600 text-white px-8 py-3 rounded-md font-medium hover:bg-purple-700 transition-colors hover-scale">
                      Schedule Tour
                    </button>
                    <button className="border border-purple-700 text-purple-800 px-8 py-3 rounded-md font-medium hover:bg-purple-50 transition-colors hover-scale">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default About;