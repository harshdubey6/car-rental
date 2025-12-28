import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <motion.footer 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className='px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 mt-16 sm:mt-20 md:mt-24 bg-gradient-to-b from-white to-gray-50 border-t border-gray-200'
    >

        {/* Main Footer Content */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className='flex flex-col md:flex-row justify-between items-start gap-8 sm:gap-10 md:gap-12 py-10 sm:py-12 md:py-14 lg:py-16'
        >

            {/* Company Info */}
            <motion.div className='max-w-sm flex-1 w-full'>
                <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className='flex items-center gap-2 mb-3 sm:mb-4'
                >
                    <img src={assets.logo} alt="logo" className='h-7 sm:h-8 md:h-9' />
                    <span className='font-bold text-base sm:text-lg bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent'>CarRent</span>
                </motion.div>

                <p className='text-gray-700 leading-relaxed mb-4 sm:mb-5 md:mb-6 text-sm sm:text-base'>
                    Your trusted partner for premium car rentals. Experience luxury, comfort, and reliability with our curated fleet of vehicles.
                </p>

                {/* Social Links */}
                <div className='flex items-center gap-3 sm:gap-4 flex-wrap'>
                    {[
                        { icon: assets.facebook_logo, label: 'Facebook', hover: 'hover:text-blue-600' },
                        { icon: assets.instagram_logo, label: 'Instagram', hover: 'hover:text-pink-600' },
                        { icon: assets.twitter_logo, label: 'Twitter', hover: 'hover:text-sky-500' },
                        { icon: assets.gmail_logo, label: 'Email', hover: 'hover:text-red-600' }
                    ].map((social, idx) => (
                        <motion.a 
                            key={idx}
                            href="#" 
                            className={`p-2 sm:p-2.5 rounded-lg bg-gray-100 hover:bg-gray-200 transition-all ${social.hover}`}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <img src={social.icon} className='w-4 h-4 sm:w-5 sm:h-5' alt={social.label} title={social.label}/>
                        </motion.a>
                    ))}
                </div>
            </motion.div>

            {/* Links Grid */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className='grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 flex-1 w-full'
            >

                {/* Quick Links */}
                <div>
                    <h3 className='text-xs sm:text-sm font-bold text-gray-900 uppercase tracking-wider mb-3 sm:mb-4'>Quick Links</h3>
                    <ul className='space-y-2 sm:space-y-3'>
                        <li><Link to="/" className='text-sm sm:text-base text-gray-700 hover:text-blue-600 transition-colors'>Home</Link></li>
                        <li><Link to="/cars" className='text-sm sm:text-base text-gray-700 hover:text-blue-600 transition-colors'>Browse Cars</Link></li>
                        <li><a href="#" className='text-sm sm:text-base text-gray-700 hover:text-blue-600 transition-colors'>List Your Car</a></li>
                        <li><a href="#" className='text-sm sm:text-base text-gray-700 hover:text-blue-600 transition-colors'>About Us</a></li>
                    </ul>
                </div>

                {/* Resources */}
                <div>
                    <h3 className='text-xs sm:text-sm font-bold text-gray-900 uppercase tracking-wider mb-3 sm:mb-4'>Resources</h3>
                    <ul className='space-y-2 sm:space-y-3'>
                        <li><a href="#" className='text-sm sm:text-base text-gray-700 hover:text-blue-600 transition-colors'>Help Center</a></li>
                        <li><a href="#" className='text-sm sm:text-base text-gray-700 hover:text-blue-600 transition-colors'>FAQs</a></li>
                        <li><a href="#" className='text-sm sm:text-base text-gray-700 hover:text-blue-600 transition-colors'>Insurance</a></li>
                        <li><a href="#" className='text-sm sm:text-base text-gray-700 hover:text-blue-600 transition-colors'>Blog</a></li>
                    </ul>
                </div>

                {/* Contact */}
                <div className='col-span-2 md:col-span-1'>
                    <h3 className='text-xs sm:text-sm font-bold text-gray-900 uppercase tracking-wider mb-3 sm:mb-4'>Contact</h3>
                    <ul className='space-y-2 sm:space-y-3 text-gray-700'>
                        <li className='flex items-start gap-2'>
                            <svg className='w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0 mt-0.5' fill='currentColor' viewBox='0 0 20 20'>
                                <path fillRule='evenodd' d='M5.05 4.05a7 7 0 119.9 9.9L9.95 15.95a.5.5 0 01-.707 0L5.05 11.05a7 7 0 010-9.9zM9 11a2 2 0 100-4 2 2 0 000 4z' clipRule='evenodd'/>
                            </svg>
                            <span className='text-sm sm:text-base break-words'>San Francisco, CA 94107</span>
                        </li>
                        <li className='flex items-center gap-2'>
                            <svg className='w-4 h-4 sm:w-5 sm:h-5 text-blue-600' fill='currentColor' viewBox='0 0 20 20'>
                                <path d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773c.151.301.394.534.69.607.56.149 1.18.098 1.466-.13l3.71-2.332a1 1 0 011.239.119l4.414 4.414a1 1 0 01.12 1.239l-2.331 3.71c-.229.286-.28.906-.13 1.466.073.296.306.539.607.69l.773-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986v2.153a1 1 0 01-1 1h-2C7.82 19 2 13.18 2 6V3z'/>
                            </svg>
                            <span className='text-sm sm:text-base'>+1 (234) 567-890</span>
                        </li>
                        <li className='flex items-center gap-2'>
                            <svg className='w-4 h-4 sm:w-5 sm:h-5 text-blue-600' fill='currentColor' viewBox='0 0 20 20'>
                                <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z'/>
                                <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z'/>
                            </svg>
                            <span className='text-sm sm:text-base break-all'>info@carrent.com</span>
                        </li>
                    </ul>
                </div>

            </motion.div>

        </motion.div>

        {/* Bottom Section */}
        <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className='border-t border-gray-200 py-6 sm:py-8 flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4'
        >
            <p className='text-gray-600 text-xs sm:text-sm text-center md:text-left'>© {new Date().getFullYear()} CarRent. All rights reserved.</p>
            <ul className='flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm'>
                <li><a href="#" className='text-gray-600 hover:text-blue-600 transition-colors font-medium'>Privacy Policy</a></li>
                <li><span className='text-gray-300'>•</span></li>
                <li><a href="#" className='text-gray-600 hover:text-blue-600 transition-colors font-medium'>Terms of Service</a></li>
                <li><span className='text-gray-300'>•</span></li>
                <li><a href="#" className='text-gray-600 hover:text-blue-600 transition-colors font-medium'>Cookie Policy</a></li>
            </ul>
        </motion.div>

    </motion.footer>
  )
}

export default Footer
