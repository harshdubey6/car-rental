import React from 'react'
import Title from './Title'
import { assets } from '../assets/assets';
import { motion } from 'motion/react';

const Testimonial = () => {

    const testimonials = [
        { 
            name: "Emma Rodriguez", 
            location: "Barcelona, Spain", 
            image: assets.testimonial_image_1, 
            testimonial: "Exceptional service! The vehicle was immaculate and the entire rental process was seamless.",
            rating: 5
        },
        { 
            name: "John Smith", 
            location: "New York, USA", 
            image: assets.testimonial_image_2, 
            testimonial: "Outstanding experience from start to finish. Delivery to my hotel, perfect condition car, fantastic support!",
            rating: 5
        },
        { 
            name: "Ava Johnson", 
            location: "Sydney, Australia", 
            image: assets.testimonial_image_1, 
            testimonial: "Best luxury car rental I've experienced. Premium fleet, competitive pricing, and professional service.",
            rating: 5
        }
    ];

  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6 md:px-10 lg:px-16 bg-gradient-to-b from-white to-blue-50">
            
        <Title 
          title="Customer Reviews" 
          subTitle="Join thousands of satisfied customers who trust us for their luxury car rentals"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-14 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
                <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -8 }}
                viewport={{ once: true }}
                
                key={index} 
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-200"
                >

                    <div className="flex items-center gap-4 mb-4">
                        <img 
                          className="w-14 h-14 rounded-full border-2 border-blue-200 object-cover" 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                        />
                        <div>
                            <p className="font-bold text-gray-900">{testimonial.name}</p>
                            <p className="text-sm text-gray-600 flex items-center gap-1">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L9.95 15.95a.5.5 0 01-.707 0L5.05 11.05a7 7 0 010-9.9zM9 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                              </svg>
                              {testimonial.location}
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-1 mb-4">
                        {Array(testimonial.rating).fill(0).map((_, i) => (
                            <motion.svg
                              key={i}
                              initial={{ opacity: 0, scale: 0 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ delay: i * 0.1 }}
                              className="w-5 h-5 text-yellow-400" 
                              fill="currentColor" 
                              viewBox="0 0 20 20"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                            </motion.svg>
                        ))}
                    </div>

                    <p className="text-gray-700 leading-relaxed font-light italic">
                        &quot;{testimonial.testimonial}&quot;
                    </p>
                </motion.div>
            ))}
        </div>
    </section>
  )
}

export default Testimonial
