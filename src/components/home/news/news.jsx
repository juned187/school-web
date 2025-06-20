"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';

const NewsAndEvents = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const newsItems = [
    {
      title: "Annual Science Fair Winners Announced",
      date: "May 15, 2025",
      category: "Academic",
      image: "https://images.unsplash.com/photo-1564982752979-3f7bc974d29a",
      summary: "Congratulations to our talented students who showcased incredible projects at this year's Science Fair."
    },
    {
      title: "Basketball Team Reaches State Finals",
      date: "May 20, 2025",
      category: "Sports",
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc",
      summary: "Our varsity basketball team has made it to the state finals for the first time in school history!"
    },
    {
      title: "Spring Concert Next Week",
      date: "May 25, 2025",
      category: "Arts",
      image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae",
      summary: "Join us for an evening of musical performances by our talented students and faculty."
    },
    {
      title: "New STEM Lab Opening",
      date: "May 28, 2025",
      category: "Facilities",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d",
      summary: "State-of-the-art STEM laboratory opening next month to enhance our science and technology programs."
    },
    {
      title: "Debate Team Wins Nationals",
      date: "May 22, 2025",
      category: "Achievement",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655",
      summary: "Our debate team brings home the national championship trophy for the second year in a row."
    },
    {
      title: "International Exchange Program",
      date: "May 18, 2025",
      category: "Programs",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
      summary: "Announcing new partnerships with schools in Spain and Japan for student exchange opportunities."
    }
  ];

  return (
    <section id="news" className="relative bg-gray-50 pt-24 mt-20">
      {/* Header Section */}
      <motion.section 
        className="sticky top-20 z-10 bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            className="text-4xl lg:text-5xl font-bold mb-6"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
          >
            News & Events
          </motion.h1>
        </div>
      </motion.section>

      {/* Main Content */}
      <div className="relative z-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* Featured News Section */}
          <motion.div
            className="mb-24"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Latest Updates</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {newsItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-sm overflow-hidden"
                  variants={fadeInLeft}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.03, y: -5 }}
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <span className="text-sm text-blue-600 font-medium">{item.category}</span>
                      <span className="mx-2 text-gray-300">•</span>
                      <span className="text-sm text-gray-500">{item.date}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.summary}</p>
                    <motion.button
                      className="mt-4 text-blue-600 font-medium hover:text-blue-700"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      Read more →
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Upcoming Events Calendar */}
          <motion.div
            className="mb-24 bg-blue-50 py-16 px-8 rounded-2xl"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Upcoming Events</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                className="bg-white p-6 rounded-lg shadow-sm"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-2xl font-bold text-blue-600 mb-2">MAY 30</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Parent-Teacher Conference</h3>
                <p className="text-gray-600 mb-4">Annual meeting to discuss student progress and achievements.</p>
                <div className="flex items-center text-sm text-gray-500">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>2:00 PM - 6:00 PM</span>
                </div>
              </motion.div>

              <motion.div
                className="bg-white p-6 rounded-lg shadow-sm"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-2xl font-bold text-blue-600 mb-2">JUN 5</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Art Exhibition</h3>
                <p className="text-gray-600 mb-4">Showcase of student artwork from throughout the year.</p>
                <div className="flex items-center text-sm text-gray-500">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>4:00 PM - 8:00 PM</span>
                </div>
              </motion.div>

              <motion.div
                className="bg-white p-6 rounded-lg shadow-sm"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-2xl font-bold text-blue-600 mb-2">JUN 15</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Graduation Ceremony</h3>
                <p className="text-gray-600 mb-4">Celebration of our graduating class of 2025.</p>
                <div className="flex items-center text-sm text-gray-500">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>10:00 AM - 12:00 PM</span>
                </div>
              </motion.div>

              <motion.div
                className="bg-white p-6 rounded-lg shadow-sm"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-2xl font-bold text-blue-600 mb-2">JUN 20</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Summer Sports Camp</h3>
                <p className="text-gray-600 mb-4">Two-week intensive training for basketball and soccer.</p>
                <div className="flex items-center text-sm text-gray-500">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>9:00 AM - 3:00 PM</span>
                </div>
              </motion.div>

              <motion.div
                className="bg-white p-6 rounded-lg shadow-sm"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-2xl font-bold text-blue-600 mb-2">JUL 1</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">STEM Workshop</h3>
                <p className="text-gray-600 mb-4">Hands-on robotics and coding workshop for students.</p>
                <div className="flex items-center text-sm text-gray-500">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>1:00 PM - 5:00 PM</span>
                </div>
              </motion.div>

              <motion.div
                className="bg-white p-6 rounded-lg shadow-sm"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-2xl font-bold text-blue-600 mb-2">JUL 10</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">College Prep Workshop</h3>
                <p className="text-gray-600 mb-4">Information session on college applications and SAT prep.</p>
                <div className="flex items-center text-sm text-gray-500">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>3:00 PM - 5:00 PM</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NewsAndEvents;