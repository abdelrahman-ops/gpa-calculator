/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { GRADE_SCALE } from '../constants/gradeScale';
import { v4 as uuidv4 } from 'uuid';
import toast from 'react-hot-toast';

const STORAGE_KEY = 'gpaCalculatorData';

const useGpaCalculator = () => {
    
    const [semesters, setSemesters] = useState(() => {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            return saved ? JSON.parse(saved) : [
                { 
                    id: uuidv4(),
                    name: 'Semester 1',
                    subjects: Array(3).fill(null).map(() => ({ 
                        id: uuidv4(),
                        name: '', 
                        grade: '', 
                        credit: '' 
                    })) 
                }
            ];
        }catch (error) {
            toast.error('Error loading data from localStorage. Resetting to default.');
            return [
                { 
                    id: uuidv4(),
                    name: 'Semester 1',
                    subjects: Array(3).fill(null).map(() => ({ 
                        id: uuidv4(),
                        name: '', 
                        grade: '', 
                        credit: '' 
                    })) 
                }
            ];
        }
    });

    // Save to localStorage whenever semesters change
    useEffect(() => {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(semesters));
        } catch (error) {
            toast.error('Failed to save data');
        }
    }, [semesters]);



    const addSemester = () => {
        const nextNumber = semesters.length + 1;
        setSemesters([...semesters, { 
            id: uuidv4(),
            name: `Semester ${nextNumber}`,
            subjects: Array(3).fill(null).map(() => ({ 
                id: uuidv4(), 
                name: '', 
                grade: '', 
                credit: '' 
            })) 
        }]);
        toast.success(`Semester ${nextNumber} added`);
    };

    const removeSemester = (id) => {
        if (semesters.length <= 1) {
            toast.error('You must keep at least one semester');
            return;
        }
        
        const semesterToRemove = semesters.find(s => s.id === id);
        const updatedSemesters = semesters.filter(semester => semester.id !== id);
        
        const renumberedSemesters = updatedSemesters.map((semester, index) => {
            if (/^Semester \d+$/.test(semester.name)) {
                return { ...semester, name: `Semester ${index + 1}` };
            }
            return semester; // Don't forget to return the semester if condition isn't met
        });
        
        setSemesters(renumberedSemesters);
        toast.success(`"${semesterToRemove.name}" removed`);
    };

    const updateSemester = (id, updatedData) => {
        setSemesters(semesters.map(semester => 
            semester.id === id ? { ...semester, ...updatedData } : semester
        ));
    };

    const addSubject = (semesterId) => {
        setSemesters(semesters.map(semester => 
            semester.id === semesterId 
                ? { 
                    ...semester, 
                    subjects: [...semester.subjects, { 
                        id: uuidv4(), 
                        name: '', 
                        grade: '', 
                        credit: '' 
                    }] 
                }
                : semester
        ));
        toast.success('Subject added');
    };

    const removeSubject = (semesterId, subjectId) => {
        setSemesters(semesters.map(semester => {
            if (semester.id === semesterId) {
                if (semester.subjects.length <= 1) {
                    toast.error('You must keep at least one subject');
                    return semester;
                }
                const removedSubject = semester.subjects.find(s => s.id === subjectId);
                toast.success(`"${removedSubject.name || 'Subject'}" removed`);
                return {
                    ...semester,
                    subjects: semester.subjects.filter(subject => subject.id !== subjectId)
                };
            }
            return semester;
        }));
    };

    const updateSubject = (semesterId, subjectId, updatedData) => {
        setSemesters(semesters.map(semester => 
            semester.id === semesterId
                ? {
                    ...semester,
                    subjects: semester.subjects.map(subject =>
                        subject.id === subjectId ? { ...subject, ...updatedData } : subject
                    )
                }
                : semester
        ));
    };

    const calculateGpa = () => {
        let totalCredits = 0;
        let weightedSum = 0;
        let semesterResults = [];
        let hasErrors = false;
        let errorMessages = [];

        semesters.forEach((semester, semIndex) => {
            let semesterCredits = 0;
            let semesterWeightedSum = 0;
            let semesterHasErrors = false;

            semester.subjects.forEach((subject, subIndex) => {
                const gradeValue = GRADE_SCALE[subject.grade] || 0;
                let credit = parseFloat(subject.credit) || 0;
                
                // Validate credit hours
                if (isNaN(credit) || credit < 0) {
                    semesterHasErrors = true;
                    errorMessages.push(
                        `Invalid credit hours in ${semester.name}, Subject ${subIndex + 1}`
                    );
                    credit = 0;
                }

                // Validate grade
                if (!(subject.grade in GRADE_SCALE)) {
                    semesterHasErrors = true;
                    errorMessages.push(
                        `Invalid grade in ${semester.name}, Subject ${subIndex + 1}`
                    );
                }

                semesterCredits += credit;
                semesterWeightedSum += gradeValue * credit;
            });

            const semesterGpa = semesterCredits > 0 ? (semesterWeightedSum / semesterCredits) : 0;
            
            semesterResults.push({
                id: semester.id,
                name: semester.name,
                gpa: semesterHasErrors ? 'Error' : semesterGpa.toFixed(3),
                credits: semesterCredits.toFixed(1),
                hasError: semesterHasErrors
            });

            totalCredits += semesterCredits;
            weightedSum += semesterWeightedSum;
            hasErrors = hasErrors || semesterHasErrors;
        });

        // Show all validation errors
        if (errorMessages.length > 0) {
            errorMessages.forEach(msg => toast.error(msg, { duration: 2000 }));
        }

        const cumulativeGpa = hasErrors 
            ? 'Invalid Input' 
            : totalCredits > 0 
                ? (weightedSum / totalCredits).toFixed(3) 
                : '0.000';

        if (!hasErrors && totalCredits > 0) {
            toast.success(`GPA calculated: ${cumulativeGpa}`, {
                icon: '🎓',
                duration: 3000
            });
        }

        return {
            cumulativeGpa,
            totalCredits: totalCredits.toFixed(1),
            semesterResults,
            hasErrors
        };
    };

    const clearAllData = () => {
        localStorage.removeItem(STORAGE_KEY);
        setSemesters([{ 
            id: uuidv4(),
            name: 'Semester 1',
            subjects: Array(3).fill(null).map(() => ({ 
                id: uuidv4(),
                name: '', 
                grade: '', 
                credit: '' 
            })) 
        }]);
        toast.success('All data reset');
    };

    return {
        semesters,
        addSemester,
        removeSemester,
        updateSemester,
        addSubject,
        removeSubject,
        updateSubject,
        calculateGpa,
        clearAllData
    };
};

export default useGpaCalculator;