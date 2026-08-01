import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'motion/react';

const Footer = () => {
  return (
    <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
    
    className='px-6 md:px-16 lg:px-24 xl:px-32 mt-60 text-sm text-gray-500'>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 pb-12 border-borderColor border-b w-full'
            >
                {/* Column 1: Brand Info */}
                <div className='flex flex-col gap-4'>
                    <img src={assets.logo} alt="logo" className='h-10 md:h-12 w-auto object-contain self-start' />
                    <p className='mt-2 leading-relaxed text-gray-500 font-light'>
                        Premium car rental service with a wide selection of luxury and everyday vehicles for all your driving needs.
                    </p>
                    <div className='flex items-center gap-3.5 mt-2'>
                        {[
                          { href: '#', icon: assets.facebook_logo },
                          { href: '#', icon: assets.instagram_logo },
                          { href: '#', icon: assets.twitter_logo },
                          { href: '#', icon: assets.gmail_logo },
                        ].map((social, index) => (
                          <motion.a 
                            key={index} 
                            href={social.href}
                            whileHover={{ scale: 1.15, rotate: 8 }}
                            whileTap={{ scale: 0.9 }}
                            className='w-9 h-9 flex items-center justify-center rounded-full bg-gray-100/80 hover:bg-primary/10 transition-colors'
                          >
                            <img src={social.icon} className='w-4.5 h-4.5' alt="" />
                          </motion.a>
                        ))}
                    </div>
                </div>

                {/* Column 2: Quick Links */}
                <div>
                    <h2 className='text-xs font-bold text-gray-800 uppercase tracking-widest mb-4'>Quick Links</h2>
                    <ul className='flex flex-col gap-3 font-light text-gray-500'>
                        {[
                          { name: 'Home', path: '#' },
                          { name: 'Browse Cars', path: '#' },
                          { name: 'List Your Car', path: '#' },
                          { name: 'About Us', path: '#' },
                        ].map((link, idx) => (
                          <li key={idx}>
                            <a href={link.path} className='hover:text-primary transition-all inline-block hover:translate-x-1 duration-300'>
                              {link.name}
                            </a>
                          </li>
                        ))}
                    </ul>
                </div>

                {/* Column 3: Contact */}
                <div>
                    <h2 className='text-xs font-bold text-gray-800 uppercase tracking-widest mb-4'>Contact Us</h2>
                    <ul className='flex flex-col gap-3 font-light text-gray-500'>
                        <li>1234 Luxury Drive</li>
                        <li>San Francisco, CA 94107</li>
                        <li>+1 234 567890</li>
                        <li>support@carlux.com</li>
                    </ul>
                </div>

                {/* Column 4: Newsletter */}
                <div className='flex flex-col gap-4'>
                    <h2 className='text-xs font-bold text-gray-800 uppercase tracking-widest'>Newsletter</h2>
                    <p className='text-gray-500 font-light leading-relaxed text-sm'>
                        Subscribe to get updates on new fleet arrivals and luxury seasonal discounts.
                    </p>
                    <div className='flex items-stretch gap-1.5 border border-borderColor rounded-xl p-1 bg-white/40 backdrop-blur-sm focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition-all'>
                      <input 
                        type="email" 
                        placeholder="Your email" 
                        className="w-full bg-transparent outline-none px-2.5 py-1.5 text-xs font-light text-gray-700" 
                      />
                      <motion.button 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className='bg-primary hover:bg-primary-dull text-white px-4 rounded-lg text-xs font-semibold cursor-pointer shadow-sm'
                      >
                        Join
                      </motion.button>
                    </div>
                </div>

            </motion.div>
            
            <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                
            className='flex flex-col md:flex-row gap-2 items-center justify-between py-5'>
                <p>© {new Date().getFullYear()} Brand. All rights reserved.</p>
                <ul className='flex items-center gap-4'>
                    <li><a href="#">Privacy</a></li>
                    <li>|</li>
                    <li><a href="#">Terms</a></li>
                    <li>|</li>
                    <li><a href="#">Cookies</a></li>
                </ul>
            </motion.div>
        </motion.div>
  )
}

export default Footer
