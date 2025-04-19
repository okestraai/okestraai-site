'use client'

import { useState } from 'react';
import React from "react";
import { motion } from "framer-motion";
import Modal from '../../../components/Modal'; // Import the Modal component
import ModalContent from '../../../components/ModalContent'; // Import the ModalContent component

export default function AgentStudio() {
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Hero Section */}
      <header className="pt-24 pb-16 px-4 md:px-8 max-w-7xl mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
        >
          Build Voice AI Agents in Minutes
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10"
        >
          Create, test, and deploy sophisticated AI voice agents that deliver exceptional customer experiences
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <button onClick={() => setIsModalOpen(true)} className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-lg">
            Request Demo
          </button>
          <button className="bg-white hover:bg-gray-50 text-purple-600 font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-lg border border-purple-200 transition-all duration-300 text-lg">
            Watch Video
          </button>
        </motion.div>
      </header>

      {/* Feature Grid Section */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
          The Complete Platform for AI Voice Agents
        </h2>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1: Design */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="bg-purple-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Design</h3>
            <p className="text-gray-600 mb-6">Create conversational flows using our intuitive visual builder. Design natural dialogues with branching logic and dynamic responses.</p>
            <a href="#" className="text-purple-600 font-semibold flex items-center hover:text-purple-700">
              Learn more
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>
          
          {/* Card 2: Build */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="bg-purple-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Build</h3>
            <p className="text-gray-600 mb-6">Integrate knowledge bases, APIs, and custom logic to empower your agent with the context it needs to solve complex customer problems.</p>
            <a href="#" className="text-purple-600 font-semibold flex items-center hover:text-purple-700">
              Learn more
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>
          
          {/* Card 3: Deploy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="bg-purple-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Deploy</h3>
            <p className="text-gray-600 mb-6">Launch your agent across channels with one click. Monitor performance in real-time and continuously improve with AI-powered insights.</p>
            <a href="#" className="text-purple-600 font-semibold flex items-center hover:text-purple-700">
              Learn more
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            Advanced AI Technology
          </h2>
          
          <div className="grid gap-8 md:grid-cols-2">
            {/* Technology Left Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300"
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <span className="bg-purple-100 p-2 rounded-lg mr-3">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </span>
                Voice AI Components
              </h2>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 text-purple-600">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <div className="ml-3">
                    <h3 className="font-semibold text-gray-900">Speech Recognition (ASR)</h3>
                    <p className="text-gray-600">Industry-leading accuracy with domain-specific customization for your business terminology.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 text-purple-600">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <div className="ml-3">
                    <h3 className="font-semibold text-gray-900">Natural Language Understanding</h3>
                    <p className="text-gray-600">Advanced intent recognition and entity extraction powered by our proprietary AI models.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 text-purple-600">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <div className="ml-3">
                    <h3 className="font-semibold text-gray-900">Text-to-Speech (TTS)</h3>
                    <p className="text-gray-600">Ultra-natural voices with emotional intelligence that adapt to conversation context.</p>
                  </div>
                </li>
              </ul>
            </motion.div>

            {/* Technology Right Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300"
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <span className="bg-purple-100 p-2 rounded-lg mr-3">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </span>
                Agent Intelligence
              </h2>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 text-purple-600">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <div className="ml-3">
                    <h3 className="font-semibold text-gray-900">Reasoning Engine</h3>
                    <p className="text-gray-600">Large language model orchestration with enterprise-grade reliability and factual grounding.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 text-purple-600">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <div className="ml-3">
                    <h3 className="font-semibold text-gray-900">Knowledge Integration</h3>
                    <p className="text-gray-600">Seamlessly connect to your data sources for real-time, accurate information retrieval.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 text-purple-600">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <div className="ml-3">
                    <h3 className="font-semibold text-gray-900">Human Handoff</h3>
                    <p className="text-gray-600">Intelligent escalation protocols with full context transfer to human agents when needed.</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Studio Interface Preview */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Intuitive Studio Interface
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Design, test, and analyze your voice agents in our comprehensive visual environment
          </p>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-gray-800 rounded-2xl shadow-2xl p-4 overflow-hidden"
        >
          {/* Placeholder for dashboard interface */}
          <div className="bg-gray-900 rounded-xl min-h-96 flex items-center justify-center p-8">
            <div className="grid grid-cols-12 gap-4 w-full">
              {/* Left sidebar */}
              <div className="col-span-3 bg-gray-800 rounded-lg p-4 h-80">
                <div className="h-8 w-24 bg-gray-700 rounded mb-4"></div>
                <div className="space-y-2">
                  <div className="h-6 w-full bg-gray-700 rounded"></div>
                  <div className="h-6 w-full bg-gray-700 rounded"></div>
                  <div className="h-6 w-full bg-purple-700 rounded"></div>
                  <div className="h-6 w-full bg-gray-700 rounded"></div>
                </div>
              </div>
              
              {/* Center area */}
              <div className="col-span-6 bg-gray-800 rounded-lg p-4 h-80">
                <div className="flex justify-between mb-4">
                  <div className="h-8 w-32 bg-gray-700 rounded"></div>
                  <div className="h-8 w-20 bg-purple-700 rounded"></div>
                </div>
                <div className="bg-gray-900 rounded-lg p-3 h-64 flex items-center justify-center">
                  <div className="w-full space-y-4">
                    <div className="h-12 w-1/2 bg-gray-800 rounded mx-auto"></div>
                    <div className="flex justify-center space-x-3">
                      <div className="h-16 w-16 rounded-full bg-purple-600"></div>
                      <div className="h-16 w-16 rounded-full bg-gray-700"></div>
                      <div className="h-16 w-16 rounded-full bg-gray-700"></div>
                    </div>
                    <div className="h-12 w-3/4 bg-gray-800 rounded mx-auto"></div>
                  </div>
                </div>
              </div>
              
              {/* Right sidebar */}
              <div className="col-span-3 bg-gray-800 rounded-lg p-4 h-80">
                <div className="h-8 w-24 bg-gray-700 rounded mb-4"></div>
                <div className="space-y-3">
                  <div className="h-20 w-full bg-gray-700 rounded"></div>
                  <div className="h-20 w-full bg-gray-700 rounded"></div>
                  <div className="h-20 w-full bg-gray-700 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 md:px-8 bg-purple-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16">
            Trusted by Industry Leaders
          </h2>
          
          <div className="grid gap-8 md:grid-cols-3">
            {/* Testimonial 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <div className="text-purple-600 mb-4">
                <svg className="w-8 h-8 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391C14.017 10.745 16.748 8 20.223 8v3.907c-1.452 0-2.631 1.19-2.631 2.655V21h-3.575zm-9 0v-7.391C5.017 10.745 7.748 8 11.223 8v3.907c-1.452 0-2.631 1.19-2.631 2.655V21H5.017z" />
                </svg>
              </div>
              <p className="text-gray-600 mb-6">
                &quot;Implementing voice agents with Poly.ai has transformed our customer service. We&apos;ve reduced wait times by 85% while maintaining a 92% CSAT score.&quot;
              </p>
              <div>
                <h4 className="font-semibold text-gray-900">Sarah Johnson</h4>
                <p className="text-gray-500 text-sm">CTO, Global Retail Inc.</p>
              </div>
            </motion.div>
            
            {/* Testimonial 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <div className="text-purple-600 mb-4">
                <svg className="w-8 h-8 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391C14.017 10.745 16.748 8 20.223 8v3.907c-1.452 0-2.631 1.19-2.631 2.655V21h-3.575zm-9 0v-7.391C5.017 10.745 7.748 8 11.223 8v3.907c-1.452 0-2.631 1.19-2.631 2.655V21H5.017z" />
                </svg>
              </div>
              <p className="text-gray-600 mb-6">
                &quot;The Agent Studio platform made it incredibly easy to design and deploy sophisticated voice AI. We were live in weeks instead of months.&quot;
              </p>
              <div>
                <h4 className="font-semibold text-gray-900">Michael Chen</h4>
                <p className="text-gray-500 text-sm">VP of Innovation, TechFinance</p>
              </div>
            </motion.div>
            
            {/* Testimonial 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <div className="text-purple-600 mb-4">
                <svg className="w-8 h-8 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391C14.017 10.745 16.748 8 20.223 8v3.907c-1.452 0-2.631 1.19-2.631 2.655V21h-3.575zm-9 0v-7.391C5.017 10.745 7.748 8 11.223 8v3.907c-1.452 0-2.631 1.19-2.631 2.655V21H5.017z" />
                </svg>
              </div>
              <p className="text-gray-600 mb-6">
                &quot;Our customers can&apos;t tell they&apos;re talking to an AI agent. The natural conversations and problem-solving abilities have exceeded our expectations.&quot;
              </p>
              <div>
                <h4 className="font-semibold text-gray-900">Emma Rodriguez</h4>
                <p className="text-gray-500 text-sm">Customer Experience Director, HealthServe</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to transform your customer experience?
              </h2>
              <p className="text-purple-100 mb-8">
                Join leading enterprises using Poly.ai&apos;s Agent Studio to deliver exceptional AI-powered voice interactions.
              </p>
              <button onClick={() => setIsModalOpen(true)} className="bg-white hover:bg-gray-50 text-purple-600 font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-lg">
                Request Demo
              </button>
            </div>
            <div className="hidden md:block bg-purple-500 relative">
              <div className="absolute inset-0 bg-opacity-20 flex items-center justify-center">
                <svg className="w-24 h-24 text-white opacity-30" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm-1-7v-6l5 3-5 3z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ModalContent onClose={() => setIsModalOpen(false)} />
      </Modal>
      
    </div>
  );
}
