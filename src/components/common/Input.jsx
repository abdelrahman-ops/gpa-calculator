/* eslint-disable react/prop-types */
const Input = ({ label, type = 'text', ...props }) => {
    return (
      <div>
        {label && (
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {label}
          </label>
        )}
        <input
          type={type}
          className="w-full px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          {...props}
        />
      </div>
    );
  };
  
  export default Input;