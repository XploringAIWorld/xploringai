'use client'
import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

function HomeComponent() {
    const [motionScale, setMotionScale] = useState(0.8);

    useEffect(() => {
        // Change the motion scale automatically after a delay (e.g., 3 seconds)
        const timeout = setTimeout(() => {
            setMotionScale((prevScale) => (prevScale === 0.8 ? 1.2 : 0.8));
        }, 3000); // Change every 3 seconds, adjust the delay as needed

        // Clean up the timeout when the component unmounts
        return () => clearTimeout(timeout);
    }, [motionScale]);

    return (
        <div className="relative overflow-hidden h-[87vh]">
            <div className="absolute top-0 left-0 w-full h-full">
                <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 200 200"
                    className="w-full h-full"
                    initial={{ rotate: -10, scale: motionScale === 0.8 ? 1.2 : 0.8 }}
                    animate={{
                        rotate: motionScale === 0.8 ? -10 : 0, // Rotate when the scale changes
                        scale: motionScale === 1.2 ? 0.8 : 1.2,
                    }}
                    transition={{ duration: 10, repeat: Infinity }}
                >
                    <path
                        fill="#006FEE"
                        d="M52.2,-53.1C59.3,-45.2,50.7,-22.6,48.7,-2C46.7,18.6,51.2,37.1,44.2,51C37.1,65,18.6,74.2,0.7,73.6C-17.2,72.9,-34.5,62.3,-51.1,48.4C-67.6,34.5,-83.5,17.2,-80,3.5C-76.6,-10.3,-53.7,-20.6,-37.1,-28.4C-20.6,-36.3,-10.3,-41.8,6.2,-47.9C22.6,-54.1,45.2,-60.9,52.2,-53.1Z"
                        transform="translate(100 100)"
                    />
                </motion.svg>
            </div>

            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center py-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 text-center"
                >
                    <p>Welcome to</p> 
                    <p>Xploring AI World</p>
                </motion.div>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="text-base md:text-lg lg:text-xl text-white text-center"
                >
                    AI Tools Coming soon... till then Xplore
                </motion.p>
                <div className="flex space-x-2">
                    <Link href={'/ainews'} className="text-black font-semibold">AI News</Link>
                    <p>and</p>
                    <Link href={'/technews'} className="text-black font-semibold">Tech News</Link>
                </div>
            </div>
        </div>
    );
}

export default HomeComponent;
