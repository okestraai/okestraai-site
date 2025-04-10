'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 relative overflow-hidden bg-gradient-to-br from-violet-50 to-indigo-50">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div 
          className="absolute top-20 right-20 w-64 h-64 rounded-full bg-indigo-200 opacity-30"
          animate={{ 
            x: [0, 10, 0], 
            y: [0, 15, 0],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 8,
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute -bottom-10 -left-10 w-72 h-72 rounded-full bg-purple-300 opacity-20"
          animate={{ 
            x: [0, -10, 0], 
            y: [0, 10, 0],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 6,
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/4 w-40 h-40 rounded-full bg-blue-200 opacity-20"
          animate={{ 
            x: [0, 15, 0], 
            y: [0, -15, 0],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 7,
            ease: "easeInOut" 
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
            <motion.h1 
              className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="block">Conversational AI</span>
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">That Actually Works</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Build powerful voice assistants that understand context, handle complex conversations naturally, and deliver exceptional customer experiences.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a 
                href="/demo" 
                className="px-8 py-3.5 bg-indigo-600 text-white text-center rounded-lg hover:bg-indigo-700 transition shadow-lg shadow-indigo-500/20"
              >
                Try Demo
              </a>
              <a 
                href="/contact" 
                className="px-8 py-3.5 border border-indigo-600 text-indigo-600 text-center rounded-lg hover:bg-indigo-50 transition"
              >
                Contact Sales
              </a>
            </motion.div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative p-2 bg-white rounded-2xl shadow-2xl overflow-hidden">
                <Image 
                  src="/demo-interface.jpg" 
                  width={600} 
                  height={400} 
                  alt="AI Assistant Demo" 
                  className="rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                    <span className="text-sm font-medium text-gray-800">AI Assistant Active</span>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <motion.div 
                className="absolute -right-6 -bottom-6 bg-indigo-100 rounded-lg p-3 shadow-lg"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white mr-3">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Resolution Rate</p>
                    <p className="text-sm font-bold text-gray-800">95% First Contact</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute -left-6 top-1/4 bg-purple-100 rounded-lg p-3 shadow-lg"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white mr-3">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Response Time</p>
                    <p className="text-sm font-bold text-gray-800">Under 1 second</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
        
        {/* Trusted By Section */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-sm text-gray-500 uppercase tracking-wider mb-6">Trusted by industry leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 opacity-70">
            <div className="w-24 h-12 relative">
              <Image src="/logo.jpeg" fill alt="Client Logo" className="object-contain" />
            </div>
            <div className="w-24 h-12 relative">
              <Image src="/logo.jpeg" fill alt="Client Logo" className="object-contain" />
            </div>
            <div className="w-24 h-12 relative">
              <Image src="/logo.jpeg" fill alt="Client Logo" className="object-contain" />
            </div>
            <div className="w-24 h-12 relative">
              <Image src="/logo.jpeg" fill alt="Client Logo" className="object-contain" />
            </div>
            <div className="w-24 h-12 relative">
              <Image src="/logo.jpeg" fill alt="Client Logo" className="object-contain" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;