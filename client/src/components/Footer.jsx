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
                        {
                            label: 'GitHub',
                            hover: 'hover:text-gray-900',
                            href: 'https://github.com/harshdubey6',
                            icon: (
                                <svg viewBox='0 0 24 24' fill='currentColor' className='w-4 h-4 sm:w-5 sm:h-5' aria-hidden='true'>
                                    <path d='M12 2C6.48 2 2 6.58 2 12.26c0 4.55 2.87 8.4 6.84 9.77.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1.01.07 1.54 1.06 1.54 1.06.9 1.58 2.36 1.12 2.93.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.05 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05A9.2 9.2 0 0 1 12 6.8c.85 0 1.71.12 2.51.35 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.92-2.34 4.79-4.57 5.04.36.33.68.98.68 1.98 0 1.43-.01 2.58-.01 2.93 0 .26.18.58.69.48A10.28 10.28 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z' />
                                </svg>
                            )
                        },
                        {
                            label: 'Email',
                            hover: 'hover:text-red-600',
                            href: 'mailto:dubeyharsh320@gmail.com',
                            icon: assets.gmail_logo
                        }
                    ].map((social, idx) => (
                        <motion.a 
                            key={idx}
                            href={social.href} 
                            target={social.label === 'GitHub' ? '_blank' : undefined}
                            rel={social.label === 'GitHub' ? 'noreferrer' : undefined}
                            className={`p-2 sm:p-2.5 rounded-lg bg-gray-100 hover:bg-gray-200 transition-all ${social.hover}`}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {typeof social.icon === 'string' ? (
                                <img src={social.icon} className='w-4 h-4 sm:w-5 sm:h-5' alt={social.label} title={social.label}/>
                            ) : (
                                social.icon
                            )}
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

                {/* Contact */}
                <div className='col-span-2 md:col-span-1'>
                    <h3 className='text-xs sm:text-sm font-bold text-gray-900 uppercase tracking-wider mb-3 sm:mb-4'>Contact</h3>
                    <ul className='space-y-2 sm:space-y-3 text-gray-700'>
                        <li className='flex items-center gap-2'>
                            <svg className='w-4 h-4 sm:w-5 sm:h-5 text-blue-600' fill='currentColor' viewBox='0 0 20 20'>
                                <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z'/>
                                <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z'/>
                            </svg>
                            <a href='mailto:dubeyharsh30@gmail.com' className='text-sm sm:text-base whitespace-nowrap hover:text-blue-600 transition-colors'>dubeyharsh30@gmail.com</a>
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
        </motion.div>

    </motion.footer>
  )
}

export default Footer
