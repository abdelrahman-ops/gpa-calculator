/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Semester from './Semester';
import GpaResultsPanel from './GpaResultsPanel';
import TotalCreditsDisplay from './TotalCreditsDisplay';
import Button from '../common/Button';
import AddSemesterButton from './AddSemesterButton';

const SemesterList = ({ 
    semesters = [], 
    onAddSemester, 
    onRemoveSemester, 
    onUpdateSemester, 
    onAddSubject, 
    onRemoveSubject, 
    onSubjectChange, 
    onCalculate 
}) => {
    return (
        <div>
            {semesters.map((semester) => (
                <Semester
                    key={semester.id}
                    semester={semester}
                    onUpdate={onUpdateSemester}
                    onRemove={onRemoveSemester}
                    onAddSubject={onAddSubject}
                    onRemoveSubject={onRemoveSubject}
                    onSubjectChange={onSubjectChange}
                />
            ))}

            <div className="mt-6 space-y-4">
                <Button
                    variant="primary"
                    onClick={onAddSemester}
                    className="w-full"
                >
                    + Add Semester
                </Button>
                {/* <AddSemesterButton onClick={onAddSemester} /> */}

                <Button
                    variant="success"
                    onClick={onCalculate}
                    className="w-full"
                >
                    Calculate GPA
                </Button>
            </div>
        </div>
    );
};

export default SemesterList;