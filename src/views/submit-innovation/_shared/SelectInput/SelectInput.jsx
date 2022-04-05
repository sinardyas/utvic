import * as React from 'react'
import SelectUnstyled, { selectUnstyledClasses } from '@mui/base/SelectUnstyled'
import OptionUnstyled, { optionUnstyledClasses } from '@mui/base/OptionUnstyled'
import PopperUnstyled from '@mui/base/PopperUnstyled'
import { styled } from '@mui/system'
import LabelWrapper from '../LabelWrapper'

const blue = {
  100: '#DAECFF',
  200: '#99CCF3',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  900: '#003A75',
}

const grey = {
  100: '#E7EBF0',
  200: '#E0E3E7',
  300: '#CDD2D7',
  400: '#B2BAC2',
  500: '#A0AAB4',
  600: '#6F7E8C',
  700: '#3E5060',
  800: '#2D3843',
  900: '#1A2027',
}

const StyledButton = styled('button')(
  () => `
  width: 100%;
  line-height: 1.5;
  color: ${grey[900]};
  background: rgba(125, 125, 125, 0.1);
  border: 0.5px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 20px 20px;

  &:hover {
    border-color: ${grey[900]};
  }

  &:focus {
    outline: 3px solid ${blue[100]};
  }
  box-sizing: border-box;
  text-align: left;

  &.${selectUnstyledClasses.focusVisible} {
    outline: 3px solid ${blue[100]};
  }

  &.${selectUnstyledClasses.expanded} {
    &::after {
      content: '▴';
    }
  }

  &::after {
    content: '▾';
    float: right;
  }
  `,
)

const StyledListbox = styled('ul')(
  () => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 5px;
  margin: 10px 0;
  width: 100%;
  background: #fff;
  border: 1px solid ${grey[300]};
  color: ${grey[900]};
  overflow: auto;
  outline: 0px;
  `,
)

const StyledOption = styled(OptionUnstyled)(
  () => `
  list-style: none;
  padding: 8px;
  border-radius: 0.45em;
  cursor: default;

  &:last-of-type {
    border-bottom: none;
  }

  &.${optionUnstyledClasses.selected} {
    background-color: ${blue[100]};
    color: ${blue[900]};
  }

  &.${optionUnstyledClasses.highlighted} {
    background-color: ${grey[100]};
    color: ${grey[900]};
  }

  &.${optionUnstyledClasses.highlighted}.${optionUnstyledClasses.selected} {
    background-color: ${blue[100]};
    color: ${blue[900]};
  }

  &.${optionUnstyledClasses.disabled} {
    color: ${grey[400]};
  }

  &:hover:not(.${optionUnstyledClasses.disabled}) {
    background-color: ${grey[100]};
    color: ${grey[900]};
  }
  `,
)

const StyledPopper = styled(PopperUnstyled)`
  width: 100%;
  z-index: 1;
  transform: translate(0, 96px) !important;
`

export function transformToOptions (list, idKey, labelKey) {
  if (!list) {
    return null
  }

  return list.map((item) => {
    const id = item[idKey]
    const label = item[labelKey]
    return (
      <SelectInput.Option key={id} value={id}>
        {label}
      </SelectInput.Option>
    )
  })
}

const SelectInput = React.forwardRef(function CustomSelect (props, ref) {
  const components = {
    Root: StyledButton,
    Listbox: StyledListbox,
    Popper: StyledPopper,
    ...props.components,
  }
  const { placeholder, onChange, labelId } = props

  return <LabelWrapper
    containerClassName={'relative'}
    element={
      <SelectUnstyled
        renderValue={(option) => {
          if (option == null) {
            return <span className={'text-gray-400'}>
              {placeholder}
            </span>
          }

          return (
            <span>
              {option.label}
            </span>
          )
        }}
        {...LabelWrapper.filterProps(props)}
        onChange={(value) => {
          if(onChange) onChange({
            target: {
              id: labelId,
              value
            }
          })
        }}
        ref={ref}
        components={components}
      />
    }
    {...props}
  />
})

SelectInput.Option = StyledOption

export default SelectInput
