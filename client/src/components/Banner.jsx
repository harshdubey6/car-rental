import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'motion/react'
import { useAppContext } from '../context/AppContext'

const Banner = () => {

  const {setShowLogin, user} = useAppContext()

  return (
    <motion.section 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className='flex flex-col md:flex-row md:items-center items-center justify-between px-6 md:px-10 lg:px-16 py-12 md:py-16 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-2xl relative'
    >

        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
        </div>

        {/* Content */}
        <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className='text-white z-10 flex-1'
        >
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className='text-4xl md:text-5xl font-bold leading-tight'
            >
                Own a Luxury Car?
            </motion.h2>

            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className='mt-4 text-lg text-blue-100 max-w-xl'
            >
                Turn your vehicle into a passive income stream. Monetize your luxury car with our secure, hassle-free rental platform.
            </motion.p>

            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className='mt-2 text-blue-100 flex items-center gap-2'
            >
                <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                Insurance & driver verification included
            </motion.p>
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className='mt-1 text-blue-100 flex items-center gap-2'
            >
                <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                Secure payments & dedicated support
            </motion.p>

            <motion.button 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => !user && setShowLogin(true)}
                className='mt-8 px-8 py-3.5 bg-white hover:bg-blue-50 text-blue-600 font-semibold rounded-xl transition-all shadow-lg hover:shadow-xl cursor-pointer'
            >
                List Your Car Now
            </motion.button>
        </motion.div>

        {/* Car Image */}
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='mt-10 md:mt-0 flex-1 relative'
        >
            <motion.img 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                src={assets.banner_car_image} 
                alt="Premium Car" 
                className='w-full h-auto max-h-96 object-contain filter drop-shadow-2xl'
            />
        </motion.div>
      
    </motion.section>
  )
}

export default Banner
