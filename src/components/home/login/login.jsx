"use client";
import { useState } from 'react';

export default function AuthModal({ onClose, isOpen }) {
  const [isSignIn, setIsSignIn] = useState(true);
  const [formData, setFormData] = useState({ email: '', password: '' });

  // Return null if modal shouldn't be open
  if (!isOpen) return null;

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
    setFormData({ email: '', password: '' }); // Clear form on toggle
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignIn) {
      // Simulate sign in success
      alert(`Signed In with Email: ${formData.email}`);
      onClose(); // Close modal after sign in
    } else {
      // Simulate register success
      alert(`Registered with Email: ${formData.email}`);

      // After registering, switch to sign in form
      setIsSignIn(true);
      setFormData({ email: '', password: '' });
    }
  };

  const handleCloseClick = (e) => {
    e.preventDefault();
    console.log('Close button clicked');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-gray-900 to-black flex items-center justify-center z-50 p-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative w-full max-w-md z-10">
        {/* Card container with dark theme */}
        <div className="relative bg-gray-900/80 backdrop-blur-2xl border border-gray-700/50 rounded-3xl p-8 shadow-2xl">
          {/* Gradient border effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-cyan-500/20 rounded-3xl blur-sm -z-10"></div>
          
          {/* Close button */}
          <button
            onClick={handleCloseClick}
            className="absolute top-4 right-4 w-10 h-10 bg-gray-800/80 backdrop-blur-md border border-gray-600/50 rounded-full flex items-center justify-center text-gray-300 hover:bg-gray-700/80 hover:text-white hover:border-gray-500 transition-all duration-300 group"
          >
            <span className="text-lg group-hover:rotate-90 transition-transform duration-300">✕</span>
          </button>

          {/* Title with gradient text */}
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-2">
              {isSignIn ? 'Welcome Back' : 'Join the Future'}
            </h2>
            <p className="text-gray-400 text-sm">
              {isSignIn ? 'Sign in to your account' : 'Create your account today'}
            </p>
          </div>

          <div className="space-y-6">
            <div className="relative group">
              <input
                type="email"
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-5 py-4 bg-gray-800/50 border border-gray-600/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300 group-hover:border-gray-500/70"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
            
            <div className="relative group">
              <input
                type="password"
                placeholder="Password"
                required
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full px-5 py-4 bg-gray-800/50 border border-gray-600/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300 group-hover:border-gray-500/70"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
            
            <button
              onClick={handleSubmit}
              className="w-full py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 text-white font-bold rounded-2xl hover:from-purple-700 hover:via-pink-700 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transform hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">
                {isSignIn ? '🚀 Sign In' : '✨ Create Account'}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
            <span className="px-4 text-gray-400 text-sm">or</span>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
          </div>

          {/* Toggle section */}
          <div className="text-center">
            <p className="text-gray-400 mb-3">
              {isSignIn ? "New to our platform?" : 'Already have an account?'}
            </p>
            <button 
              onClick={toggleForm} 
              className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent font-bold hover:from-purple-300 hover:via-pink-300 hover:to-cyan-300 transition-all duration-300 underline decoration-purple-400/50 hover:decoration-purple-300 underline-offset-4"
            >
              {isSignIn ? 'Create New Account' : 'Sign In Instead'}
            </button>
          </div>

          {/* Floating orbs for decoration */}
          <div className="absolute -top-6 -left-6 w-12 h-12 bg-purple-500/30 rounded-full blur-lg animate-bounce"></div>
          <div className="absolute -bottom-6 -right-6 w-8 h-8 bg-pink-500/30 rounded-full blur-md animate-bounce" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute top-1/2 -right-8 w-6 h-6 bg-cyan-500/30 rounded-full blur-sm animate-bounce" style={{animationDelay: '1s'}}></div>
        </div>
      </div>
    </div>
  );
}