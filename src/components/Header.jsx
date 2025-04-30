import { FaCalculator, FaInfoCircle, FaChartLine, FaUserGraduate, FaBars } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import MyProgress from '../pages/MyProgress';
import GradeScaleModal from './gpa/GradeScaleModal';
import Profile from '../pages/Profile';

export default function Header() {
    const [isHovered, setIsHovered] = useState(false);
    const [showGradeScale, setShowGradeScale] = useState(false);
    const [showProgress, setShowProgress] = useState(false);
    const [showProfile, setShowProfile] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Mobile menu items
    const mobileMenuItems = [
        {
            icon: <FaInfoCircle className="h-5 w-5 mr-2 text-white" />,
            text: "Grading Scale",
            action: () => setShowGradeScale(true)
        },
        {
            icon: <FaChartLine className="h-5 w-5 mr-2 text-white" />,
            text: "My Progress",
            action: () => setShowProgress(true)
        },
        {
            icon: <FaUserGraduate className="h-5 w-5 mr-2 text-white" />,
            text: "Profile",
            action: () => setShowProfile(true)
        }
    ];

    return (
        <>
            <motion.header 
                className="shadow-xl bg-[#103783] text-white sticky top-0 z-50"
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <div className="container mx-auto px-4 py-4">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        {/* Logo/Title Section */}
                        <div className="flex items-center justify-between w-full md:w-auto mb-4 md:mb-0">
                            <motion.div 
                                className="flex items-center group"
                                whileHover={{ scale: 1.02 }}
                            >
                                <motion.div
                                    animate={{ rotate: isHovered ? [0, 10, -10, 0] : 0 }}
                                    transition={{ duration: 0.5 }}
                                    onHoverStart={() => setIsHovered(true)}
                                    onHoverEnd={() => setIsHovered(false)}
                                >
                                    <FaCalculator className="h-10 w-10 text-indigo-400 mr-3 transition-all duration-300 group-hover:text-indigo-200" />
                                </motion.div>
                                <div className="relative">
                                    <h1 className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
                                        GPA<span className="text-white">Calculator</span>
                                    </h1>
                                </div>
                            </motion.div>

                            {/* Mobile Menu Button */}
                            <button 
                                className="md:hidden p-2 rounded-lg bg-white bg-opacity-10"
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            >
                                <FaBars className="h-6 w-6 text-white" />
                            </button>
                        </div>

                        {/* Desktop Navigation Buttons */}
                        <div className="hidden md:flex items-center space-x-4">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setShowGradeScale(true)}
                                className="flex items-center px-4 py-2 sm:px-5 sm:py-3 bg-white bg-opacity-10 backdrop-blur-sm rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20 shadow-lg"
                            >
                                <FaInfoCircle className="h-5 w-5 mr-2 text-white" />
                                <span className="text-white font-medium">Grading Scale</span>
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center px-4 py-2 sm:px-5 sm:py-3 bg-indigo-500 rounded-xl hover:bg-indigo-600 transition-all duration-300 shadow-lg"
                                onClick={() => setShowProgress(true)}
                            >
                                <FaChartLine className="h-5 w-5 mr-2 text-white" />
                                <span className="text-white font-medium">My Progress</span>
                            </motion.button>

                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                className="flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white bg-opacity-20 backdrop-blur-sm cursor-pointer"
                                onClick={() => setShowProfile(true)}
                            >
                                <FaUserGraduate className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                            </motion.div>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    <AnimatePresence>
                        {mobileMenuOpen && (
                            <motion.div 
                                className="md:hidden mt-4"
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="flex flex-col space-y-3">
                                    {mobileMenuItems.map((item, index) => (
                                        <motion.button
                                            key={`mobile-menu-item-${index}`}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            onClick={() => {
                                                item.action();
                                                setMobileMenuOpen(false);
                                            }}
                                            className="flex items-center w-full px-4 py-3 bg-white bg-opacity-10 backdrop-blur-sm rounded-lg hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20 shadow-lg"
                                        >
                                            {item.icon}
                                            <span className="text-white font-medium">{item.text}</span>
                                        </motion.button>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Animated Underline */}
                    <motion.div 
                        className="h-1 mt-4 bg-gradient-to-r from-transparent via-white to-transparent mx-auto"
                        initial={{ opacity: 0, scaleX: 0 }}
                        animate={{ opacity: 1, scaleX: 1 }}
                        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                    />
                </div>

                {/* Floating Particles Animation */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    {[...Array(15)].map((_, i) => (
                        <motion.div
                            key={`particle-${i}`}
                            className="absolute rounded-full bg-white bg-opacity-10"
                            initial={{
                                x: Math.random() * 100,
                                y: Math.random() * 100,
                                width: Math.random() * 10 + 2,
                                height: Math.random() * 10 + 2,
                            }}
                            animate={{
                                y: [0, Math.random() * 50 - 25],
                                x: [0, Math.random() * 50 - 25],
                                opacity: [0.5, 0.8, 0.5],
                            }}
                            transition={{
                                duration: Math.random() * 10 + 10,
                                repeat: Infinity,
                                repeatType: 'reverse',
                            }}
                        />
                    ))}
                </div>
            </motion.header>

            {/* Modals */}
            <GradeScaleModal 
                isOpen={showGradeScale} 
                onClose={() => setShowGradeScale(false)} 
            />
            
            <MyProgress 
                isOpen={showProgress} 
                onClose={() => setShowProgress(false)} 
            />
            
            <Profile 
                isOpen={showProfile} 
                onClose={() => setShowProfile(false)} 
            />
        </>
    );
}