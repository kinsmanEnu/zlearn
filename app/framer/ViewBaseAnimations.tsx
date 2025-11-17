"use client"
import React, { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function ViewBaseAnimations() {
    const ref = useRef(null)
    const isInView = useInView(ref)

    useEffect(() => {
         console.log('use in view', isInView);
    }, [isInView])
    return (
        <>
            <div className="h-[150vh]">
                <motion.div
                    className='h-screen bg-black'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >


                </motion.div>
                <motion.div
                    ref={ref}
                    className={`h-screen ${isInView ? 'bg-blue-500' : 'bg-red-400'} transition- duration-100`}
                >


                </motion.div>
            </div>
        </>
    )
} 
