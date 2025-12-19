import React from 'react'
import Title from './Title'
import { assets } from '../assets/assets'
import CarCard from './CarCard'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'
import { motion } from 'motion/react'

const FeaturedSection = () => {

    const navigate = useNavigate()
    const {cars} = useAppContext()

  return (
    <motion.section 
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
    viewport={{ once: true }}
    className='flex flex-col items-center py-20 sm:py-24 px-4 sm:px-6 md:px-10 lg:px-16 bg-gradient-to-b from-white via-blue-50 to-white w-full'
    >

        {/* Title */}
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        >
            <Title 
              title='Featured Vehicles' 
              subTitle='Explore our curated selection of premium luxury vehicles ready for your next adventure.'
            />
        </motion.div>

        {/* Cars Grid */}
        <motion.div 
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        viewport={{ once: true }}
        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-14 w-full max-w-6xl'
        >
        {
            cars.slice(0,6).map((car, index)=> (
                <motion.div 
                  key={car._id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                    <CarCard car={car}/>
                </motion.div>
            ))
        }
        </motion.div>

        {/* Explore Button */}
        <motion.button 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.4 }}
        viewport={{ once: true }}
        onClick={()=> {
            navigate('/cars'); scrollTo(0,0)
        }}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
         className='flex items-center justify-center gap-3 px-8 py-3.5 border-2 border-blue-600 hover:bg-blue-50 rounded-xl mt-16 cursor-pointer font-semibold text-blue-600 transition-all'
        >
            Explore all cars
            <motion.svg 
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </motion.svg>
        </motion.button>
      
    </motion.section>
  )
}

export default FeaturedSection
