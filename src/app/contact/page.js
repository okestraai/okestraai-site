"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log('Form submitted:', formData);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-100 flex items-center justify-center py-12 px-4">
            <div className="w-full max-w-5xl bg-white/90 rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
                {/* Left: Contact Info */}
                <motion.div
                    className="flex flex-col justify-center p-8 bg-gradient-to-br from-indigo-600 to-purple-600 text-white"
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <h2 className="text-3xl font-extrabold mb-4">Contact Okestra AI</h2>
                    <p className="mb-8 text-indigo-100">
                        Let’s talk about how Okestra AI can help your business. Fill out the form or reach us directly.
                    </p>
                    <div className="space-y-6 text-indigo-100">
                        <div>
                            <span className="block font-semibold text-white mb-1">Email</span>
                            <a href="mailto:info@okestra.ai" className="hover:underline">info@okestra.ai</a>
                        </div>
                        <div>
                            <span className="block font-semibold text-white mb-1">Phone</span>
                            <a href="tel:+1234567890" className="hover:underline">+1 (234) 567-890</a>
                        </div>
                        <div>
                            <span className="block font-semibold text-white mb-1">Headquarters</span>
                            <span>123 AI Avenue, Innovation City, NY 10001</span>
                        </div>
                    </div>
                    <div className="flex gap-4 mt-8">
                        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                            <img src="/download.png" alt="LinkedIn" className="h-7 hover:scale-110 transition" />
                        </a>
                        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                            <img src="/download.png" alt="Twitter" className="h-7 hover:scale-110 transition" />
                        </a>
                        {/* Add more social icons as needed */}
                    </div>
                </motion.div>

                {/* Right: Contact Form */}
                <motion.div
                    className="p-8 flex flex-col justify-center"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="5"
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-3 rounded-lg shadow hover:from-purple-600 hover:to-indigo-600 transition"
                        >
                            Send Message
                        </button>
                    </form>
                </motion.div>
            </div>
        </main>
    );
}