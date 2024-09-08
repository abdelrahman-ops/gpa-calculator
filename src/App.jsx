import { useState } from 'react';
import Semester from './components/Semester';
import GpaResult from './components/GpaResult';

function App() {
  const [semesters, setSemesters] = useState([{ subjects: Array(3).fill({ grade: '', credit: '' }) }]);
  const [cumulativeGpa, setCumulativeGpa] = useState(null);

  const addSemester = () => {
    setSemesters([...semesters, { subjects: Array(3).fill({ grade: '', credit: '' }) }]);
  };

  const calculateCumulativeGpa = () => {
    let totalCredits = 0;
    let weightedSum = 0;

    semesters.forEach((semester) => {
      semester.subjects.forEach((subject) => {
        const gradeValue = getGradeValue(subject.grade);
        const credit = parseFloat(subject.credit);

        if (gradeValue !== null && !isNaN(credit)) {
          totalCredits += credit;
          weightedSum += gradeValue * credit;
        }
      });
    });

    const calculatedGpa = totalCredits > 0 ? (weightedSum / totalCredits).toFixed(2) : null;
    setCumulativeGpa(calculatedGpa);
  };

  const updateSemester = (index, updatedSubjects) => {
    const newSemesters = [...semesters];
    newSemesters[index].subjects = updatedSubjects;
    setSemesters(newSemesters);
  };

  const getGradeValue = (grade) => {
    const gradeMap = {
      'A+': 4.00,
      'A': 4.00,
      'A-': 3.70,
      'B+': 3.30,
      'B': 3.00,
      'B-': 2.70,
      'C+': 2.30,
      'C': 2.00,
      'C-': 1.70,
      'D+': 1.30,
      'D': 1.00,
      'F': 0.00
    };
  
    return gradeMap[grade.toUpperCase()] || null;
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h1 className="text-2xl font-bold mb-4">Cumulative GPA Calculator</h1>

        {semesters.map((semester, index) => (
          <Semester
            key={index}
            index={index}
            subjects={semester.subjects}
            onUpdateSemester={updateSemester}
            calculateSemesterGpa={(subjects) => {
              let totalCredits = 0;
              let weightedSum = 0;

              subjects.forEach((subject) => {
                const gradeValue = getGradeValue(subject.grade);
                const credit = parseFloat(subject.credit);

                if (gradeValue !== null && !isNaN(credit)) {
                  totalCredits += credit;
                  weightedSum += gradeValue * credit;
                }
              });

              return totalCredits > 0 ? (weightedSum / totalCredits).toFixed(2) : null;
            }}
          />
        ))}

        <button
          onClick={addSemester}
          className="w-full bg-purple-500 text-white p-2 rounded hover:bg-purple-600"
        >
          Add Another Semester
        </button>

        <button
          onClick={calculateCumulativeGpa}
          className="w-full bg-green-500 text-white p-2 rounded mt-4 hover:bg-green-600"
        >
          Calculate Cumulative GPA
        </button>

        {cumulativeGpa && <GpaResult cumulativeGpa={cumulativeGpa} />}
      </div>
    </div>
  );
}

export default App;
