/* eslint-disable react/no-unescaped-entities */
import Card from "../common/Card";

/* eslint-disable react/prop-types */
const GpaResultsPanel = ({ results }) => {
    if (!results) {
      return (
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 text-center">
          <p className="text-blue-800">Enter your grades and credits, then click "Calculate GPA"</p>
        </div>
      );
    }
  
    return (
      <Card title="GPA Results">
        <div className="space-y-6">
          <div className="text-center">
            <p className="text-sm text-gray-500">Cumulative GPA</p>
            <p className="text-4xl font-bold text-indigo-600">
              {results.cumulativeGpa}
            </p>
            <p className="text-sm text-gray-500 mt-1">
              {results.totalCredits} total credit hours
            </p>
          </div>
  
          {results.semesterResults.length > 1 && (
            <div>
              <h4 className="font-medium text-gray-700 mb-2">By Semester</h4>
              <div className="space-y-3">
                {results.semesterResults.map((semester) => (
                  <div key={semester.id} className="flex justify-between items-center">
                    <span className="text-sm">{semester.name}</span>
                    <div className="text-right">
                      <span className="font-medium">{semester.gpa}</span>
                      <span className="text-xs text-gray-500 block">{semester.credits} credits</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
  
          <div className="pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-500">
              Note: GPA is calculated on a 4.0 scale
            </p>
          </div>
        </div>
      </Card>
    );
  };
  
  export default GpaResultsPanel;