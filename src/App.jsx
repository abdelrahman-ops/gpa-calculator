import Header from './components/Header';
import Footer from './components/Footer';
import SemesterList from './components/gpa/SemesterList';
import useGpaCalculator from './components/hooks/useGpaCalculator';
import GpaResultsPanel from './components/gpa/GpaResultsPanel';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import QuickTips from './components/tips/QuickTips';
import CalculationInfo from './components/gpa/CalculationInfo';
import { Toaster } from 'react-hot-toast';

const COLORS = {
    primary: 'from-indigo-600 to-violet-700',
    secondary: 'from-slate-900 to-gray-800',
    background: 'from-gray-50 to-gray-100',
    card: 'bg-white',
    highlight: 'text-violet-600',
    muted: 'text-gray-600'
};

function App() {
    const {
        semesters,
        addSemester,
        removeSemester,
        updateSemester,
        addSubject,
        removeSubject,
        updateSubject,
        calculateGpa
    } = useGpaCalculator();

    const [results, setResults] = useState(null);

    const handleCalculate = () => {
        setResults(calculateGpa());
    };

    return (
        <AnimatePresence mode='wait'>
            <div className={`min-h-screen bg-gradient-to-br ${COLORS.background} flex flex-col`}>
                <Header />
                
                <motion.main
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex-grow container mx-auto px-4 py-8 md:py-12"
                >
                    <div className="max-w-7xl mx-auto">
                        <motion.div 
                            className="grid grid-cols-1 lg:grid-cols-12 gap-6 xl:gap-8"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.1 }}
                        >
                            {/* Main Content Area */}
                            <div className="lg:col-span-8 space-y-6">
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="bg-white rounded-2xl shadow-lg overflow-hidden"
                                >
                                    <div className="p-5 border-b border-gray-100">
                                        <h2 className="text-xl font-bold text-gray-800 flex items-center">
                                            <span className="w-2 h-6 bg-indigo-500 rounded-full mr-3"></span>
                                            Semester Management
                                        </h2>
                                    </div>
                                    <div className="p-5 md:p-6">
                                        <SemesterList
                                            semesters={semesters}
                                            onAddSemester={addSemester}
                                            onRemoveSemester={removeSemester}
                                            onUpdateSemester={updateSemester}
                                            onAddSubject={addSubject}
                                            onRemoveSubject={removeSubject}
                                            onSubjectChange={updateSubject}
                                            onCalculate={handleCalculate}
                                        />
                                    </div>
                                </motion.div>
                            </div>

                            {/* Sidebar */}
                            <div className="lg:col-span-4 space-y-6">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="sticky top-6 space-y-6"
                                >
                                    <GpaResultsPanel results={results} semesters={semesters} />
                                    
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.4 }}
                                        className="bg-white rounded-2xl shadow-lg overflow-hidden"
                                    >
                                        <QuickTips />
                                    </motion.div>
                                    
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.5 }}
                                        className="bg-white rounded-2xl shadow-lg overflow-hidden"
                                    >
                                        <CalculationInfo />
                                    </motion.div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </motion.main>
                
                <Footer />

                <Toaster
                    position="top-center"
                    toastOptions={{
                        duration: 1000,
                        className: 'font-sans',
                        success: {
                            style: {
                                background: '#16a34a',
                                color: 'white',
                                boxShadow: '0 4px 12px rgba(5, 150, 105, 0.3)'
                            },
                            iconTheme: {
                                primary: 'white',
                                secondary: '#16a34a',
                            },
                        },
                        error: {
                            style: {
                                background: '#dc2626',
                                color: 'white',
                                boxShadow: '0 4px 12px rgba(220, 38, 38, 0.3)'
                            },
                        },
                    }}
                    
                />
            </div>
        </AnimatePresence>
    );
}

export default App;