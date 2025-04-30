/* eslint-disable react/prop-types */
import Button from '../common/Button';

const SemesterHeader = ({ name, isExpanded, onToggle, onNameChange, onRemove }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center space-x-3">
        <button onClick={onToggle} className="text-gray-500 hover:text-gray-700">
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
        <input
          type="text"
          value={name}
          onChange={(e) => onNameChange(e.target.value)}
          className="text-lg font-semibold border-b border-transparent focus:border-gray-300 focus:outline-none"
        />
      </div>
      <Button
        variant="danger"
        size="sm"
        onClick={onRemove}
        className="opacity-70 hover:opacity-100"
      >
        Remove
      </Button>
    </div>
  );
};

export default SemesterHeader;