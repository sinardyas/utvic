import React from 'react'
import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled'
import { styled } from '@mui/system'
import { Link } from 'react-router-dom'

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

const CustomDivRoot = styled('div')`
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

const sizeMap = {
  large: 'h-[66px]',
  medium: 'h-[54px]',
  small: 'h-[48px]',
}

function LinkButton({ href, ...props }) {
  return (
    <Link to={href} >
      <CustomDivRoot {...props} />
    </Link>
  )
}

const buttonComponentMap = {
  'button': CustomButtonRoot,
  'link': LinkButton,
}

function Button ({
  className,
  backgroundCss = 'bg-red-600',
  colorCss = 'text-white',
  size = 'medium',
  componentType = 'button',
  ...props
}) {
  const heightCss = sizeMap[size] || sizeMap.medium

  return (
    <ButtonUnstyled
      className={`border ${heightCss} ${backgroundCss} font-semibold text-lg ${colorCss} py-3 px-6 rounded-md whitespace-nowrap ${className || ''}`}
      {...props}
      component={buttonComponentMap[componentType] || buttonComponentMap.button}
    />
  )
}

export default Button
