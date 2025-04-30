/* eslint-disable react/prop-types */
import { GRADE_SCALE } from '../constants/gradeScale';

const GradeScaleModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold">Grading Scale</h3>
            <button 
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700"
            >
                &times;
            </button>
            </div>
            
            <div className="overflow-y-auto max-h-96">
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
                    <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">{grade}</td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">{value}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
            
            <div className="mt-4 flex justify-end">
            <button
                onClick={onClose}
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
            >
                Close
            </button>
            </div>
        </div>
        </div>
    );
};

export default GradeScaleModal;