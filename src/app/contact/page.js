'use client';
import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-4 bg-gradient-to-br from-indigo-300 via-purple-200 to-pink-100 text-gray-900">
      <div className="w-full max-w-md bg-white/80 p-8 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Contact Me</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block">
            <span className="text-sm font-medium">Name</span>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium">Email</span>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium">Message</span>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
              rows="4"
              required
            />
          </label>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded transition-colors"
          >
            Send
          </button>
        </form>

        {submitted && (
          <p className="mt-4 text-center text-green-600 font-semibold">Message sent!</p>
        )}
      </div>
    </section>
  );
}
