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

       onSubmit={handleSearch} className='flex flex-col md:flex-row items-start md:items-center justify-between p-6 rounded-lg md:rounded-full w-full max-w-80 md:max-w-220 bg-white/70 backdrop-blur-md border border-white/50 shadow-[0_12px_40px_rgba(0,0,0,0.08)]'>

        <div className='flex flex-col md:flex-row items-start md:items-center gap-10 min-md:ml-8'>
            <div className='flex flex-col items-start gap-2'>
                <select required value={pickupLocation} onChange={(e)=>setPickupLocation(e.target.value)} className='px-2 py-1.5 border border-borderColor rounded-lg outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-transparent text-gray-700 text-sm'>
                    <option value="">Pickup Location</option>
                    {cityList.map((city)=> <option key={city} value={city}>{city}</option>)}
                </select>
                <p className='px-1 text-xs text-gray-500 font-light'>{pickupLocation ? pickupLocation : 'Please select location'}</p>
            </div>
            <div className='flex flex-col items-start gap-2'>
                <label htmlFor='pickup-date' className='text-xs font-semibold text-gray-600 uppercase tracking-wider'>Pick-up Date</label>
                <input value={pickupDate} onChange={e=>setPickupDate(e.target.value)} type="date" id="pickup-date" min={new Date().toISOString().split('T')[0]} className='text-sm text-gray-500 px-2 py-1.5 border border-borderColor rounded-lg outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-transparent' required/>
            </div>
            <div className='flex flex-col items-start gap-2'>
                <label htmlFor='return-date' className='text-xs font-semibold text-gray-600 uppercase tracking-wider'>Return Date</label>
                <input value={returnDate} onChange={e=>setReturnDate(e.target.value)} type="date" id="return-date" className='text-sm text-gray-500 px-2 py-1.5 border border-borderColor rounded-lg outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-transparent' required/>
            </div>
            
        </div>
            <motion.button 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className='flex items-center justify-center gap-1 px-9 py-3 max-sm:mt-4 bg-primary hover:bg-primary-dull text-white rounded-full cursor-pointer transition-all shadow-md hover:shadow-lg'>
                <img src={assets.search_icon} alt="search" className='brightness-300'/>
                Search
            </motion.button>
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
