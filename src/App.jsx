// import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Footer from './components/Footer';
import SemesterList from './components/gpa/SemesterList';
import useGpaCalculator from './components/hooks/useGpaCalculator';
// import GradeScaleModal from './components/gpa/GradeScaleModal';
import GpaResultsPanel from './components/gpa/GpaResultsPanel';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import QuickTips from './components/tips/QuickTips';
import CalculationInfo from './components/gpa/CalculationInfo';
import { Toaster } from 'react-hot-toast';
// import WhatIfCalculator from './components/gpa/WhatIfCalculator';
// Color constants for easy maintenance
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
    // const [showGradeScale, setShowGradeScale] = useState(false);

    const handleCalculate = () => {
        setResults(calculateGpa());
    };
    console.log(results);
    

    

    return (
        <AnimatePresence mode='wait'>
            <div className={`min-h-screen bg-gradient-to-br ${COLORS.background} flex flex-col`}>
                <Header />
                {/* <Header onShowGradeScale={() => setShowGradeScale(true)} /> */}
                
                <motion.main
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex-grow container mx-auto px-4 py-8"
                >
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                            <div className="lg:col-span-8">
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    
                                >
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
                                </motion.div>
                            </div>

                            <div className="lg:col-span-4 space-y-6">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <GpaResultsPanel results={results} semesters={semesters} />
                                </motion.div>
                                <QuickTips />
                                <CalculationInfo />
                            </div>
                        </div>
                    </div>
                </motion.main>
                {/* <WhatIfCalculator results={results} /> */}
                
                <Footer />

                    <Toaster
                    position="top-center"
                    toastOptions={{
                        success: {
                            style: {
                                background: 'green',
                                color: 'white',
                            },
                            iconTheme: {
                                primary: 'white',
                                secondary: 'green',
                            },
                        },
                        error: {
                            style: {
                                background: 'red',
                                color: 'white',
                            },
                        },
                    }}
                />
            </div>
            
        </AnimatePresence>
    );
}

export default App;