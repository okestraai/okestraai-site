"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import CTA from '@/components/sections/CTA';

export default function About() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-100 py-19 px-4">
            <div className="container mx-auto max-w-6xl">
                {/* Hero Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        About Okestra AI
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        We&apos;re on a mission to revolutionize business communication through advanced AI technology.
                    </p>
                </motion.div>

                {/* Team Section */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Leadership Team</h2>
                    <div className="grid md:grid-cols-2 gap-8" id='#team'>
                        <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                            <Image
                                src="/download.png"
                                alt="CEO"
                                width={96}
                                height={96}
                                className="rounded-full object-cover mb-2 border-4 border-indigo-200 shadow mx-auto"
                            />
                            <h3 className="text-xl font-bold text-gray-900 mb-2">John Doe</h3>
                            <p className="text-indigo-600 font-medium mb-4">CEO & Founder</p>
                            <p className="text-gray-600">
                                Visionary leader with 15+ years of experience in AI and business innovation.
                        </p>
                    </div>
                        <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                            <Image
                                src="/download.png"
                                alt="CTO"
                                width={96}
                                height={96}
                                className="rounded-full object-cover mb-2 border-4 border-purple-200 shadow mx-auto"
                            />
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Jane Smith</h3>
                            <p className="text-purple-600 font-medium mb-4">CTO</p>
                            <p className="text-gray-600">
                                Technical expert specializing in machine learning and natural language processing.
                            </p>
                    </div>
                    </div>
                </motion.section>

                {/* Partners Section */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Trusted by Industry Leaders</h2>
                    <div className="grid grid-cols-3 gap-8 items-center justify-items-center" id='#partners'>
                        <Image
                            src="/download.png"
                            alt="Customer 1"
                            width={48}
                            height={48}
                            className="grayscale hover:grayscale-0 transition duration-300"
                        />
                        <Image
                            src="/download.png"
                            alt="Customer 2"
                            width={48}
                            height={48}
                            className="grayscale hover:grayscale-0 transition duration-300"
                        />
                        <Image
                            src="/download.png"
                            alt="Customer 3"
                            width={48}
                            height={48}
                            className="grayscale hover:grayscale-0 transition duration-300"
                        />
                    </div>
                </motion.section>

                {/* Awards Section */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Recognition & Awards</h2>
                    <div className="grid md:grid-cols-2 gap-8" id='#awards'>
                        <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                            <Image
                                src="/download.png"
                                alt="Award 1"
                                width={48}
                                height={48}
                                className="mb-2 mx-auto"
                            />
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Innovation Award 2023</h3>
                            <p className="text-gray-600">
                                Recognized for breakthrough AI technology in business communication.
                            </p>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                            <Image
                                src="/download.png"
                                alt="Certification 1"
                                width={48}
                                height={48}
                                className="mb-2 mx-auto"
                            />
                            <h3 className="text-xl font-bold text-gray-900 mb-2">ISO 27001 Certified</h3>
                            <p className="text-gray-600">
                                Committed to maintaining the highest standards of information security.
                            </p>
                        </div>
                    </div>
                </motion.section>

                {/* Social Links */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.8 }}
                    className="flex justify-center gap-6 mb-4"
                >
                        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                        <Image
                            src="/download.png"
                            alt="Twitter"
                            width={34}
                            height={34}
                            className="hover:scale-110 transition"
                        />
                        </a>
                        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                        <Image
                            src="/download.png"
                            alt="LinkedIn"
                            width={34}
                            height={34}
                            className="hover:scale-110 transition"
                        />
                    </a>
                </motion.div>
            </div>
            <CTA />
        </main>
    );
}