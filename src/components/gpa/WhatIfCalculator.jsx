/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { Select, Tooltip, Alert, Statistic } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';

const GRADE_SCALE = {
  'A': 4.0,
  'A-': 3.7,
  'B+': 3.3,
  'B': 3.0,
  'B-': 2.7,
  'C+': 2.3,
  'C': 2.0,
  'D': 1.0,
  'F': 0.0
};

const WhatIfCalculator = ({ results , semesters}) => {
  // Safely destructure with defaults
  const { 
    cumulativeGpa = 0, 
    totalCredits = 0, 
    semesterResults = [], 
    hasErrors = false 
  } = results || {};

  const [selectedSemesterId, setSelectedSemesterId] = useState(
    semesterResults[0]?.id || null
  );
  const [simulatedGrades, setSimulatedGrades] = useState({});
  const [projectedGPA, setProjectedGPA] = useState(parseFloat(cumulativeGpa));

  // Safely get selected semester
  const selectedSemester = semesterResults.find(s => s.id === selectedSemesterId) || null;

  // Calculate projected GPA
  useEffect(() => {
    if (!selectedSemester || hasErrors) return;

    const currentGPA = parseFloat(cumulativeGpa);
    const credits = parseFloat(totalCredits);
    let totalQualityPoints = currentGPA * credits;

    // Ensure subjects exists and is an array
    const subjects = selectedSemester.subjects || [];
    
    subjects.forEach(subject => {
      const credit = parseFloat(subject.credit) || 0;
      const simulatedGrade = simulatedGrades[subject.id];
      
      if (simulatedGrade && GRADE_SCALE[simulatedGrade] !== undefined) {
        // Remove original grade points if they exist
        if (subject.grade && GRADE_SCALE[subject.grade] !== undefined) {
          totalQualityPoints -= (GRADE_SCALE[subject.grade] * credit);
        }
        // Add simulated grade points
        totalQualityPoints += (GRADE_SCALE[simulatedGrade] * credit);
      }
    });

    const newGPA = credits > 0 ? totalQualityPoints / credits : 0;
    setProjectedGPA(Math.min(4.0, Math.max(0, newGPA)));
  }, [simulatedGrades, selectedSemesterId, cumulativeGpa, totalCredits, selectedSemester, hasErrors]);

  if (hasErrors) {
    return (
      <Alert 
        type="error" 
        message="Cannot calculate - Fix errors in your grades first"
        className="mb-4"
      />
    );
  }

  if (semesterResults.length === 0) {
    return (
      <Alert 
        type="warning" 
        message="No semester data available" 
        className="mb-4"
      />
    );
  }

  return (
    <motion.div 
      className="p-6 bg-white rounded-lg shadow-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center mb-4">
        <h3 className="text-lg font-semibold">What-If Grade Simulator</h3>
        <Tooltip title="See how different grades would affect your GPA">
          <InfoCircleOutlined className="ml-2 text-gray-500" />
        </Tooltip>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Select Semester:
        </label>
        <Select
          className="w-full"
          value={selectedSemesterId}
          onChange={setSelectedSemesterId}
          options={semesterResults.map(semester => ({
            value: semester.id,
            label: semester.name
          }))}
        />
      </div>

      {selectedSemester?.subjects?.length > 0 ? (
        <div className="space-y-3 mb-4">
          {selectedSemester.subjects.map(subject => (
            <div key={subject.id} className="p-3 bg-gray-50 rounded-2xl">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">
                  {subject.name || `Course ${subject.id.slice(0, 4)}`}
                </span>
                <span className="text-sm text-gray-600">
                  {subject.credit || '0'} credit(s)
                </span>
              </div>
              
              <Select
                className="w-full"
                placeholder={`Current: ${subject.grade || 'N/A'}`}
                value={simulatedGrades[subject.id]}
                onChange={value => setSimulatedGrades(prev => ({
                  ...prev,
                  [subject.id]: value
                }))}
                options={Object.entries(GRADE_SCALE).map(([grade, value]) => ({
                  value: grade,
                  label: `${grade} (${value.toFixed(1)})`
                }))}
              />
            </div>
          ))}
        </div>
      ) : (
        <Alert 
          type="info" 
          message="No courses in this semester" 
          className="mb-4"
        />
      )}

      <div className="grid grid-cols-2 gap-4 mt-6">
        <Statistic
          title="Current GPA"
          value={parseFloat(cumulativeGpa).toFixed(2)}
          className="border-r pr-4"
        />
        <Statistic
          title="Projected GPA"
          value={projectedGPA.toFixed(2)}
          valueStyle={{
            color: projectedGPA > parseFloat(cumulativeGpa) ? '#10B981' :
                  projectedGPA < parseFloat(cumulativeGpa) ? '#EF4444' : '#3B82F6'
          }}
        />
      </div>

      {projectedGPA !== parseFloat(cumulativeGpa) && (
        <div className="mt-3 text-center text-sm">
          {projectedGPA > parseFloat(cumulativeGpa) ? (
            <span className="text-green-600">
              ▲ Potential increase of {(projectedGPA - parseFloat(cumulativeGpa)).toFixed(2)}
            </span>
          ) : (
            <span className="text-red-600">
              ▼ Potential decrease of {(parseFloat(cumulativeGpa) - projectedGPA).toFixed(2)}
            </span>
          )}
        </div>
      )}
    </motion.div>
  );
};

export default WhatIfCalculator;