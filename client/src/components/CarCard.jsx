import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { motion } from 'motion/react'

const CarCard = ({car}) => {

    const currency = import.meta.env.VITE_CURRENCY
    const navigate = useNavigate()

  return (
    <motion.div 
      onClick={()=> {navigate(`/car-details/${car._id}`); scrollTo(0,0)}} 
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className='group rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer bg-white'
    >
      
      <div className='relative h-48 sm:h-56 overflow-hidden bg-gray-200'> 
        <img 
          src={car.image} 
          alt="Car Image" 
          className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
        />

        {car.isAvaliable && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            className='absolute top-3 sm:top-4 left-3 sm:left-4 bg-green-500 text-white text-xs font-semibold px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full shadow-lg flex items-center gap-1'
          >
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
            </svg>
            Available
          </motion.div>
        )}

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className='absolute bottom-3 sm:bottom-4 right-3 sm:right-4 bg-gradient-to-r from-blue-600 to-blue-500 backdrop-blur-md text-white px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl shadow-lg'
        >
            <span className='font-bold text-base sm:text-lg'>{currency}{car.pricePerDay}</span>
            <span className='text-xs text-blue-100 ml-1'>/ day</span>
        </motion.div>
      </div>

      <div className='p-4 sm:p-6'>
        {/* Car Title */}
        <div className='mb-3 sm:mb-4'>
            <h3 className='text-lg sm:text-xl font-bold text-gray-900 line-clamp-1'>{car.brand} {car.model}</h3>
            <p className='text-xs sm:text-sm text-gray-600 mt-1'>{car.category} • {car.year}</p>
        </div>

        {/* Features Grid */}
        <div className='mt-4 sm:mt-5 grid grid-cols-2 gap-2.5 sm:gap-3 text-gray-700 border-t border-gray-200 pt-3 sm:pt-4'>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className='flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm'
            >
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <img src={assets.users_icon} alt="users" className='w-3.5 h-3.5 sm:w-4 sm:h-4'/>
                </div>
                <span className='truncate'>{car.seating_capacity} Seats</span>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className='flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm'
            >
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <img src={assets.fuel_icon} alt="fuel" className='w-3.5 h-3.5 sm:w-4 sm:h-4'/>
                </div>
                <span className='truncate'>{car.fuel_type}</span>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className='flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm'
            >
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <img src={assets.car_icon} alt="transmission" className='w-3.5 h-3.5 sm:w-4 sm:h-4'/>
                </div>
                <span className='truncate'>{car.transmission}</span>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className='flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm'
            >
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <img src={assets.location_icon} alt="location" className='w-3.5 h-3.5 sm:w-4 sm:h-4'/>
                </div>
                <span className='truncate'>{car.location}</span>
            </motion.div>
        </div>

        {/* Book Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className='w-full mt-4 sm:mt-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold rounded-lg transition-all text-sm sm:text-base'
        >
          View Details
        </motion.button>
      </div>

    </motion.div>
  )
}

export default CarCard
