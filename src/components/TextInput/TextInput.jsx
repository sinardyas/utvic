import React from 'react'
import InputUnstyled from '@mui/base/InputUnstyled'
import { styled } from '@mui/system'
import LabelWrapper from '../../views/submit-innovation/_shared/LabelWrapper'

const blue = {
  100: '#DAECFF',
  200: '#80BFFF',
  400: '#3399FF',
  600: '#0072E5',
}

const grey = {
  50: '#F3F6F9',
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

const StyledInputElement = styled('input')(
  () => `
  width: 100%;
  line-height: 1.5;
  color: ${grey[900]};
  background: #f2f2f2;

  &:focus {
    outline: none;
  }
`,
)

const StyledRootElement = styled('div')(
  () => `
  display: flex;
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
`,
)
const StyledTextAreaElement = styled('textarea')(
  () => `
  width: 100%;
  line-height: 1.5;
  color: ${grey[900]};
  background: #f2f2f2;

  &:focus {
    outline: none;
  }
`,
)

const TextInput = React.forwardRef(function CustomInput (props, ref) {
  const { labelId, componentsProps } = props

  const { root, ...restComponentProps} = componentsProps || {}

  return (
    <LabelWrapper
      element={
        <InputUnstyled
          components={{
            Input: StyledInputElement,
            Textarea: StyledTextAreaElement,
            Root: StyledRootElement,
          }}
          id={labelId}
          {...LabelWrapper.filterProps(props)}
          componentsProps={{
            root: {
              className: 'space-x-3',
              ...root,
            },
            ...restComponentProps
          }}
          ref={ref}
        />
      }
      {...props}
    />
  )
})

export default TextInput
