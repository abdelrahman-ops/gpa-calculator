/* eslint-disable react/prop-types */
// import React from 'react';
import Subject from './Subject';

function Semester({ index, subjects, onUpdateSemester, calculateSemesterGpa }) {
  const handleSubjectChange = (subjectIndex, updatedSubject) => {
    const newSubjects = [...subjects];
    newSubjects[subjectIndex] = updatedSubject;
    onUpdateSemester(index, newSubjects);
  };

  const addSubject = () => {
    onUpdateSemester(index, [...subjects, { grade: '', credit: '' }]);
  };

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Semester {index + 1}</h2>

      {subjects.map((subject, subjectIndex) => (
        <Subject
          key={subjectIndex}
          index={subjectIndex}
          subject={subject}
          onSubjectChange={handleSubjectChange}
        />
      ))}

      <button
        onClick={addSubject}
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 mb-4"
      >
        Add Another Subject
      </button>

      <div className="mt-4">
        <h3 className="text-lg font-semibold">
          GPA for Semester {index + 1}: {calculateSemesterGpa(subjects) || 'N/A'}
        </h3>
      </div>
    </div>
  );
}

export default Semester;
