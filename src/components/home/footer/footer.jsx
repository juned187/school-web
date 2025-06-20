"use client";
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-purple-700 via-purple-800 to-purple-900 text-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-white rounded-full blur-lg"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-white rounded-full blur-md"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* School Info Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-r from-white to-gray-100 text-blue-900 p-2 rounded-lg shadow-lg">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">National</h2>
                  <p className="text-sm text-blue-200">High School</p>
                </div>
              </div>
              <p className="text-blue-100 text-sm leading-relaxed">
                Empowering students to achieve excellence through innovative education, 
                character development, and community engagement since 1985.
              </p>
              <div className="flex space-x-4">
                {/* Social Media Icons with hover effects */}
                <a href="#" className="text-blue-200 hover:text-white transition-all duration-300 hover:scale-110">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-blue-200 hover:text-white transition-all duration-300 hover:scale-110">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="text-blue-200 hover:text-white transition-all duration-300 hover:scale-110">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-lg mb-4 text-white border-b border-white/30 pb-2">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="/" className="text-blue-100 hover:text-white transition-colors text-sm hover:translate-x-1 transform duration-200 block">About Us</a></li>
                <li><a href="/" className="text-blue-100 hover:text-white transition-colors text-sm hover:translate-x-1 transform duration-200 block">Academic Programs</a></li>
                <li><a href="/" className="text-blue-100 hover:text-white transition-colors text-sm hover:translate-x-1 transform duration-200 block">Faculty & Staff</a></li>
                <li><a href="/" className="text-blue-100 hover:text-white transition-colors text-sm hover:translate-x-1 transform duration-200 block">Student Life</a></li>
                <li><a href="/" className="text-blue-100 hover:text-white transition-colors text-sm hover:translate-x-1 transform duration-200 block">Alumni</a></li>
                <li><a href="/" className="text-blue-100 hover:text-white transition-colors text-sm hover:translate-x-1 transform duration-200 block">Career Opportunities</a></li>
              </ul>
            </div>

            {/* Academics */}
            <div>
              <h3 className="font-semibold text-lg mb-4 text-white border-b border-white/30 pb-2">Academics</h3>
              <ul className="space-y-3">
                <li><a href="/" className="text-blue-100 hover:text-white transition-colors text-sm hover:translate-x-1 transform duration-200 block">Admission Process</a></li>
                <li><a href="/" className="text-blue-100 hover:text-white transition-colors text-sm hover:translate-x-1 transform duration-200 block">Curriculum</a></li>
                <li><a href="/" className="text-blue-100 hover:text-white transition-colors text-sm hover:translate-x-1 transform duration-200 block">Online Learning</a></li>
                <li><a href="/" className="text-blue-100 hover:text-white transition-colors text-sm hover:translate-x-1 transform duration-200 block">Student Portal</a></li>
                <li><a href="/" className="text-blue-100 hover:text-white transition-colors text-sm hover:translate-x-1 transform duration-200 block">Library Resources</a></li>
                <li><a href="/" className="text-blue-100 hover:text-white transition-colors text-sm hover:translate-x-1 transform duration-200 block">Academic Calendar</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold text-lg mb-4 text-white border-b border-white/30 pb-2">Contact Info</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3 group">
                  <div className="bg-white/20 p-2 rounded-lg group-hover:bg-white/30 transition-colors">
                    <svg className="w-4 h-4 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-blue-100 text-sm">123 Education Street</p>
                    <p className="text-blue-100 text-sm">Learning City, LC 12345</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="bg-white/20 p-2 rounded-lg group-hover:bg-white/30 transition-colors">
                    <svg className="w-4 h-4 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                  </div>
                  <p className="text-blue-100 text-sm">(+91) 8424962293</p>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="bg-white/20 p-2 rounded-lg group-hover:bg-white/30 transition-colors">
                    <svg className="w-4 h-4 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>
                  <p className="text-blue-100 text-sm">info@nationalhighschool.in</p>
                </div>
                <div className="bg-white/10 rounded-lg p-3 mt-4 border border-white/20">
                  <p className="text-white text-sm mb-2 font-medium">School Hours:</p>
                  <p className="text-blue-100 text-xs">Monday - Friday: 7:30 AM - 3:30 PM</p>
                  <p className="text-blue-100 text-xs">Office Hours: 8:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="relative border-t border-purple-600/30 bg-purple-900/50 backdrop-blur-sm">
        <div className="px-6 py-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-blue-200">
                <p>&copy; 2025 National High School. All rights reserved.</p>
                <div className="flex gap-4">
                  <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                  <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                  <a href="#" className="hover:text-white transition-colors">Accessibility</a>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-blue-200">
                <span>Accredited by:</span>
                <span className="text-white font-medium">National Education Board</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;