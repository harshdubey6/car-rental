import React, { useState } from 'react'
import { assets, cityList } from '../assets/assets'
import { useAppContext } from '../context/AppContext'
import {motion} from 'motion/react'

const Hero = () => {

    const [pickupLocation, setPickupLocation] = useState('')

    const {pickupDate, setPickupDate, returnDate, setReturnDate, navigate} = useAppContext()

    const handleSearch = (e)=>{
        e.preventDefault()
        navigate('/cars?pickupLocation=' + pickupLocation + '&pickupDate=' + pickupDate + '&returnDate=' + returnDate)
    }

  return (
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    className='relative min-h-[85vh] sm:min-h-[90vh] flex flex-col items-center justify-center gap-8 sm:gap-10 md:gap-12 bg-gradient-to-b from-blue-50 via-white to-gray-50 text-center overflow-hidden pt-20 sm:pt-16 pb-12 sm:pb-14 px-4 sm:px-6 md:px-10'>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10"></div>
        <div className="absolute -bottom-10 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10"></div>

        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center px-2 sm:px-4"
        >
            <h1 className='text-3xl xs:text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-gray-900 bg-clip-text text-transparent leading-tight'>
                Luxury Cars on Rent
            </h1>
            <p className='text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl mt-3 sm:mt-4'>Find and book premium vehicles for your next adventure</p>
        </motion.div>
      
        <motion.form
            initial={{ scale: 0.95, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSearch} 
            className='flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3 sm:gap-4 lg:gap-6 p-4 sm:p-5 lg:p-8 rounded-2xl lg:rounded-full w-full max-w-3xl md:max-w-5xl lg:max-w-6xl mx-auto bg-white shadow-2xl border border-gray-200'
        >

            <div className='flex flex-col lg:flex-row items-stretch lg:items-center gap-3 sm:gap-4 lg:gap-6 flex-1 w-full'>
                {/* Location Select */}
                <motion.div 
                    className='flex flex-col gap-1.5 sm:gap-2 flex-1'
                    whileHover={{ scale: 1.02 }}
                >
                    <label className='text-xs sm:text-sm font-semibold text-gray-700'>Pickup Location</label>
                    <select 
                        required 
                        value={pickupLocation} 
                        onChange={(e)=>setPickupLocation(e.target.value)}
                        className='border border-gray-300 rounded-lg px-3 py-2.5 sm:px-4 sm:py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all text-sm sm:text-base'
                    >
                        <option value="">Select location</option>
                        {cityList.map((city)=> <option key={city} value={city}>{city}</option>)}
                    </select>
                </motion.div>

                {/* Pickup Date */}
                <motion.div 
                    className='flex flex-col gap-1.5 sm:gap-2 flex-1'
                    whileHover={{ scale: 1.02 }}
                >
                    <label htmlFor='pickup-date' className='text-xs sm:text-sm font-semibold text-gray-700'>Pick-up Date</label>
                    <input 
                        value={pickupDate} 
                        onChange={e=>setPickupDate(e.target.value)} 
                        type="date" 
                        id="pickup-date" 
                        min={new Date().toISOString().split('T')[0]} 
                        className='border border-gray-300 rounded-lg px-3 py-2.5 sm:px-4 sm:py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all text-sm sm:text-base'
                        required
                    />
                </motion.div>

                {/* Return Date */}
                <motion.div 
                    className='flex flex-col gap-1.5 sm:gap-2 flex-1'
                    whileHover={{ scale: 1.02 }}
                >
                    <label htmlFor='return-date' className='text-xs sm:text-sm font-semibold text-gray-700'>Return Date</label>
                    <input 
                        value={returnDate} 
                        onChange={e=>setReturnDate(e.target.value)} 
                        type="date" 
                        id="return-date" 
                        className='border border-gray-300 rounded-lg px-3 py-2.5 sm:px-4 sm:py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all text-sm sm:text-base'
                        required
                    />
                </motion.div>
            </div>

            {/* Search Button */}
            <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='w-full lg:w-auto flex items-center justify-center gap-2 px-6 sm:px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-lg lg:rounded-full cursor-pointer font-semibold transition-all shadow-lg hover:shadow-xl whitespace-nowrap text-sm sm:text-base'
            >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Search
            </motion.button>
        </motion.form>

        {/* Featured Car Image */}
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='relative max-w-xl lg:max-w-2xl w-full px-4'
        >
            <img 
                src={assets.main_car} 
                alt="Featured Car" 
                className='w-full h-auto max-h-64 sm:max-h-80 lg:max-h-96 object-contain filter drop-shadow-2xl'
            />
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className='absolute bottom-8 left-1/2 transform -translate-x-1/2'
        >
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
        </motion.div>
    </motion.div>
  )
}

export default Hero
