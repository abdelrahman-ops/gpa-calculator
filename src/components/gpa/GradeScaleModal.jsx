import { motion, AnimatePresence } from 'framer-motion';
import { GRADE_SCALE } from '../constants/gradeScale';

const GradeScaleModal = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    {/* Backdrop */}
                    <motion.div
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                        onClick={onClose}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />
                    
                    {/* Modal Content */}
                    <motion.div
                        className="relative bg-white rounded-2xl shadow-xl w-full max-w-md max-h-[90vh] flex flex-col"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 20, opacity: 0 }}
                        transition={{ type: 'spring', damping: 25 }}
                    >
                        {/* Header */}
                        <div className="sticky top-0 z-10 bg-white p-4 border-b border-gray-100 rounded-t-2xl flex justify-between items-center">
                            <h3 className="text-xl font-semibold text-gray-900">Grading Scale</h3>
                            <button
                                onClick={onClose}
                                className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                                aria-label="Close"
                            >
                                <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        
                        {/* Scrollable Content */}
                        <div className="overflow-y-auto flex-1 p-4">
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Grade</th>
                                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Value</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {Object.entries(GRADE_SCALE).map(([grade, value]) => (
                                            <tr key={grade}>
                                                <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">{grade}</td>
                                                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{value.toFixed(1)}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        
                        {/* Footer */}
                        <div className="sticky bottom-0 bg-white p-4 border-t border-gray-100 rounded-b-2xl flex justify-end">
                            <button
                                onClick={onClose}
                                className="px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors text-sm font-medium"
                            >
                                Close
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default GradeScaleModal;