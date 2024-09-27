'use client'

import { useState } from 'react';
import emailjs from 'emailjs-com';

export default function ContactForm() {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    phone: '',
    email: '',
    company: '',
    message: '',
  });

  // State to manage form submission status
  const [formStatus, setFormStatus] = useState<{
    submitting: boolean;
    submitted: boolean;
    error: string | null;
  }>({
    submitting: false,
    submitted: false,
    error: null,
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
  
    if (name === 'phone') {
      // Allow only numbers and validate based on the prefix
      const sanitizedValue = value.replace(/\D/g, '+'); // Remove non-numeric characters
      let validValue = '';
  
      if (sanitizedValue.startsWith('92')) {
        validValue = sanitizedValue.slice(0, 11); // Limit to 13 digits if it starts with +92
      } else if (sanitizedValue.startsWith('0')) {
        validValue = sanitizedValue.slice(0, 11); // Limit to 10 digits if it starts with 0
      } else {
        validValue = sanitizedValue.slice(0, 13); // Default to 10 digits
      }
  
      setFormData((prev) => ({
        ...prev,
        phone: validValue,
      }));
    } else if (name === 'email') {
      // Allow typing and validate email format separately
      setFormData((prev) => ({
        ...prev,
        email: value,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };
  

  // Form validation
  const validateForm = () => {
    const { name, subject, phone, email, message } = formData;
    if (!name || !subject || !phone || !email || !message) {
      return false;
    }
    // Check for valid email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setFormStatus({ ...formStatus, error: 'Invalid email format.' });
      return false;
    }
    return true;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic form validation
    if (!validateForm()) {
      setFormStatus({ ...formStatus, error: 'Please fill all required fields correctly.' });
      return;
    }

    setFormStatus({ ...formStatus, submitting: true, error: null });

    // EmailJS integration
    const serviceId = 'service_5u7hjal';
    const templateId = 'template_mbm451d';
    const userId = 'BJwjHcjvuOk28UDNC';

    try {
      await emailjs.send(serviceId, templateId, formData, userId);
      setFormData({
        name: '',
        subject: '',
        phone: '',
        email: '',
        company: '',
        message: '',
      });
      setFormStatus({ submitting: false, submitted: true, error: null });
    } catch (error) {
      setFormStatus({ submitting: false, submitted: false, error: 'Submission failed, please try again later.' });
    }
  };


  return (
    <section className="min-h-screen flex items-center justify-center md:items-start md:justify-start mb-40">
        <img
        src='paint-hero-left.png'
        alt='paint-hero-left'
        className='flex flex-row justify-center mt-24 items-center z-10 relative hidden md:block md:w-1/12 md:h-1/12 md:w-1/12 md:h-1/12 xl:h-2/12 xl:w-2/12 2xl:h-2/12 2xl:w-2/12'
        />
      <div className="lg:w-full max-w-6xl p-8">
        <h2 className="tlg:text-xl text-center mb-8 md:mb-20 md:text-lg text-2xl xl:text-3xl 2xl:text-4xl text-[#006837] 
        font-semibold font-boogaloo uppercase">CONTACT US</h2>

       

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-36 relative z-20">
          {/* Left Side */}
          <div>
            <label className="block mb-2 text-sm font-medium text-[#444444]">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="regular-12 lg:regular-16 w-full px-4 py-2 border-2 border-green-70 bg-white-10 rounded-3xl focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>

          {/* Right Side */}
          <div className='hidden md:block'>
            <label className="block mb-2 text-sm font-medium text-[#444444]">Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Enter your Subject"
              className="regular-12 lg:regular-16 w-full px-4 py-2 border-2 border-green-70 bg-white-10 rounded-3xl focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>
          <div className='md:hidden block'>
            <label className="block mb-2 text-sm font-medium text-[#444444]">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your Contact number"
              className="regular-12 lg:regular-16 w-full px-4 py-2 border-2 border-green-70 bg-white-10 rounded-3xl focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>

          {/* Left Side */}
          <div className='hidden md:block'>
            <label className="block mb-2 text-sm font-medium text-[#444444]">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your Contact number"
              className="regular-12 lg:regular-16 w-full px-4 py-2 border-2 border-green-70 bg-white-10 rounded-3xl focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>
          <div className='block md:hidden'>
            <label className="block mb-2 text-sm font-medium text-[#444444]">Your Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="regular-12 lg:regular-16 w-full px-4 py-2 border-2 border-green-70 bg-white-10 rounded-3xl focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>

          {/* Right Side */}
          <div className="md:row-span-4 hidden md:block">
            <label className="block mb-2 text-sm font-medium text-[#444444]">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your Message"
              className="regular-12 lg:regular-16 w-full px-4 py-2 border-2 border-green-70 bg-white-10 rounded-3xl h-56 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            ></textarea>
          </div>

          <div className='block md:hidden'>
            <label className="block mb-2 text-sm font-medium text-[#444444]">Company Name</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Enter your Company Name"
              className="regular-12 lg:regular-16 w-full px-4 py-2 border-2 border-green-70 bg-white-10 rounded-3xl focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          

          {/* Left Side */}
          <div className='md:block hidden'>
            <label className="block mb-2 text-sm font-medium text-[#444444]">Your Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="regular-12 lg:regular-16 w-full px-4 py-2 border-2 border-green-70 bg-white-10 rounded-3xl focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>

     

          {/* Left Side */}
          <div className='hidden md:block'>
            <label className="block mb-2 text-sm font-medium text-[#444444]">Company Name</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Enter your Company Name"
              className="regular-12 lg:regular-16 w-full px-4 py-2 border-2 border-green-70 bg-white-10 rounded-3xl focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div className='md:hidden block'>
            <label className="block mb-2 text-sm font-medium text-[#444444]">Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Enter your Subject"
              className="regular-12 lg:regular-16 w-full px-4 py-2 border-2 border-green-70 bg-white-10 rounded-3xl focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>

          <div className="md:row-span-4 md:hidden block">
            <label className="block mb-2 text-sm font-medium text-[#444444]">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your Message"
              className="regular-12 lg:regular-16 w-full px-4 py-2 border-2 border-green-70 bg-white-10 rounded-3xl h-56 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 flex justify-center items-center">
            <button
              type="submit"
              disabled={formStatus.submitting}
              className="mb-4 px-6 py-2.5 bg-red-90 text-white-10 font-semibold rounded-3xl hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400"
            >
              {formStatus.submitting ? 'Submitting...' : 'SUBMIT'}
            </button>
          </div>
        </form>

         {/* Display form submission status */}
         {formStatus.error && <p className="text-red-500 mb-4 text-center">{formStatus.error}</p>}
        {formStatus.submitted && <p className="text-green-500 mb-4 text-center">Your message has been sent successfully!</p>}
      </div>
      <img
        src='green-circle-contact.png'
        alt='green-circle-contact'
        className='flex flex-row justify-start items-center z-10 md: ml-0 2xl:-ml-20 relative hidden md:block md:w-1/12 md:h-1/12 md:w-1/12 md:h-1/12  xl:h-2/12 xl:w-2/12 2xl:h-2/12 2xl:w-2/12'
        />
    </section>
  );
}
