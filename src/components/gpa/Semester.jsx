import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../common/Button';
import Card from '../common/Card';
import SubjectForm from './SubjectForm';
import SemesterHeader from './SemesterHeader';

const Semester = ({ 
  semester = { 
    id: Date.now(), 
    name: 'New Semester', 
    subjects: [] 
  }, 
  onUpdate = () => {}, 
  onRemove = () => {}, 
  onAddSubject = () => {}, 
  onRemoveSubject = () => {}, 
  onSubjectChange = () => {} 
}) => {
  const [isExpanded, setIsExpanded] = useState(true);

  // Ensure semester has required properties
  const safeSemester = {
    id: semester?.id || Date.now(),
    name: semester?.name || 'New Semester',
    subjects: semester?.subjects?.map(subject => ({
      id: subject?.id || Date.now(),
      name: subject?.name || '',
      grade: subject?.grade || '',
      credit: subject?.credit || ''
    })) || []
  };

  return (
    <Card className="mb-6">
      <SemesterHeader
        name={safeSemester.name}
        isExpanded={isExpanded}
        onToggle={() => setIsExpanded(!isExpanded)}
        onNameChange={(name) => onUpdate(safeSemester.id, { name })}
        onRemove={() => onRemove(safeSemester.id)}
      />

      {isExpanded && (
        <div className="mt-4">
          {safeSemester.subjects.map((subject) => (
            <SubjectForm
              key={subject.id}
              subject={subject}
              onChange={(updatedData) => onSubjectChange(safeSemester.id, subject.id, updatedData)}
              onRemove={() => onRemoveSubject(safeSemester.id, subject.id)}
            />
          ))}

          <div className="flex justify-between mt-4">
            <Button
              variant="secondary"
              onClick={() => onAddSubject(safeSemester.id)}
            >
              + Add Subject
            </Button>

            {safeSemester.subjects.length > 1 && (
              <span className="text-sm text-gray-500 self-center">
                {safeSemester.subjects.length} subjects
              </span>
            )}
          </div>
        </div>
      )}
    </Card>
  );
};

Semester.propTypes = {
  semester: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string,
    subjects: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        name: PropTypes.string,
        grade: PropTypes.string,
        credit: PropTypes.string
      })
    )
  }),
  onUpdate: PropTypes.func,
  onRemove: PropTypes.func,
  onAddSubject: PropTypes.func,
  onRemoveSubject: PropTypes.func,
  onSubjectChange: PropTypes.func
};

export default Semester;