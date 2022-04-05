import React from 'react';

function Button({ className, ...props }) {
    return (
      <button
        className={`border h-[54px] bg-red-600 font-semibold text-lg text-white py-3 px-6 rounded-md whitespace-nowrap ${className || ''}`}
        {...props}
      />
    );
}

export default Button;
