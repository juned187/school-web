"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import AuthModal from '../login/login.jsx';

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleClose = () => {
    console.log('Closing modal');
    setShowLogin(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="h-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 shadow-sm border-b fixed top-0 left-0 right-0 z-50">

        <div className="flex items-center justify-between px-4 sm:px-6 py-4 max-w-7xl mx-auto">
          {/* Logo Section - Left */}
          <Link href="#" className="flex items-center gap-2 sm:gap-4">
            <div className="bg-white text-blue-700 p-2 rounded">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z"/>
              </svg>
            </div>
            <div className="text-white">
              <h1 className="text-lg sm:text-xl font-bold text-white">NATIONAL</h1>
              <p className="text-xs sm:text-sm text-blue-100">High School</p>
            </div>
          </Link>

          {/* Desktop Navigation Links - Center */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            <Link 
              href="/"
              className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z"/>
              </svg>
              Home
            </Link>
            
            <Link 
              href="/admission" 
              className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z M15.5,11.5L14.5,12.5L16.5,14.5L17.5,13.5L15.5,11.5M13.5,13.5L7.5,19.5H9.5L15.5,13.5H13.5Z"/>
              </svg>
              Admission
            </Link>
            
            <Link 
              href="/learning"
              className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19,2L14,6.5V17.5L19,13V2M6.5,5C4.55,5 2.45,5.4 1,6.5V21.16C1,21.41 1.25,21.66 1.5,21.66C1.6,21.66 1.65,21.59 1.75,21.59C3.1,20.94 5.05,20.68 6.5,20.68C8.45,20.68 10.55,21.1 12,22C13.35,21.15 15.8,20.68 17.5,20.68C19.15,20.68 20.85,20.95 22.25,21.59C22.35,21.59 22.4,21.66 22.5,21.66C22.75,21.66 23,21.41 23,21.16V6.5C22.4,6.05 21.75,5.75 21,5.5V19.65C19.9,19.2 18.7,19 17.5,19C15.8,19 14.35,19.48 13,20.2V7.5L7.5,2H6.5Z"/>
              </svg>
              Learning
            </Link>
            
            <Link 
              href="/news"
              className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4,6H2V20A2,2 0 0,0 4,22H18A2,2 0 0,0 20,20V18H4V6M18,2A2,2 0 0,1 20,4V16A2,2 0 0,1 18,18H6A2,2 0 0,1 4,16V4A2,2 0 0,1 6,2H18M6,4V10H10V4H6M12,4V6H18V4H12M12,8V10H18V8H12M6,12V14H18V12H6M6,16H18V18H6V16Z"/>
              </svg>
              <span className="hidden xl:inline">News & Events</span>
              <span className="xl:hidden">News</span>
            </Link>
            
            <Link 
              href="/contact"
              className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"/>
              </svg>
              Contact
            </Link>
          </div>

          {/* Right Side - Desktop Login + Mobile Menu Button */}
          <div className="flex items-center gap-4">
            {/* Desktop Login Button */}
            <button
              onClick={() => {
                console.log('Login button clicked');
                setShowLogin(true);
              }}
              className="hidden sm:flex bg-white text-blue-700 px-4 lg:px-6 py-2 rounded-md text-sm font-medium hover:bg-blue-100 transition-colors items-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"/>
              </svg>
              <span className="hidden lg:inline">Log In</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden text-white hover:text-blue-100 transition-colors p-2"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                // Close icon
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Hamburger icon
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="px-4 sm:px-6 py-4 bg-blue-800 bg-opacity-95 backdrop-blur-sm border-t border-blue-500">
            <div className="flex flex-col gap-4">
              <Link 
                href="/"
                className="flex items-center gap-3 text-blue-100 hover:text-white transition-colors py-2"
                onClick={closeMobileMenu}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z"/>
                </svg>
                Home
              </Link>
              
              <Link 
                href="/admission" 
                className="flex items-center gap-3 text-blue-100 hover:text-white transition-colors py-2"
                onClick={closeMobileMenu}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z M15.5,11.5L14.5,12.5L16.5,14.5L17.5,13.5L15.5,11.5M13.5,13.5L7.5,19.5H9.5L15.5,13.5H13.5Z"/>
                </svg>
                Admission
              </Link>
              
              <Link 
                href="/learning"
                className="flex items-center gap-3 text-blue-100 hover:text-white transition-colors py-2"
                onClick={closeMobileMenu}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19,2L14,6.5V17.5L19,13V2M6.5,5C4.55,5 2.45,5.4 1,6.5V21.16C1,21.41 1.25,21.66 1.5,21.66C1.6,21.66 1.65,21.59 1.75,21.59C3.1,20.94 5.05,20.68 6.5,20.68C8.45,20.68 10.55,21.1 12,22C13.35,21.15 15.8,20.68 17.5,20.68C19.15,20.68 20.85,20.95 22.25,21.59C22.35,21.59 22.4,21.66 22.5,21.66C22.75,21.66 23,21.41 23,21.16V6.5C22.4,6.05 21.75,5.75 21,5.5V19.65C19.9,19.2 18.7,19 17.5,19C15.8,19 14.35,19.48 13,20.2V7.5L7.5,2H6.5Z"/>
                </svg>
                Learning
              </Link>
              
              <Link 
                href="/news"
                className="flex items-center gap-3 text-blue-100 hover:text-white transition-colors py-2"
                onClick={closeMobileMenu}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4,6H2V20A2,2 0 0,0 4,22H18A2,2 0 0,0 20,20V18H4V6M18,2A2,2 0 0,1 20,4V16A2,2 0 0,1 18,18H6A2,2 0 0,1 4,16V4A2,2 0 0,1 6,2H18M6,4V10H10V4H6M12,4V6H18V4H12M12,8V10H18V8H12M6,12V14H18V12H6M6,16H18V18H6V16Z"/>
                </svg>
                News & Events
              </Link>
              
              <Link 
                href="/contact"
                className="flex items-center gap-3 text-blue-100 hover:text-white transition-colors py-2"
                onClick={closeMobileMenu}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"/>
                </svg>
                Contact
              </Link>

              {/* Mobile Login Button */}
              <button
                onClick={() => {
                  console.log('Mobile login button clicked');
                  setShowLogin(true);
                  closeMobileMenu();
                }}
                className="flex items-center gap-3 bg-white text-blue-700 px-4 py-3 rounded-md text-sm font-medium hover:bg-blue-100 transition-colors mt-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"/>
                </svg>
                Log In
              </button>
            </div>
          </div>
        </div>
      </nav>

      <AuthModal 
        isOpen={showLogin}
        onClose={handleClose}
      />
    </>
  );
};

export default Navbar;