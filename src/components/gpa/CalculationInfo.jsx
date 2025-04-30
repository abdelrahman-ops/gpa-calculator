/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import { FaCalculator, FaPercentage, FaPlus, FaDivide, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const CalculationInfo = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mt-6 bg-blue-50 rounded-2xl p-4 border border-blue-100">
      <button 
        className="w-full flex justify-between items-center focus:outline-none"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center">
          <FaCalculator className="mr-2 text-blue-600" />
          <h4 className="text-lg font-semibold text-blue-800">
            How GPA is Calculated
          </h4>
        </div>
        {isExpanded ? (
          <FaChevronUp className="text-blue-600" />
        ) : (
          <FaChevronDown className="text-blue-600" />
        )}
      </button>

      {isExpanded && (
        <div className="mt-3 space-y-3 animate-fadeIn">
          <div className="flex items-start">
            <div className="bg-blue-100 p-2 rounded-lg mr-3">
              <FaPercentage className="text-blue-600" />
            </div>
            <div>
              <h5 className="font-medium text-blue-700">Grade Points</h5>
              <p className="text-sm text-gray-600">
                Each letter grade converts to a grade point (A=4.0, B=3.0, etc.)
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-blue-100 p-2 rounded-lg mr-3">
              <FaPlus className="text-blue-600" />
            </div>
            <div>
              <h5 className="font-medium text-blue-700">Weighted Sum</h5>
              <p className="text-sm text-gray-600">
                Multiply each course's grade point by its credit hours
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-blue-100 p-2 rounded-lg mr-3">
              <FaDivide className="text-blue-600" />
            </div>
            <div>
              <h5 className="font-medium text-blue-700">Final GPA</h5>
              <p className="text-sm text-gray-600">
                Divide the total weighted sum by total credit hours
              </p>
            </div>
          </div>

          <div className="mt-4 p-3 bg-white rounded border border-blue-200">
            <p className="text-sm font-mono text-blue-800">
              GPA = Σ(Grade Point × Credit Hours) / Σ(Credit Hours)
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalculationInfo;