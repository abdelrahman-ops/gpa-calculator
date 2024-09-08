/* eslint-disable react/prop-types */
// import React from 'react';
import { toast } from 'react-toastify';

function Subject({ index, subject, onSubjectChange }) {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    onSubjectChange(index, { ...subject, [name]: value });
  };

  const handleGradeChange = (event) => {
    onSubjectChange(index, { ...subject, grade: event.target.value });
  };

  const handleCreditChange = (event) => {
    const value = event.target.value;
    if (parseFloat(value) > 10) {
      toast.error("أنت رايح فين يعم");
      return;
    }
    onSubjectChange(index, { ...subject, credit: value });
  };

  return (
    <div className="flex items-center mb-4">
      <div className="flex flex-col w-1/2 mr-2">
        <span className="text-sm font-semibold mb-1">Grade</span>
        <div className="flex flex-wrap gap-2">
          {['A+', 'A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'F'].map((grade) => (
            <label key={grade} className="inline-flex items-center text-sm">
              <input
                type="radio"
                name={`grade-${index}`}
                value={grade}
                checked={subject.grade === grade}
                onChange={handleGradeChange}
                className="form-radio text-blue-600"
              />
              <span className="ml-2">{grade}</span>
            </label>
          ))}
        </div>
      </div>
      <div className="w-1/2">
        <span className="text-sm font-semibold mb-1">Credits</span>
        <input
          type="number"
          name="credit"
          value={subject.credit}
          onChange={handleCreditChange}
          placeholder="Credits"
          max="10"  // Set maximum credit value here
          className="border p-2 rounded w-full text-sm"
        />
      </div>
    </div>
  );
}

export default Subject;
