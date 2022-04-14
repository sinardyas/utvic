import React from 'react'

const Button = ({bgColor,textColor, text, ...rest}) => {
  return (
      <button button className={`tabs
      ${textColor ?? 'text-black'} 
      ${bgColor ?? 'bg-yellow-400 '}`}>
          {text}
      </button>
  )
}

export default Button