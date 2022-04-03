import React from 'react';

function Button({ className, ...props }) {
    return (
      <button
        className={`border bg-red-600 font-semibold text-lg text-white py-3 px-6 rounded-md ${className || ''}`}
        {...props}
      />
    );
}

export default Button;
