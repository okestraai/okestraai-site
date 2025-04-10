'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const CTA = () => {
  return (
    <section className="py-20 bg-indigo-600 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-white"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-white"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Ready to transform your customer experience?
          </h2>
          
          <p className="text-xl text-indigo-100 mb-10">
            Join leading companies using our conversational AI to deliver exceptional customer service at scale.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/demo" 
              className="px-8 py-4 bg-white text-indigo-600 font-medium rounded-lg shadow-md hover:shadow-xl transition text-center"
            >
              Try Demo
            </Link>
            <Link 
              href="/contact" 
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition text-center"
            >
              Contact Sales
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;