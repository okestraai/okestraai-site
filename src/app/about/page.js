'use client'

import React from 'react'
import Link from 'next/link'

export default function AboutPage() {
    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-8">
                        About Okestra AI
                    </h1>
                    <div className="prose max-w-3xl mx-auto">
                        <p className="text-lg text-gray-600 mb-6">
                            Okestra AI is a cutting-edge platform dedicated to advancing artificial intelligence solutions. 
                            We specialize in developing innovative AI technologies that help businesses transform and grow.
                        </p>
                        <p className="text-lg text-gray-600 mb-6">
                            Our mission is to make AI accessible and practical for organizations of all sizes,
                            helping them leverage the power of artificial intelligence to solve real-world problems.
                        </p>
                        <div className="mt-8">
                            <Link 
                                href="/contact"
                                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}