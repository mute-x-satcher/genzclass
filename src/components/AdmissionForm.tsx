import React, { useState } from 'react';
import { CheckCircle, Loader } from 'lucide-react';
import { storeStudentData, Student } from '../firebase/firebase'


interface FormErrors {
  parentName?: string;
  studentName?: string;
  mobile?: string;
  email?: string;
  grade?: string;
}

const AdmissionForm = () => {
  const [formData, setFormData] = useState<Student>({
    parentName: '',
    studentName: '',
    mobile: '',
    email: '',
    grade: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: FormErrors = {};

    if (formData.parentName.length < 2) {
      newErrors.parentName = 'Parent\'s name must be at least 2 characters long';
    }

    if (formData.studentName.length < 2) {
      newErrors.studentName = 'Student\'s name must be at least 2 characters long';
    }

    const mobileRegex = /^\+?[\d\s-]{10,}$/;
    if (!mobileRegex.test(formData.mobile)) {
      newErrors.mobile = 'Please enter a valid mobile number';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.grade) {
      newErrors.grade = 'Please select a standard';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        // Simulate API call
        await storeStudentData(formData);

        console.log('Form submitted:', formData);


        setIsSubmitted(true);
        // Reset form
        setFormData({
          parentName: '',
          studentName: '',
          mobile: '',
          email: '',
          grade: '',
        });
      } catch (error) {
        console.error('Error submitting form:', error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-md w-full mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md text-center pt-32">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Application Submitted!</h2>
            <p className="text-gray-600 mb-6">
              Thank you for your interest in Genz Class. We will contact you shortly.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors duration-200"
            >
              Submit Another Application
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900 pt-6 ">
            Admission Application
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Fill out the form below to start your journey with us
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
          <div className="space-y-6">
            <div>
              <label htmlFor="parentName" className="block text-sm font-medium text-gray-700">
                Parent's Name
              </label>
              <input
                type="text"
                id="parentName"
                name="parentName"
                placeholder="Name and Surname"
                value={formData.parentName}
                onChange={handleChange}
                className={`mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-12 ${errors.parentName ? 'border-red-500' : ''
                  }`}
              />
              {errors.parentName && (
                <p className="mt-1 text-sm text-red-600">{errors.parentName}</p>
              )}
            </div>

            <div>
              <label htmlFor="studentName" className="block text-sm font-medium text-gray-700">
                Student's Name
              </label>
              <input
                type="text"
                id="studentName"
                name="studentName"
                placeholder="Name and Surname"
                value={formData.studentName}
                onChange={handleChange}
                className={`mt-1 block p-2 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-12 ${errors.studentName ? 'border-red-500' : ''
                  }`}
              />
              {errors.studentName && (
                <p className="mt-1 text-sm text-red-600">{errors.studentName}</p>
              )}
            </div>

            <div>
              <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
                Mobile Number
              </label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                placeholder="Your Mobile No."
                value={formData.mobile}
                onChange={handleChange}
                className={`mt-1 block p-2 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-12 ${errors.mobile ? 'border-red-500' : ''
                  }`}
              />
              {errors.mobile && (
                <p className="mt-1 text-sm text-red-600">{errors.mobile}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="exapmle@gmail.com"
                value={formData.email}
                onChange={handleChange}
                className={`mt-1 block p-2 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-12 ${errors.email ? 'border-red-500' : ''
                  }`}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="grade" className="block text-sm font-medium text-gray-700">
                Standard Applying For
              </label>
              <select
                id="grade"
                name="grade"
                value={formData.grade}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-12 ${errors.grade ? 'border-red-500' : ''
                  }`}
              >
                <option value="">Select Standard</option>
                <option value="1">Standard 1</option>
                <option value="2">Standard 2</option>
                <option value="3">Standard 3</option>
                <option value="4">Standard 4</option>
                <option value="5">Standard 5</option>
                <option value="6">Standard 6</option>
                <option value="7">Standard 7</option>
                <option value="8">Standard 8</option>
                <option value="9">Standard 9</option>
                <option value="10">Standard 10</option>
              </select>
              {errors.grade && (
                <p className="mt-1 text-sm text-red-600">{errors.grade}</p>
              )}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed h-12"
            >
              {isSubmitting ? (
                <>
                  <Loader className="animate-spin -ml-1 mr-2 h-4 w-4" />
                  Submitting...
                </>
              ) : (
                'Submit Application'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdmissionForm;