import React from 'react';

function Button({ className, backgroundCss = 'bg-red-600', colorCss ='text-white', ...props }) {
    return (
      <button
        className={`border h-[54px] ${backgroundCss} font-semibold text-lg ${colorCss} py-3 px-6 rounded-md whitespace-nowrap ${className || ''}`}
        {...props}
      />
    );
}

export default Button;
