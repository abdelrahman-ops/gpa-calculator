import { FaGithub , FaLinkedin, FaHeart , FaCalculator} from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Footer() {
    const [heartBeat, setHeartBeat] = useState(false);

    return (
        <motion.footer 
            className="bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-12 pb-6 relative overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
        >
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(10)].map((_, i) => (
            <motion.div
                key={i}
                className="absolute rounded-full bg-indigo-500 bg-opacity-10"
                initial={{
                x: Math.random() * 100,
                y: Math.random() * 100,
                width: Math.random() * 15 + 5,
                height: Math.random() * 15 + 5,
                }}
                animate={{
                y: [0, Math.random() * 100 - 50],
                x: [0, Math.random() * 100 - 50],
                opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                duration: Math.random() * 15 + 10,
                repeat: Infinity,
                repeatType: 'reverse',
                }}
            />
            ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
            {/* Main content */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Brand info */}
            <motion.div 
                className="space-y-4"
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
            >
                <div className="flex items-center space-x-3">
                <FaCalculator className="h-8 w-8 text-indigo-400" />
                <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
                    GPA<span className="text-white">Calculator</span>
                </h3>
                </div>
                <p className="text-gray-300 max-w-md">
                The most accurate and beautiful GPA calculator for students. Track your academic progress with style.
                </p>
            </motion.div>

            {/* Quick links */}
            <div className="grid grid-cols-2 gap-4">
                <div>
                <h4 className="text-lg font-semibold mb-4 text-indigo-300">Resources</h4>
                <ul className="space-y-2">
                    {['Grading Scale', 'How It Works', 'FAQ', 'Contact'].map((item) => (
                    <motion.li 
                        key={item}
                        whileHover={{ x: 5 }}
                        transition={{ type: 'spring', stiffness: 500 }}
                    >
                        <a href="#" className="text-gray-300 hover:text-[#f89b29] transition-colors">
                        {item}
                        </a>
                    </motion.li>
                    ))}
                </ul>
                </div>
                <div>
                <h4 className="text-lg font-semibold mb-4 text-indigo-300">Legal</h4>
                <ul className="space-y-2">
                    {['Privacy Policy', 'Terms of Use', 'Cookies', 'Licenses'].map((item) => (
                    <motion.li 
                        key={item}
                        whileHover={{ x: 5 }}
                        transition={{ type: 'spring', stiffness: 500 }}
                    >
                        <a href="#" className="text-gray-300 hover:text-[#f89b29] transition-colors ">
                        {item}
                        </a>
                    </motion.li>
                    ))}
                </ul>
                </div>
            </div>

            {/* Social/contact */}
            <div className="space-y-4">
                <h4 className="text-lg font-semibold text-indigo-300">Connect With Us</h4>
                <div className="flex space-x-4">
                {[
                    { icon: FaGithub, label: 'GitHub' , href: 'https://github.com/abdelrahman-ops'},
                    { icon: FaXTwitter , label: 'X', href: 'https://x.com/abdelrahmanpuzz'},
                    { icon: FaLinkedin, label: 'LinkedIn' , href: 'https://www.linkedin.com/in/abdelrahman-ataa-b557b8219/' },
                ].map((social) => (
                    <motion.a
                    key={social.label}
                    href={social.href}
                    className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-indigo-600 transition-colors"
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.label}
                    >
                    <social.icon className="h-5 w-5" />
                    </motion.a>
                ))}
                </div>
                <p className="text-gray-300">
                Subscribe to our newsletter for academic tips and updates
                </p>
                <div className="flex">
                <input 
                    type="email" 
                    placeholder="Your email" 
                    className="px-4 py-2 bg-gray-800 text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full"
                />
                <motion.button 
                    className="px-4 py-2 bg-indigo-600 text-white rounded-r-lg hover:bg-indigo-700 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Join
                </motion.button>
                </div>
            </div>
            </div>

            {/* Copyright section */}
            <motion.div 
            className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            >
            <p className="text-gray-400 text-sm mb-2 md:mb-0">
                &copy; {new Date().getFullYear()} GPACalculator. All rights reserved.
            </p>
            <div className="flex items-center">
                <p className="text-gray-400 text-sm mr-2">Made with</p>
                <motion.div
                animate={{ 
                    scale: heartBeat ? [1, 1.2, 1] : 1,
                    color: heartBeat ? '#f43f5e' : '#ffffff'
                }}
                transition={{ duration: 0.5 }}
                onHoverStart={() => setHeartBeat(true)}
                onHoverEnd={() => setHeartBeat(false)}
                >
                <FaHeart className="inline mx-1 mb-2" />
                </motion.div>
                <p className="text-white font-medium ml-1">by عبدالرحمن</p>
            </div>
            </motion.div>
        </div>
        </motion.footer>
    );
}