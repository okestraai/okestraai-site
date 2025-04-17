'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Modal from '../Modal'; // Import the Modal component
import ModalContent from '../ModalContent'; // Import the ModalContent component
import { label } from 'framer-motion/client';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

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

  // Dropdown menu items
  const dropdownItems = {
    product: [
      { label: 'Agent Studio', href: '/product/agent-studio' },
      { label: 'Technology', href: '/product/technology' },
      { label: 'Integrations', href: '/product/integrations' },
      { label: 'Pricing', href: '/product/pricing' },
      { label: 'Data and Insights', href: '/product/data-insights' },
      { label: 'Security', href: '/product/security' },
      { label: 'Languages', href: '/product/languages' },
      { label: 'Partners', href: '/product/partners' }
    ],
    solutions: {
      submenu1: {
        title: 'Industry',
        items: [
          { label: 'Financial Services', href: '/solutions/industry/financial' },
          { label: 'Healthcare', href: '/solutions/industry/healthcare' },
          { label: 'Retail', href: '/solutions/industry/retail' },
          { label: 'Technology', href: '/solutions/industry/technology' }
        ]
      },
      submenu2: {
        title: 'Use Case',
        items: [
          { label: 'Customer Support', href: '/solutions/use-case/support' },
          { label: 'Sales Automation', href: '/solutions/use-case/sales' },
          { label: 'Lead Generation', href: '/solutions/use-case/leads' },
          { label: 'Market Research', href: '/solutions/use-case/research' }
        ]
      }
    },
    customers: [
      { label: 'Case Studies', href: '/customers/case-studies' },
      { label: 'Testimonials', href: '/customers/testimonials' },
      { label: 'Success Stories', href: '/customers/success-stories' }
    ],
    company: [
      { label: 'About', href: '/about' },
      { label: 'Team', href: '/about#team' },
      { label: 'Careers', href: '/about#' },
      { label: 'Contact', href: '/contact' }
    ]
  };

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm py-3' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="flex items-center px-6">
            <Image src="/logo.jpeg" alt="Logo" width={40} height={40} />
            <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Okestra AI
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 px-9">
            {/* Product Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('product')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="text-gray-700 hover:text-indigo-600 transition flex items-center">
                Product
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'product' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50"
                >
                  {dropdownItems.product.map((item, index) => (
                    <Link 
                      key={index} 
                      href={item.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition"
                    >
                      {item.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </div>

            {/* Solutions Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('solutions')}
              onMouseLeave={() => {
                setActiveDropdown(null);
                setActiveSubmenu(null);
              }}
            >
              <button className="text-gray-700 hover:text-indigo-600 transition flex items-center">
                Solutions
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'solutions' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 mt-2 w-[400px] bg-white rounded-lg shadow-lg py-4 z-50"
                >
                  <div className="grid grid-cols-2 gap-6 px-6">
                    {/* By Industry */}
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">{dropdownItems.solutions.submenu1.title}</h3>
                      <div className="space-y-2">
                        {dropdownItems.solutions.submenu1.items.map((item, index) => (
                          <Link 
                            key={index} 
                            href={item.href}
                            className="block text-gray-700 hover:text-indigo-600 transition"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* By Use Case */}
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">{dropdownItems.solutions.submenu2.title}</h3>
                      <div className="space-y-2">
                        {dropdownItems.solutions.submenu2.items.map((item, index) => (
                          <Link 
                            key={index} 
                            href={item.href}
                            className="block text-gray-700 hover:text-indigo-600 transition"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Customers Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('customers')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="text-gray-700 hover:text-indigo-600 transition flex items-center">
                Customers
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'customers' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50"
                >
                  {dropdownItems.customers.map((item, index) => (
                    <Link 
                      key={index} 
                      href={item.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition"
                    >
                      {item.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </div>

            {/* Company Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('company')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="text-gray-700 hover:text-indigo-600 transition flex items-center">
                Company
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'company' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50"
                >
                  {dropdownItems.company.map((item, index) => (
                    <Link 
                      key={index} 
                      href={item.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition"
                    >
                      {item.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="px-5 py-2.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
            >
              Request Demo
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-indigo-600 transition"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
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
              {/* Product Dropdown */}
              <div className="relative">
                <button 
                  onClick={() => setActiveDropdown(activeDropdown === 'product' ? null : 'product')}
                  className="text-gray-700 py-2 hover:text-indigo-600 transition flex items-center justify-between w-full"
                >
                  Product
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeDropdown === 'product' && (
                  <div className="pl-4 py-2 space-y-2">
                    {dropdownItems.product.map((item, index) => (
                      <Link 
                        key={index} 
                        href={item.href}
                        className="block py-1 text-gray-600 hover:text-indigo-600 transition"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Solutions Dropdown Mobile */}
              <div className="relative">
                <button 
                  onClick={() => setActiveDropdown(activeDropdown === 'solutions' ? null : 'solutions')}
                  className="text-gray-700 py-2 hover:text-indigo-600 transition flex items-center justify-between w-full"
                >
                  Solutions
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeDropdown === 'solutions' && (
                  <div className="pl-4 py-2 space-y-2">
                    {/* Main Solutions */}

                    {/* By Industry Dropdown */}
                    <div className="relative">
                      <button 
                        onClick={() => setActiveSubmenu(activeSubmenu === 'industry' ? null : 'industry')}
                        className="text-gray-700 py-2 hover:text-indigo-600 transition flex items-center justify-between w-full"
                      >
                        {dropdownItems.solutions.submenu1.title}
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {activeSubmenu === 'industry' && (
                        <div className="pl-4 py-2 space-y-2">
                          {dropdownItems.solutions.submenu1.items.map((item, index) => (
                            <Link 
                              key={index} 
                              href={item.href}
                              className="block py-1 text-gray-600 hover:text-indigo-600 transition"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* By Use Case Dropdown */}
                    <div className="relative">
                      <button 
                        onClick={() => setActiveSubmenu(activeSubmenu === 'use-case' ? null : 'use-case')}
                        className="text-gray-700 py-2 hover:text-indigo-600 transition flex items-center justify-between w-full"
                      >
                        {dropdownItems.solutions.submenu2.title}
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {activeSubmenu === 'use-case' && (
                        <div className="pl-4 py-2 space-y-2">
                          {dropdownItems.solutions.submenu2.items.map((item, index) => (
                            <Link 
                              key={index} 
                              href={item.href}
                              className="block py-1 text-gray-600 hover:text-indigo-600 transition"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Customers Dropdown */}
              <div className="relative">
                <button 
                  onClick={() => setActiveDropdown(activeDropdown === 'customers' ? null : 'customers')}
                  className="text-gray-700 py-2 hover:text-indigo-600 transition flex items-center justify-between w-full"
                >
                  Customers
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeDropdown === 'customers' && (
                  <div className="pl-4 py-2 space-y-2">
                    {dropdownItems.customers.map((item, index) => (
                      <Link 
                        key={index} 
                        href={item.href}
                        className="block py-1 text-gray-600 hover:text-indigo-600 transition"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Company Dropdown */}
              <div className="relative">
                <button 
                  onClick={() => setActiveDropdown(activeDropdown === 'company' ? null : 'company')}
                  className="text-gray-700 py-2 hover:text-indigo-600 transition flex items-center justify-between w-full"
                >
                  Company
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeDropdown === 'company' && (
                  <div className="pl-4 py-2 space-y-2">
                    {dropdownItems.company.map((item, index) => (
                      <Link 
                        key={index} 
                        href={item.href}
                        className="block py-1 text-gray-600 hover:text-indigo-600 transition"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <button
                onClick={() => setIsModalOpen(true)}
                className="px-4 py-2.5 bg-indigo-600 text-white rounded-lg text-center hover:bg-indigo-700 transition"
              >
                Request Demo
              </button>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ModalContent onClose={() => setIsModalOpen(false)} />
      </Modal>
    </>
  );
};

export default Navbar;