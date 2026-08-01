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
    className='h-screen flex flex-col items-center justify-center gap-14 bg-light text-center'>

        <div className='flex flex-col items-center gap-3'>
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className='inline-flex items-center gap-1.5 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-semibold uppercase tracking-wider'
            >
                 Premium Car Rental Service
            </motion.div>
            <motion.h1 
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className='text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight'
            >
                <span className='bg-gradient-to-r from-gray-900 via-primary to-blue-600 bg-clip-text text-transparent'>
                    Luxury Cars
                </span>{' '}
                <span className='text-gray-800 font-light'>on Rent</span>
            </motion.h1>
        </div>
      
      <motion.form
      initial={{ scale: 0.95, opacity: 0, y: 50 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}

       onSubmit={handleSearch} 
       className='flex flex-col md:flex-row items-stretch justify-between p-2 md:p-3 rounded-2xl md:rounded-full w-full max-w-80 md:max-w-240 bg-white/80 backdrop-blur-lg border border-white/50 shadow-[0_20px_50px_rgba(0,0,0,0.06)]'
      >

        <div className='flex flex-col md:flex-row flex-1 items-stretch text-left'>
            {/* Location Sector */}
            <div className='flex flex-col justify-center px-6 py-3 rounded-full hover:bg-gray-100/40 transition-all flex-1 cursor-pointer group'>
                <label className='text-xs font-bold text-gray-700 uppercase tracking-wider block mb-1'>Location</label>
                <select 
                  required 
                  value={pickupLocation} 
                  onChange={(e)=>setPickupLocation(e.target.value)} 
                  className='w-full border-none bg-transparent outline-none text-gray-500 text-sm font-light appearance-none cursor-pointer focus:text-primary transition-colors'
                >
                    <option value="">Select location</option>
                    {cityList.map((city)=> <option key={city} value={city}>{city}</option>)}
                </select>
            </div>

            {/* Divider */}
            <div className='hidden md:block w-[1px] bg-borderColor my-3'></div>

            {/* Pick-up Date Sector */}
            <div className='flex flex-col justify-center px-6 py-3 rounded-full hover:bg-gray-100/40 transition-all flex-1 cursor-pointer group'>
                <label htmlFor='pickup-date' className='text-xs font-bold text-gray-700 uppercase tracking-wider block mb-1'>Pick-up Date</label>
                <input 
                  value={pickupDate} 
                  onChange={e=>setPickupDate(e.target.value)} 
                  type="date" 
                  id="pickup-date" 
                  min={new Date().toISOString().split('T')[0]} 
                  className='w-full border-none bg-transparent outline-none text-gray-500 text-sm font-light cursor-pointer focus:text-primary transition-colors' 
                  required
                />
            </div>

            {/* Divider */}
            <div className='hidden md:block w-[1px] bg-borderColor my-3'></div>

            {/* Return Date Sector */}
            <div className='flex flex-col justify-center px-6 py-3 rounded-full hover:bg-gray-100/40 transition-all flex-1 cursor-pointer group'>
                <label htmlFor='return-date' className='text-xs font-bold text-gray-700 uppercase tracking-wider block mb-1'>Return Date</label>
                <input 
                  value={returnDate} 
                  onChange={e=>setReturnDate(e.target.value)} 
                  type="date" 
                  id="return-date" 
                  className='w-full border-none bg-transparent outline-none text-gray-500 text-sm font-light cursor-pointer focus:text-primary transition-colors' 
                  required
                />
            </div>
        </div>

        {/* Search Action Button */}
        <div className='flex items-center justify-end p-2'>
            <motion.button 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className='flex items-center justify-center gap-2 px-9 py-4 w-full md:w-auto bg-primary hover:bg-primary-dull text-white rounded-full cursor-pointer transition-all shadow-md hover:shadow-lg font-medium'
            >
                <img src={assets.search_icon} alt="search" className='brightness-300 w-4 h-4'/>
                Search Cars
            </motion.button>
        </div>
      </motion.form>

      <motion.img 
        initial={{ y: 100, opacity: 0 }}
       animate={{ y: 0, opacity: 1 }}
       transition={{ duration: 0.8, delay: 0.6 }}
      src={assets.main_car} alt="car" className='max-h-74'/>
    </motion.div>
  )
}

export default Hero
