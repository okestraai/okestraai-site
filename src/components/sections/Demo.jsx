'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const DemoSection = () => {
  const [activeDemo, setActiveDemo] = useState('customer-service');
  
  const demoOptions = [
    { 
      id: 'Paystack Custommer Support', 
      label: 'Paystack Custommer Support',
      videoSrc: '/demo-vid.webm' // You can add more video sources here
    },
    { 
      id: 'Paystack Custommer Telegram', 
      label: 'Paystack Custommer Telegram',
      videoSrc: '/demo-vid.webm' // Replace with actual sales demo video
    },
    { 
      id: 'Paystack Customer Support with Voice Transcriptions', 
      label: 'Paystack Customer Support with Voice Transcriptions',
      videoSrc: '/demo-vid.webm' // Replace with actual appointments demo video
    }
  ];
  
  return (
    <section className="py-20 bg-indigo-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Experience Our AI in Action</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how our conversational AI handles different scenarios.
          </p>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="w-full lg:w-1/3">
            <div className="bg-white rounded-xl p-4 shadow-md">
              <h3 className="text-lg text-black font-semibold mb-4">Select a scenario:</h3>
              <div className="flex flex-col gap-2">
                {demoOptions.map(option => (
                  <button
                    key={option.id}
                    onClick={() => setActiveDemo(option.id)}
                    className={`p-4 rounded-lg text-left ${
                      activeDemo === option.id 
                        ? 'bg-indigo-600 text-white' 
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                    } transition`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <motion.div 
            key={activeDemo}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-2/3 bg-white rounded-xl p-6 shadow-lg"
          >
            <div className="flex items-center justify-between mb-4 border-b pb-4">
              <h3 className="text-xl font-bold text-gray-900">
                {demoOptions.find(o => o.id === activeDemo)?.label} Demo
              </h3>
              <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Live Demo</span>
            </div>
            
            <div className="h-96 bg-gray-50 rounded-lg flex items-center justify-center overflow-hidden">
              <video
                className="w-full h-full object-cover"
                controls
                autoPlay
                muted
                loop
                playsInline
              >
                <source 
                  src={demoOptions.find(o => o.id === activeDemo)?.videoSrc} 
                  type="video/webm" 
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;