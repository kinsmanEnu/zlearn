"use client"
import React, { useState } from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'

// About Page Component
function AboutPage() {
    return (
        <div className='container max-w-7xl mx-auto px-6 md:px-4 py-2 md:py-20'>
            <div>
                <h1 className='capitalize text-4xl md:text-5xl xl:text-7xl font-extrabold text-start md:text-center mb-5 md:mb-16'>
                    About Us - Shaping the Future of Learning
                </h1>
            </div>

            <div className='relative mt-12'>
                <div className='flex flex-col md:flex-row items-center justify-center gap-8 max-w-6xl mx-auto'>
                    {/* Description - Left Side */}
                    <div className='flex-1 space-y-6 flex flex-col order-2 md:order-1 w-full'>
                        <div>
                            <h2 className='text-2xl md:text-3xl xl:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight'>
                                Our Mission
                            </h2>
                            <p className='text-base md:text-lg text-gray-700'>
                                We are dedicated to empowering learners worldwide with accessible, quality education that transforms lives and opens doors to new opportunities.
                            </p>
                        </div>

                        <div>
                            <h2 className='text-2xl md:text-3xl xl:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight'>
                                Our Vision
                            </h2>
                            <p className='text-base md:text-lg text-gray-700'>
                                Creating a future where everyone has the opportunity to succeed through innovative learning experiences and cutting-edge educational technology.
                            </p>
                        </div>

                        <div>
                            <h2 className='text-2xl md:text-3xl xl:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight'>
                                Our Values
                            </h2>
                            <p className='text-base md:text-lg text-gray-700'>
                                Excellence, innovation, integrity, and unwavering commitment to student success drive everything we do.
                            </p>
                        </div>
                    </div>

                    {/* Image - Right Side */}
                    <div className='flex-1 order-1 md:order-2 w-full'>
                        <div className='relative w-full max-w-[500px] mx-auto'>
                            <img
                                src='https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                                alt='About Us'
                                className='w-full h-[400px] lg:h-[600px] object-cover shadow-xl rounded-lg'
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Additional Section */}
            <div className='mt-16 md:mt-24'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
                    <div className='bg-white p-6 md:p-8 rounded-lg shadow-lg'>
                        <div className='p-4 bg-gray-900 rounded-full w-16 h-16 flex items-center justify-center mb-4'>
                            <Icon icon="material-symbols-light:school-outline" className="size-8 text-white" />
                        </div>
                        <h3 className='text-xl md:text-2xl font-bold text-gray-900 mb-3'>
                            Expert Instructors
                        </h3>
                        <p className='text-gray-700'>
                            Learn from industry professionals with years of real-world experience.
                        </p>
                    </div>

                    <div className='bg-white p-6 md:p-8 rounded-lg shadow-lg'>
                        <div className='p-4 bg-gray-900 rounded-full w-16 h-16 flex items-center justify-center mb-4'>
                            <Icon icon="material-symbols-light:workspace-premium-outline" className="size-8 text-white" />
                        </div>
                        <h3 className='text-xl md:text-2xl font-bold text-gray-900 mb-3'>
                            Quality Content
                        </h3>
                        <p className='text-gray-700'>
                            Access comprehensive, up-to-date courses designed for maximum learning impact.
                        </p>
                    </div>

                    <div className='bg-white p-6 md:p-8 rounded-lg shadow-lg'>
                        <div className='p-4 bg-gray-900 rounded-full w-16 h-16 flex items-center justify-center mb-4'>
                            <Icon icon="material-symbols-light:groups-outline" className="size-8 text-white" />
                        </div>
                        <h3 className='text-xl md:text-2xl font-bold text-gray-900 mb-3'>
                            Global Community
                        </h3>
                        <p className='text-gray-700'>
                            Join thousands of learners from around the world on their educational journey.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage