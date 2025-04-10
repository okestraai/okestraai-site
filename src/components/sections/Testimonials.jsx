// components/sections/Testimonials.jsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CTO, TechCorp Global",
    quote: "Implementing this AI solution has transformed our customer service department. Our response times are down 78% and customer satisfaction is up 45%. The ROI was evident within just two months.",
    image: "/placeholder-avatar.png"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Head of Support, CloudServe",
    quote: "What impressed us most was how well the AI handles complex customer inquiries. It's not just answering simple questions, but actually resolving complicated issues on the first interaction.",
    image: "/placeholder-avatar.png"
  },
  {
    id: 3,
    name: "Jessica Williams",
    role: "VP of Customer Experience, RetailMax",
    quote: "Our customers often can't tell they're talking to an AI. The natural conversation flow and context awareness is remarkable. It's giving us a competitive edge in customer satisfaction.",
    image: "/placeholder-avatar.png"
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  
  const next = () => setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
  const prev = () => setCurrent(current === 0 ? testimonials.length - 1 : current - 1);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Trusted by Leading Companies</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how our AI is transforming customer interactions across industries.
          </p>
        </motion.div>
        
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-indigo-50 to-violet-50 rounded-2xl p-8 md:p-12 shadow-lg"
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="w-24 h-24 rounded-full overflow-hidden bg-indigo-200 flex-shrink-0">
                  {/* Replace with actual testimonial images */}
                  <div className="w-full h-full bg-gradient-to-br from-indigo-400 to-violet-500 flex items-center justify-center text-white text-2xl font-bold">
                    {testimonials[current].name.charAt(0)}
                  </div>
                </div>
                
                <div className="flex-1">
                  <blockquote className="text-xl text-gray-700 mb-6 italic">
                    "{testimonials[current].quote}"
                  </blockquote>
                  
                  <div>
                    <div className="font-bold text-gray-900">{testimonials[current].name}</div>
                    <div className="text-indigo-600">{testimonials[current].role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={prev}
              className="p-2 rounded-full bg-black hover:bg-blue-700 transition"
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition ${
                  current === index ? 'bg-indigo-600' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
            
            <button 
              onClick={next}
              className="p-2 rounded-full bg-black hover:bg-blue-700 transition"
              aria-label="Next testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Testimonials;