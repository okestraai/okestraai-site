'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm py-3' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image src="/logo.jpeg" alt="Logo" width={40} height={40} />
          <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Okestra AI</span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/product" className="text-gray-700 hover:text-indigo-600 transition">Product</Link>
          <Link href="/solutions" className="text-gray-700 hover:text-indigo-600 transition">Solutions</Link>
          <Link href="/customers" className="text-gray-700 hover:text-indigo-600 transition">Customers</Link>
          <Link href="/about" className="text-gray-700 hover:text-indigo-600 transition">About</Link>
          <Link href="/contact" className="px-5 py-2.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
            Get Started
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-gray-700 hover:text-indigo-600 transition"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white shadow-lg absolute w-full"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link href="/product" className="text-gray-700 py-2 hover:text-indigo-600 transition">Product</Link>
            <Link href="/solutions" className="text-gray-700 py-2 hover:text-indigo-600 transition">Solutions</Link>
            <Link href="/customers" className="text-gray-700 py-2 hover:text-indigo-600 transition">Customers</Link>
            <Link href="/about" className="text-gray-700 py-2 hover:text-indigo-600 transition">About</Link>
            <Link href="/contact" className="px-4 py-2.5 bg-indigo-600 text-white rounded-lg text-center hover:bg-indigo-700 transition">
              Get Started
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;