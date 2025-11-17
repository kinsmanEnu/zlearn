'use client'
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function BasicOption() {
    const [isVisible, setIsVisible] = useState(true);
  return (
    <div className="grid place-content-center gap-6 h-screen">
        <motion.button
        layout
        onClick={() =>  setIsVisible(!isVisible)}
         className="btn bg-blue-500 text-white p-4 text-center rounded-lg">Show/hide</motion.button>
       <AnimatePresence mode="popLayout">
        {!isVisible &&
        <motion.div
         initial={{
            rotate: '0deg',
            scale: 0,
            y: 0
         }}
         animate={{
            rotate: '180deg',
            scale: 1,
            y: [150, -150, -150, 0]
         }}
         transition={{
            duration: 1,
            ease: "backInOut",
            times: [0, 0.25, 0.5, 0.85, 1]
         }}
         exit={{
            rotate: "0deg ",
            scale: 0,
            y:0
         }}
         className="w-40 h-40 bg-black">
        </motion.div>}
       </AnimatePresence>
    </div>
  )
}
