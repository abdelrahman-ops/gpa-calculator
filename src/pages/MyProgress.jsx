/* eslint-disable react/prop-types */
const MyProgress = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold">My Progress</h3>
            <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
            >
            &times;
            </button>
        </div>
        
        <div className="overflow-y-auto max-h-96">
            {/* Add your progress content here */}
            <p className="text-gray-600">Progress data will be displayed here.</p>
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

export default MyProgress;