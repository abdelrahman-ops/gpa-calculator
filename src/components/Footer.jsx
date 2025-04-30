import { FaGithub, FaLinkedin, FaHeart, FaCalculator, FaEnvelope } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Footer() {
    const [heartBeat, setHeartBeat] = useState(false);

    return (
        <motion.footer 
            className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-8 pb-6 relative overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
        >
            {/* Subtle grid pattern */}
            <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjJnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4yIj48cGF0aCBkPSJNMzYgMzRINnYyNGgzMFYzNHptMjQgMjRINnYtNmgzMHY2aDZ6bTAtMjRINnYtNmgzMHY2aDZ6bTAtMjRINnYtNmgzMHY2aDZ6TTYgNmgzMHY2SDZWNnoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>

            {/* Animated gradient elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div 
                    className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-indigo-600 opacity-10 blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.15, 0.1]
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        repeatType: 'reverse',
                        ease: 'easeInOut'
                    }}
                />
                <motion.div 
                    className="absolute -left-20 -bottom-20 w-72 h-72 rounded-full bg-purple-600 opacity-10 blur-3xl"
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        repeatType: 'reverse',
                        ease: 'easeInOut',
                        delay: 5
                    }}
                />
            </div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                {/* Simplified content grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Brand section */}
                    <motion.div 
                        className="space-y-4"
                        whileHover={{ y: -5 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <div className="flex items-center space-x-3">
                            <motion.div
                                whileHover={{ rotate: 10 }}
                                transition={{ type: 'spring' }}
                            >
                                <FaCalculator className="h-8 w-8 text-indigo-400" />
                            </motion.div>
                            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
                                GPA<span className="text-white">Calc</span>
                            </h3>
                        </div>
                        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                            Precision academic tracking with elegant design. Calculate, visualize, and optimize your GPA journey.
                        </p>
                    </motion.div>

                    {/* Empty space to maintain layout */}
                    <div className="hidden md:block"></div>

                    {/* Social section */}
                    <div className="space-y-4">
                        <h5 className="text-sm text-gray-400 mb-3">Connect with me</h5>
                        <div className="flex flex-wrap gap-3">
                            {[
                                { icon: FaGithub, label: 'GitHub', href: 'https://github.com/abdelrahman-ops' },
                                { icon: FaXTwitter, label: 'Twitter', href: 'https://x.com/abdelrahmanpuzz' },
                                { icon: FaLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/abdelrahman-ataa-b557b8219/' },
                                { icon: FaEnvelope, label: 'Email', href: 'mailto:abdelrahmanataa17@gmail.com' },
                            ].map((social) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="h-10 w-10 rounded-full bg-gray-800/50 backdrop-blur-sm flex items-center justify-center hover:bg-indigo-600/50 transition-colors border border-gray-700 hover:border-indigo-500"
                                    whileHover={{ y: -3, scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    aria-label={social.label}
                                >
                                    <social.icon className="h-4 w-4" />
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom section */}
                <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-400 text-xs sm:text-sm">
                        &copy; {new Date().getFullYear()} GPA Calculator. All rights reserved.
                    </p>
                    <div className="flex items-center">
                        <p className="text-gray-400 text-xs sm:text-sm mr-2">Crafted with</p>
                        <motion.div
                            animate={{ 
                                scale: heartBeat ? [1, 1.3, 1] : 1,
                                color: heartBeat ? '#f43f5e' : '#ffffff'
                            }}
                            transition={{ duration: 0.7 }}
                            onHoverStart={() => setHeartBeat(true)}
                            onHoverEnd={() => setHeartBeat(false)}
                        >
                            <FaHeart className="inline mx-1" />
                        </motion.div>
                        <p className="text-white font-medium text-xs sm:text-sm ml-1">by عبدالرحمن</p>
                    </div>
                </div>
            </div>
        </motion.footer>
    );
}