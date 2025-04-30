/* eslint-disable react/prop-types */
export default function CalculateButton({ onClick }) {
    return (
        <button
            onClick={onClick}
            className="w-full bg-green-500 text-white p-2 rounded mt-4 hover:bg-green-600"
        >
            Calculate Cumulative GPA
        </button>
    );
}