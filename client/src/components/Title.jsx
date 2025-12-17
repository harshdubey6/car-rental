import React from 'react'
import { motion } from 'motion/react'

const Title = ({ title, subTitle, align }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`flex flex-col justify-center items-center text-center ${align === "left" && "md:items-start md:text-left"}`}
    >
      <motion.h1 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className='font-bold text-4xl md:text-5xl bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent'
      >
        {title}
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className='text-base md:text-lg text-gray-600 mt-4 max-w-3xl leading-relaxed'
      >
        {subTitle}
      </motion.p>
    </motion.div>
  )
}

export default Title
