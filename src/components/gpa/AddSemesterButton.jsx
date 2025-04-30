/* eslint-disable react/prop-types */
export default function AddSemesterButton({ onClick }) {
    return (
        <button
            onClick={onClick}
            className="w-full bg-purple-500 text-white p-2 rounded hover:bg-purple-600"
        >
            Add Another Semester
        </button>
    );
}