import React from 'react'
import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled'
import { styled } from '@mui/system'

const CustomButtonRoot = styled('button')`
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &.${buttonUnstyledClasses.active} {
    opacity: 1;
  }

  &.${buttonUnstyledClasses.focusVisible} {
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
    outline: none;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

function Button ({
  className,
  backgroundCss = 'bg-red-600',
  colorCss = 'text-white',
  ...props
}) {
  return (
    <ButtonUnstyled
      className={`border h-[54px] ${backgroundCss} font-semibold text-lg ${colorCss} py-3 px-6 rounded-md whitespace-nowrap ${className || ''}`}
      {...props}
      component={CustomButtonRoot}
    />
  )
}

export default Button
