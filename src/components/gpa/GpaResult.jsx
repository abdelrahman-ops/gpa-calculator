/* eslint-disable react/prop-types */
export default function GpaResult({ cumulativeGpa }) {
  return (
    <div className="mt-4 p-4 bg-blue-100 rounded-lg">
      <h2 className="text-xl font-semibold">Cumulative GPA: {cumulativeGpa}</h2>
    </div>
  );
}