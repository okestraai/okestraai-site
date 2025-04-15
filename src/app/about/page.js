'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Modal from '../../components/Modal'
import ModalContent from '../../components/ModalContent'
import Link from 'next/link'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
}

export default function AboutPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <motion.div 
                  className="text-center"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                >
                    <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 mb-4 drop-shadow-lg">
                        About Okestra AI
                    </h1>
                    <p className="text-2xl text-indigo-700 font-semibold mb-6">
                        Empowering Businesses with Next-Generation AI Solutions
                    </p>
                </motion.div>

                {/* Mission & Values */}
                <motion.div 
                  className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                >
                    <div className="rounded-xl bg-white/80 shadow-lg border-l-4 border-indigo-500 p-6 hover:scale-105 transition-transform duration-300">
                        <h2 className="text-2xl font-bold text-indigo-700 mb-2">Our Mission</h2>
                        <p className="text-gray-700">
                            To democratize access to advanced AI, empowering every business to innovate and thrive responsibly.
                        </p>
                    </div>
                    <div className="rounded-xl bg-white/80 shadow-lg border-l-4 border-purple-500 p-6 hover:scale-105 transition-transform duration-300">
                        <h2 className="text-2xl font-bold text-purple-700 mb-2">Core Values</h2>
                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                            <li>Innovation</li>
                            <li>Transparency</li>
                            <li>Collaboration</li>
                            <li>Customer Success</li>
                            <li>Ethical AI</li>
                        </ul>
                    </div>
                </motion.div>

                {/* Team Introduction */}
                <motion.div 
                  className="mt-16"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                >
                    <h2 className="text-2xl font-bold text-center text-pink-600 mb-6">Meet Our Leadership</h2>
                    <div className="flex flex-wrap justify-center gap-8">
                        <motion.div whileHover={{ scale: 1.08 }} className="flex flex-col items-center bg-white/80 rounded-xl shadow-md p-4 transition">
                            <img src="/download.png" alt="CEO" className="w-24 h-24 rounded-full object-cover mb-2 border-4 border-indigo-200 shadow" />
                            <span className="font-semibold text-gray-900">Jane Doe</span>
                            <span className="text-gray-600 text-sm">Founder & CEO</span>
                            <p className="text-gray-500 text-xs text-center mt-1">Visionary leader with 15+ years in AI and enterprise software.</p>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.08 }} className="flex flex-col items-center bg-white/80 rounded-xl shadow-md p-4 transition">
                            <img src="/download.png" alt="CTO" className="w-24 h-24 rounded-full object-cover mb-2 border-4 border-purple-200 shadow" />
                            <span className="font-semibold text-gray-900">John Smith</span>
                            <span className="text-gray-600 text-sm">Co-Founder & CTO</span>
                            <p className="text-gray-500 text-xs text-center mt-1">AI architect passionate about scalable, ethical technology.</p>
                        </motion.div>
                        {/* Add more team members as needed */}
                    </div>
                </motion.div>

                {/* Timeline / Milestones */}
                <motion.div 
                  className="mt-16"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                >
                    <h2 className="text-2xl font-bold text-center text-indigo-600 mb-6">Our Journey</h2>
                    <ol className="relative border-l-4 border-indigo-300 ml-4">
                        <li className="mb-10 ml-6 relative">
                            <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full ring-8 ring-white shadow"></span>
                            <h3 className="font-semibold text-gray-900">2021</h3>
                            <p className="text-gray-600">Okestra AI founded with a mission to make AI accessible.</p>
                        </li>
                        <li className="mb-10 ml-6 relative">
                            <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-gradient-to-br from-pink-500 to-indigo-500 rounded-full ring-8 ring-white shadow"></span>
                            <h3 className="font-semibold text-gray-900">2022</h3>
                            <p className="text-gray-600">Launched our first AI-powered automation platform.</p>
                        </li>
                        <li className="ml-6 relative">
                            <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full ring-8 ring-white shadow"></span>
                            <h3 className="font-semibold text-gray-900">2024</h3>
                            <p className="text-gray-600">Recognized as a leader in ethical AI by industry analysts.</p>
                        </li>
                    </ol>
                </motion.div>

                {/* Customers & Testimonials */}
                <motion.div 
                  className="mt-16"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                >
                    <h2 className="text-2xl font-bold text-center text-indigo-700 mb-6">Trusted By</h2>
                    <div className="flex flex-wrap justify-center items-center gap-8 mb-6">
                        <img src="/download.png" alt="Customer 1" className="h-12 grayscale hover:grayscale-0 transition duration-300" />
                        <img src="/download.png" alt="Customer 2" className="h-12 grayscale hover:grayscale-0 transition duration-300" />
                        <img src="/download.png" alt="Customer 3" className="h-12 grayscale hover:grayscale-0 transition duration-300" />
                        {/* Add more logos as needed */}
                    </div>
                    <div className="max-w-2xl mx-auto">
                        <blockquote className="border-l-4 border-indigo-600 pl-4 italic text-gray-700 mb-4 bg-white/70 rounded-lg shadow">
                            "Okestra AI transformed our business processes and gave us a competitive edge."
                        </blockquote>
                        <span className="block text-right text-gray-500">— CTO, Acme Corp</span>
                    </div>
                </motion.div>

                {/* Awards & Certifications */}
                <motion.div 
                  className="mt-16"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                >
                    <h2 className="text-2xl font-bold text-center text-purple-700 mb-6">Awards & Certifications</h2>
                    <div className="flex flex-wrap justify-center items-center gap-8">
                        <div className="flex flex-col items-center bg-white/80 rounded-xl shadow-md p-4">
                            <img src="/download.png" alt="Award 1" className="h-12 mb-2" />
                            <span className="text-gray-700 text-sm">AI Innovator Award 2023</span>
                        </div>
                        <div className="flex flex-col items-center bg-white/80 rounded-xl shadow-md p-4">
                            <img src="/download.png" alt="Certification 1" className="h-12 mb-2" />
                            <span className="text-gray-700 text-sm">ISO 27001 Certified</span>
                        </div>
                        {/* Add more awards/certifications as needed */}
                    </div>
                </motion.div>

                {/* Technology Stack / Unique Approach */}
                <motion.div 
                  className="mt-16"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                >
                    <h2 className="text-2xl font-bold text-center text-indigo-700 mb-6">Our Technology</h2>
                    <p className="text-gray-700 text-center max-w-3xl mx-auto bg-white/70 rounded-lg p-4 shadow">
                        Okestra AI leverages state-of-the-art machine learning, natural language processing, and scalable cloud infrastructure to deliver secure, reliable, and ethical AI solutions. Our proprietary algorithms are designed for transparency and adaptability, ensuring our clients stay ahead in a rapidly evolving digital landscape.
                    </p>
                </motion.div>

                {/* Social Proof & Press Mentions */}
                <motion.div 
                  className="mt-16 text-center"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                >
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">In the Press</h2>
                    <div className="flex flex-wrap justify-center gap-6 mb-4">
                        <a href="https://techcrunch.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline hover:text-pink-600 transition">TechCrunch</a>
                        <a href="https://forbes.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline hover:text-pink-600 transition">Forbes</a>
                        <a href="https://venturebeat.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline hover:text-pink-600 transition">VentureBeat</a>
                        {/* Add more press links as needed */}
                    </div>
                    <div className="flex justify-center gap-4 mt-2">
                        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                            <img src="/download.png" alt="Twitter" className="h-6 hover:scale-110 transition" />
                        </a>
                        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                            <img src="/download.png" alt="LinkedIn" className="h-6 hover:scale-110 transition" />
                        </a>
                        {/* Add more social icons as needed */}
                    </div>
                </motion.div>

                {/* Careers CTA */}
                <motion.div 
                  className="mt-16 text-center"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                >
                    <h2 className="text-2xl font-bold text-pink-600 mb-4">Join Our Team</h2>
                    <p className="text-gray-700 mb-4">
                        We're always looking for talented, passionate people to join us on our mission.
                    </p>
                    <Link
                        href="/careers"
                        className="inline-block bg-gradient-to-r from-indigo-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:from-pink-600 hover:to-indigo-600 transition-colors font-semibold shadow"
                    >
                        View Careers
                    </Link>
                </motion.div>

                {/* Main CTA */}
                <motion.div 
                  className="mt-16 flex flex-col sm:flex-row justify-center gap-4"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                >
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="inline-block bg-gradient-to-r from-indigo-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:from-pink-600 hover:to-indigo-600 transition-colors font-semibold shadow"
                    >
                        Request a Demo
                    </button>
                    <Link
                        href="/contact"
                        className="inline-block border-2 border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-50 transition-colors font-semibold shadow"
                    >
                        Contact Us
                    </Link>
                </motion.div>
            </div>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <ModalContent onClose={() => setIsModalOpen(false)} />
            </Modal>
        </div>
    )
}