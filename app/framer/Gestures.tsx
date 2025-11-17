"use client"
import React from 'react'
import { motion, MotionConfig } from 'framer-motion'

export default function Gestures() {
    return (
        <div className="grid place-content-center h-screen gap-0.5">
            <MotionConfig transition={{
                duration: 0.125,
                ease: "easeInOut"
            }}>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95, rotate: '2.5deg' }}

                    className="bg-blue-500 p-4 text-white text-xl text-center rounded-lg">
                    Click me!
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.85, rotate: '-2.5deg' }}

                    className="bg-red-500 p-4 text-white text-xl text-center rounded-lg">
                    Click me!
                </motion.button>
            </MotionConfig>
        </div>
    )
}
