/* eslint-disable react/prop-types */
export default function TotalCreditsDisplay({ totalCredits }) {
    // Ensure totalCredits is a number before calling toFixed
    const credits = typeof totalCredits === 'number' ? totalCredits : 0;
    
    return (
        <p className="text-sm mt-4">
            Total Credits Across All Semesters: {credits.toFixed(2)}
        </p>
    );
}