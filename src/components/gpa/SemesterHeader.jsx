/* eslint-disable react/prop-types */
import Button from '../common/Button';

const SemesterHeader = ({ name, isExpanded, onToggle, onNameChange, onRemove }) => {
    return (
        <div className="flex justify-between items-center w-full">
        {/* Left side - Toggle and Name */}
        <div className="flex items-center space-x-2 flex-1 min-w-0">
            {/* Collapse/Expand Button */}
            <button 
                onClick={onToggle} 
                className="text-gray-500 hover:text-gray-700 shrink-0"
                aria-label={isExpanded ? 'Collapse semester' : 'Expand semester'}
            >
            {isExpanded ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            )}
            </button>

            {/* Semester Name Input */}
            <input
                type="text"
                value={name}
                onChange={(e) => onNameChange(e.target.value)}
                className="text-base md:text-lg font-semibold border-b border-transparent focus:border-gray-300 focus:outline-none flex-1 min-w-0 truncate"
                maxLength={20}
                aria-label="Semester name"
            />
        </div>

            {/* Right side - Remove Button */}
            <div className="ml-2 shrink-0">
                <Button
                variant="danger"
                size="sm"
                onClick={onRemove}
                className="opacity-70 hover:opacity-100 text-xs md:text-sm"
                aria-label="Remove semester"
                >
                <span className="hidden xs:inline">Remove</span>
                <span className="xs:hidden">×</span>
                </Button>
            </div>
        </div>
    );
};

export default SemesterHeader;