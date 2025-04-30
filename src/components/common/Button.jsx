/* eslint-disable react/prop-types */
const Button = ({ children, onClick, variant = 'primary', className = '', ...props }) => {
    const variants = {
        primary: 'bg-indigo-600 hover:bg-indigo-700 text-white',
        secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800',
        success: 'bg-green-600 hover:bg-green-700 text-white',
        danger: 'bg-red-600 hover:bg-red-700 text-white'
    };

    return (
    <button
        className={`px-4 py-2 rounded-md font-medium transition-colors ${variants[variant]} ${className}`}
        onClick={onClick}
        {...props}
    >
        {children}
    </button>
    );
};

export default Button;