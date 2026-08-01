import React, { useState } from 'react'
import Title from './Title'
import { assets } from '../assets/assets'
import CarCard from './CarCard'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'
import { motion, AnimatePresence } from 'motion/react'

const FeaturedSection = () => {

    const navigate = useNavigate()
    const {cars} = useAppContext()
    const [activeTab, setActiveTab] = useState('All')

    const uniqueCategories = ['All', ...new Set(cars.map(car => car.category))]
    const filteredCars = activeTab === 'All' 
        ? cars 
        : cars.filter(car => car.category.toLowerCase() === activeTab.toLowerCase())

  return (
    <motion.div 
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
    className='flex flex-col items-center py-24 px-6 md:px-16 lg:px-24 xl:px-32 w-full'>

        <div className='flex flex-col items-center gap-3 text-center mb-6'>
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className='inline-flex items-center gap-1.5 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-semibold uppercase tracking-wider'
            >
                Featured Fleet
            </motion.div>
            <h1 className='text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight'>
                <span className='bg-gradient-to-r from-gray-900 via-primary to-blue-600 bg-clip-text text-transparent'>
                    Featured Vehicles
                </span>
            </h1>
            <p className='text-gray-500 text-sm font-light max-w-lg mt-0.5'>
                Explore our selection of premium vehicles available for your next adventure.
            </p>
        </div>

        {/* Category Tab Bar (No Emoji) */}
        <div className='flex flex-wrap items-center justify-center gap-2.5 mt-8 mb-4 border-b border-borderColor pb-5 w-full max-w-2xl'>
          {uniqueCategories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setActiveTab(category)}
              className={`px-4 py-2 text-sm font-medium rounded-full cursor-pointer transition-all ${
                activeTab === category
                  ? 'bg-primary text-white shadow-md'
                  : 'text-gray-500 hover:text-gray-800 bg-gray-100/75 hover:bg-gray-200/80'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        <motion.div 
        layout
        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 w-full max-w-7xl'>
          <AnimatePresence mode="popLayout">
            {
                filteredCars.slice(0,6).map((car)=> (
                    <motion.div key={car._id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    >
                        <CarCard car={car}/>
                    </motion.div>
                ))
            }
          </AnimatePresence>
        </motion.div>

        <motion.button 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.4 }}
        onClick={()=> {
            navigate('/cars'); scrollTo(0,0)
        }}
         className='flex items-center justify-center gap-2 px-6 py-2 border border-borderColor hover:bg-gray-50 rounded-md mt-18 cursor-pointer'>
            Explore all cars <img src={assets.arrow_icon} alt="arrow" />
        </motion.button>
      
    </motion.div>
  )
}

export default FeaturedSection
