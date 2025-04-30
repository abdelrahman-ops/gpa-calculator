import { FaCalculator, FaInfoCircle, FaChartLine, FaUserGraduate, FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import MyProgress from '../pages/MyProgress';
import GradeScaleModal from './gpa/GradeScaleModal';
import Profile from '../pages/Profile';

export default function Header() {
    const [isHovered, setIsHovered] = useState(false);
    const [showGradeScale, setShowGradeScale] = useState(false);
    const [showProgress, setShowProgress] = useState(false);
    const [showProfile, setShowProfile] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const mobileMenuItems = [
        {
            icon: <FaInfoCircle className="h-5 w-5 mr-3 text-indigo-100" />,
            text: "Grading Scale",
            action: () => setShowGradeScale(true)
        },
        {
            icon: <FaChartLine className="h-5 w-5 mr-3 text-indigo-100" />,
            text: "My Progress",
            action: () => setShowProgress(true)
        },
        {
            icon: <FaUserGraduate className="h-5 w-5 mr-3 text-indigo-100" />,
            text: "Profile",
            action: () => setShowProfile(true)
        }
    ];

    return (
        <>
            <motion.header 
                className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#103783]/95 backdrop-blur-md py-2 shadow-lg' : 'bg-[#103783] py-4'}`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center">
                        {/* Logo/Title Section */}
                        <motion.div 
                            className="flex items-center group"
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                        >
                            <motion.div
                                animate={{ rotate: isHovered ? [0, 10, -10, 0] : 0 }}
                                transition={{ duration: 0.6 }}
                                onHoverStart={() => setIsHovered(true)}
                                onHoverEnd={() => setIsHovered(false)}
                            >
                                <FaCalculator className={`h-8 w-8 ${scrolled ? 'text-indigo-300' : 'text-indigo-400'} mr-3 transition-all duration-300 group-hover:text-indigo-200`} />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-purple-300">
                                    GPA<span className="text-white">Calc</span>
                                </h1>
                            </motion.div>
                        </motion.div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center space-x-3">
                            <motion.button
                                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.15)' }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => setShowGradeScale(true)}
                                className="flex items-center px-4 py-2 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20"
                                style={{ backdropFilter: 'blur(10px)' }}
                            >
                                <FaInfoCircle className="h-4 w-4 mr-2 text-white/90" />
                                <span className="text-white/90 text-sm font-medium">Grading</span>
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                className="flex items-center px-4 py-2 bg-indigo-500/90 rounded-xl hover:bg-indigo-600 transition-all duration-300 shadow-md"
                                onClick={() => setShowProgress(true)}
                            >
                                <FaChartLine className="h-4 w-4 mr-2 text-white" />
                                <span className="text-white text-sm font-medium">Progress</span>
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.2)' }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center justify-center h-9 w-9 rounded-full transition-all duration-300"
                                onClick={() => setShowProfile(true)}
                                style={{ backdropFilter: 'blur(10px)' }}
                            >
                                <FaUserGraduate className="h-4 w-4 text-white" />
                            </motion.button>
                        </nav>

                        {/* Mobile Menu Button */}
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="md:hidden p-2 rounded-lg bg-white/10 backdrop-blur-sm"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Menu"
                        >
                            {mobileMenuOpen ? (
                                <FaTimes className="h-5 w-5 text-white" />
                            ) : (
                                <FaBars className="h-5 w-5 text-white" />
                            )}
                        </motion.button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div 
                            className="md:hidden absolute top-full left-0 w-full bg-[#103783]/95 backdrop-blur-lg overflow-hidden"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                        >
                            <div className="px-4 py-3 space-y-2">
                                {mobileMenuItems.map((item, index) => (
                                    <motion.button
                                        key={`mobile-menu-item-${index}`}
                                        whileHover={{ x: 5 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={() => {
                                            item.action();
                                            setMobileMenuOpen(false);
                                        }}
                                        className="flex items-center w-full px-4 py-3 rounded-lg transition-all duration-200 hover:bg-white/10"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 + 0.2 }}
                                    >
                                        {item.icon}
                                        <span className="text-white/90 font-medium">{item.text}</span>
                                    </motion.button>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Floating Particles Animation - More subtle */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-1">
                    {[...Array(10)].map((_, i) => (
                        <motion.div
                            key={`particle-${i}`}
                            className="absolute rounded-full bg-white/5"
                            initial={{
                                x: Math.random() * 100,
                                y: Math.random() * 100,
                                width: Math.random() * 6 + 2,
                                height: Math.random() * 6 + 2,
                            }}
                            animate={{
                                y: [0, Math.random() * 30 - 15],
                                x: [0, Math.random() * 30 - 15],
                                opacity: [0.3, 0.6, 0.3],
                            }}
                            transition={{
                                duration: Math.random() * 15 + 10,
                                repeat: Infinity,
                                repeatType: 'reverse',
                                ease: 'easeInOut'
                            }}
                        />
                    ))}
                </div>
            </motion.header>

            {/* Add space for fixed header */}
            <div className="h-16 md:h-20"></div>

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