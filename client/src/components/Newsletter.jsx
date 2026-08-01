import React from 'react'
import { motion } from 'motion/react';

const Newsletter = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: 'easeOut' }}
    viewport={{ once: true, amount: 0.3 }}

    className="flex flex-col items-center justify-center text-center space-y-2 max-md:px-4 my-10 mb-40">

            <div className='flex flex-col items-center gap-3 text-center mb-6'>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className='inline-flex items-center gap-1.5 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-semibold uppercase tracking-wider'
                >
                    Stay Updated
                </motion.div>
                <h1 className='text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight'>
                    <span className='bg-gradient-to-r from-gray-900 via-primary to-blue-600 bg-clip-text text-transparent'>
                        Never Miss a Deal!
                    </span>
                </h1>
                <p className='text-gray-500 text-sm md:text-base font-light max-w-lg mt-0.5 pb-4'>
                    Subscribe to get the latest offers, new arrivals, and exclusive discounts
                </p>
            </div>
            <motion.form 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="flex items-center justify-between max-w-xl w-full border border-borderColor rounded-xl p-1 bg-white/40 backdrop-blur-sm focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition-all md:h-14 h-12"
            >
                <input
                    className="w-full bg-transparent outline-none px-4 py-2 text-sm font-light text-gray-700 placeholder-gray-400"
                    type="email"
                    placeholder="Enter your email address"
                    required
                />
                <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit" 
                    className="h-full bg-primary hover:bg-primary-dull text-white px-8 rounded-lg text-sm font-semibold cursor-pointer shadow-sm"
                >
                    Subscribe
                </motion.button>
            </motion.form>
        </motion.div>
  )
}

export default Newsletter
