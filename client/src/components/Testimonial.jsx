import React, { useEffect, useState } from 'react'
import Title from './Title'
import { assets } from '../assets/assets';
import { motion } from 'motion/react';
import { useAppContext } from '../context/AppContext';

const Testimonial = () => {
    const { axios } = useAppContext();

    const dummyTestimonials = [
        { name: "Emma Rodriguez", 
          location: "Barcelona, Spain", 
          image: assets.testimonial_image_1, 
          testimonial: "I've rented cars from various companies, but the experience with CarRental was exceptional." 
        },
        { name: "John Smith", 
          location: "New York, USA", 
          image: assets.testimonial_image_2, 
          testimonial: "CarRental made my trip so much easier. The car was delivered right to my door, and the customer service was fantastic!" 
        },
        { name: "Ava Johnson", 
          location: "Sydney, Australia", 
          image: assets.testimonial_image_1, 
          testimonial: "I highly recommend CarRental! Their fleet is amazing, and I always feel like I'm getting the best deal with excellent service." 
        }
    ];

    const [testimonials, setTestimonials] = useState(dummyTestimonials);

    const fetchTestimonials = async () => {
        try {
            const { data } = await axios.get('/api/user/testimonials');
            if (data.success && data.testimonials && data.testimonials.length > 0) {
                setTestimonials(data.testimonials);
            }
        } catch (error) {
            console.error(error.message);
        }
    };

    useEffect(() => {
        fetchTestimonials();
    }, []);

  return (
    <div className="py-28 px-6 md:px-16 lg:px-24 xl:px-44">
            
            <div className='flex flex-col items-center gap-3 text-center mb-12'>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className='inline-flex items-center gap-1.5 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-semibold uppercase tracking-wider'
                >
                    Reviews
                </motion.div>
                <h1 className='text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight'>
                    <span className='bg-gradient-to-r from-gray-900 via-primary to-blue-600 bg-clip-text text-transparent'>
                        What Our Customers Say
                    </span>
                </h1>
                <p className='text-gray-500 text-sm font-light max-w-xl mt-0.5 leading-relaxed'>
                    Discover why discerning travelers choose StayVenture for their luxury rentals around the world.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-18">
                {testimonials.map((testimonial, index) => (
                    <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.3 }}
                    
                    key={index} className="bg-white p-6 rounded-xl shadow-lg hover:-translate-y-1 transition-all duration-500">

                        <div className="flex items-center gap-3">
                            <img className="w-12 h-12 rounded-full object-cover" src={testimonial.image || assets.user_profile || "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=300"} alt={testimonial.name} />
                            <div>
                                <p className="text-xl">{testimonial.name}</p>
                                <p className="text-gray-500">{testimonial.location}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 mt-4">
                            {Array(5).fill(0).map((_, index) => (
                                <img key={index} src={assets.star_icon} alt="star-icon" />
                            ))}
                        </div>
                        <p className="text-gray-500 max-w-90 mt-4 font-light">"{testimonial.testimonial}"</p>
                    </motion.div>
                ))}
            </div>
        </div>
  )
}

export default Testimonial
