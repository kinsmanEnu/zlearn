"use client"
import React from 'react'
import {motion, useAnimationControls} from 'framer-motion'

export default function AnimationControls() {
    const flipControls =  useAnimationControls();
    const handleClick = () => {
           //Do something
           flipControls.start('flip')
    }
    return (
        <div className="grid place-content-center h-screen gap-5">
            <button
            onClick={handleClick}
             className="bg-blue-500 text-white rounded-lg p-4">
                Flip it!
            </button>
            <motion.div className="bg-black h-36 w-36"
            variants={{
                initial:{
                    rotate: "0deg",
                },
                flip:{
                    rotate: "360deg",
                }
            }}
            whileHover='flip'
            initial="initial"
            animate={flipControls}
            >
           
            </motion.div>
        </div>
    )
}
  