/* eslint-disable react/prop-types */
// import React from 'react';

function GpaResult({ cumulativeGpa }) {
  return (
    <div className="mt-4">
      <h2 className="text-xl font-bold">Your Cumulative GPA: {cumulativeGpa}</h2>
    </div>
  );
}

export default GpaResult;
