"use client";
import React, { useState } from 'react';
import { Check, AlertCircle, Upload, Calendar, User, Mail, Phone, GraduationCap } from 'lucide-react';

const Admission = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    email: '',
    phone: '',
    grade: '',
    dateOfBirth: '',
    previousSchool: '',
    address: '',
    emergencyContact: '',
    specialNeeds: '',
    documents: null
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.studentName.trim()) newErrors.studentName = 'Student name is required';
    if (!formData.parentName.trim()) newErrors.parentName = 'Parent name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.grade) newErrors.grade = 'Please select a grade';
    if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required';
    if (!formData.address.trim()) newErrors.address = 'Address is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({...prev, [name]: value}));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({...prev, [name]: ''}));
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 5000000) { // 5MB limit
      setFormData(prev => ({...prev, documents: file}));
    } else {
      alert('File size should be less than 5MB');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };

  const nextStep = () => {
    if (currentStep === 1) {
      // Validate step 1 fields
      const step1Fields = ['studentName', 'parentName', 'email', 'phone'];
      const hasStep1Errors = step1Fields.some(field => !formData[field].trim());
      if (!hasStep1Errors) setCurrentStep(2);
    } else if (currentStep === 2) {
      setCurrentStep(3);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-50 flex items-center justify-center px-6 pt-20">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md mx-auto text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Application Submitted!</h2>
          <p className="text-gray-600 mb-6">Thank you for your interest in Horizon Academy. We'll review your application and contact you within 2-3 business days.</p>
          <button 
            onClick={() => {setIsSubmitted(false); setFormData({studentName: '', parentName: '', email: '', phone: '', grade: '', dateOfBirth: '', previousSchool: '', address: '', emergencyContact: '', specialNeeds: '', documents: null}); setCurrentStep(1);}}
            className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
          >
            Submit Another Application
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-50 py-8 px-4 pt-22">
      {/* Progress Bar */}
      <div className="max-w-4xl mx-auto mb-8">
        <div className="flex items-center justify-between">
          {[1, 2, 3].map((step) => (
            <div key={step} className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                currentStep >= step ? 'bg-teal-600 text-white' : 'bg-gray-300 text-gray-600'
              }`}>
                {step}
              </div>
              {step < 3 && (
                <div className={`w-20 h-1 mx-2 ${
                  currentStep > step ? 'bg-teal-600' : 'bg-gray-300'
                }`} />
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-2 text-sm text-gray-600">
          <span>Basic Info</span>
          <span>Student Details</span>
          <span>Additional Info</span>
        </div>
      </div>

      {/* Header */}
      <div className="bg-gradient-to-r from-teal-600 to-blue-600 text-white py-12 px-6 rounded-2xl shadow-lg mb-8 max-w-4xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Enroll at Horizon Academy</h1>
          <p className="text-lg text-teal-100">Empowering Young Minds, Shaping Bright Futures</p>
        </div>
      </div>

      {/* Form Container */}
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
        {/* Step 1: Basic Information */}
        {currentStep === 1 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <User className="w-6 h-6 mr-2 text-teal-600" />
              Basic Information
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Student Name *</label>
                <input 
                  type="text" 
                  name="studentName" 
                  value={formData.studentName} 
                  onChange={handleInputChange} 
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 transition duration-200 ${
                    errors.studentName ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter student's full name" 
                />
                {errors.studentName && (
                  <p className="text-red-500 text-sm mt-1 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.studentName}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Parent/Guardian Name *</label>
                <input 
                  type="text" 
                  name="parentName" 
                  value={formData.parentName} 
                  onChange={handleInputChange} 
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 transition duration-200 ${
                    errors.parentName ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter parent's full name" 
                />
                {errors.parentName && (
                  <p className="text-red-500 text-sm mt-1 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.parentName}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2 flex items-center">
                  <Mail className="w-4 h-4 mr-1" />
                  Email Address *
                </label>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleInputChange} 
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 transition duration-200 ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="parent@example.com" 
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2 flex items-center">
                  <Phone className="w-4 h-4 mr-1" />
                  Phone Number *
                </label>
                <input 
                  type="tel" 
                  name="phone" 
                  value={formData.phone} 
                  onChange={handleInputChange} 
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 transition duration-200 ${
                    errors.phone ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="(123) 456-7890" 
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.phone}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Student Details */}
        {currentStep === 2 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <GraduationCap className="w-6 h-6 mr-2 text-teal-600" />
              Student Details
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Grade Applying For *</label>
                <select 
                  name="grade" 
                  value={formData.grade} 
                  onChange={handleInputChange} 
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 transition duration-200 ${
                    errors.grade ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select Grade</option>
                  <option value="Pre-K">Pre-K</option>
                  <option value="Kindergarten">Kindergarten</option>
                  {[...Array(12)].map((_, i) => (
                    <option key={i+1} value={`Grade ${i+1}`}>Grade {i+1}</option>
                  ))}
                </select>
                {errors.grade && (
                  <p className="text-red-500 text-sm mt-1 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.grade}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2 flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  Date of Birth *
                </label>
                <input 
                  type="date" 
                  name="dateOfBirth" 
                  value={formData.dateOfBirth} 
                  onChange={handleInputChange} 
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 transition duration-200 ${
                    errors.dateOfBirth ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.dateOfBirth && (
                  <p className="text-red-500 text-sm mt-1 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.dateOfBirth}
                  </p>
                )}
              </div>

              <div className="md:col-span-2">
                <label className="block text-gray-700 font-semibold mb-2">Previous School</label>
                <input 
                  type="text" 
                  name="previousSchool" 
                  value={formData.previousSchool} 
                  onChange={handleInputChange} 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 transition duration-200" 
                  placeholder="Name of previous school (if applicable)" 
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-gray-700 font-semibold mb-2">Home Address *</label>
                <textarea 
                  name="address" 
                  value={formData.address} 
                  onChange={handleInputChange} 
                  rows="3"
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 transition duration-200 ${
                    errors.address ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter complete home address" 
                />
                {errors.address && (
                  <p className="text-red-500 text-sm mt-1 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.address}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Additional Information */}
        {currentStep === 3 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Additional Information</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Emergency Contact</label>
                <input 
                  type="text" 
                  name="emergencyContact" 
                  value={formData.emergencyContact} 
                  onChange={handleInputChange} 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 transition duration-200" 
                  placeholder="Emergency contact name and phone" 
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Special Needs or Accommodations</label>
                <textarea 
                  name="specialNeeds" 
                  value={formData.specialNeeds} 
                  onChange={handleInputChange} 
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 transition duration-200" 
                  placeholder="Please describe any special needs, learning accommodations, or medical conditions we should be aware of" 
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2 flex items-center">
                  <Upload className="w-4 h-4 mr-1" />
                  Upload Documents
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-teal-400 transition duration-200">
                  <input 
                    type="file" 
                    onChange={handleFileUpload}
                    accept=".pdf,.doc,.docx,.jpg,.png"
                    className="hidden" 
                    id="file-upload"
                  />
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600">
                      {formData.documents ? formData.documents.name : 'Click to upload or drag and drop'}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">PDF, DOC, DOCX, JPG, PNG (Max 5MB)</p>
                  </label>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
          <button 
            type="button"
            onClick={prevStep}
            className={`px-6 py-3 rounded-lg font-semibold transition duration-300 ${
              currentStep === 1 
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            disabled={currentStep === 1}
          >
            Previous
          </button>

          {currentStep < 3 ? (
            <button 
              type="button"
              onClick={nextStep}
              className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 shadow-lg"
            >
              Next Step
            </button>
          ) : (
            <button 
              type="button"
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Submitting...
                </>
              ) : (
                'Submit Application'
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admission;