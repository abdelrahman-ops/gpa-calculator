import {  motion } from 'framer-motion';
import { FaLightbulb } from 'react-icons/fa';
const QuickTips = () => {
    const tips = [
        "Add all your completed semesters",
        "Include all subjects with correct grades",
        "Click 'Calculate' to see your cumulative GPA"
    ];

    const COLORS = {
        highlight: 'text-violet-600',
        muted: 'text-gray-600'
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className={`${COLORS.card} rounded-2xl shadow-lg p-6 border border-gray-200/50`}
        >
            <h3 className="text-lg font-semibold mb-4 flex items-center text-gray-800">
                <FaLightbulb className={`mr-2 ${COLORS.highlight}`} />
                Quick Tips
            </h3>
            <ul className="space-y-3">
                {tips.map((tip, index) => (
                    <motion.li 
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="flex items-start"
                    >
                        <span className="flex-shrink-0 bg-violet-100 text-violet-600 rounded-full p-1 mr-3">
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </span>
                        <span className={`text-sm ${COLORS.muted}`}>{tip}</span>
                    </motion.li>
                ))}
            </ul>
        </motion.div>
    )
}

export default QuickTips