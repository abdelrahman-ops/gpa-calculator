/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Input from '../common/Input';
import Select from '../common/Select';
import Button from '../common/Button';

const SubjectForm = ({ subject, onChange, onRemove }) => {
  const handleChange = (field, value) => {
    onChange({ [field]: value });
  };

  const handleCreditChange = (e) => {
    const value = e.target.value;
    // Allow numbers and .5 increments
    if (/^\d*\.?[05]?$/.test(value) || value === '') {
      onChange({ credit: value });
    }
  };

  return (
    <div className="mb-4 p-4 bg-gray-50 rounded-lg relative group">
      <button
        onClick={onRemove}
        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
      >
        &times;
      </button>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-1">
          <Input
            label="Subject Name"
            value={subject.name}
            onChange={(e) => handleChange('name', e.target.value)}
            placeholder="e.g. Mathematics"
          />
        </div>
        
        <div>
          <Select
            label="Grade"
            value={subject.grade}
            onChange={(e) => handleChange('grade', e.target.value)}
            options={[
              { value: '', label: 'Select grade' },
              { value: 'A+', label: 'A+' },
              { value: 'A', label: 'A' },
              { value: 'A-', label: 'A-' },
              { value: 'B+', label: 'B+' },
              { value: 'B', label: 'B' },
              { value: 'B-', label: 'B-' },
              { value: 'C+', label: 'C+' },
              { value: 'C', label: 'C' },
              { value: 'C-', label: 'C-' },
              { value: 'D+', label: 'D+' },
              { value: 'D', label: 'D' },
              { value: 'F', label: 'F' }
            ]}
          />
        </div>
        
        <div>
          <Input
            label="Credit Hours"
            type="number"
            min="0"
            step="1"
            value={subject.credit}
            onChange={handleCreditChange}
            placeholder="e.g. 3.0"
          />
        </div>
      </div>
    </div>
  );
};

export default SubjectForm;