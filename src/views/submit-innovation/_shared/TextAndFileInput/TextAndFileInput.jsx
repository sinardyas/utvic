import React, { useState } from 'react'
import FileInput from '../FileInput'
import TextInput from '../TextInput'
import { useMediaQuery } from '@mui/material'

function TextAndFileInput ({
  onChange,
  labelText,
  labelId,
  placeholder,
  ...props
}) {
  const fileState = useState()
  const isDesktop = useMediaQuery('(min-width:768px)')

  const fileInput = (
    <div
      className={'flex flex-wrap flex-col mt-4 md:mt-0 md:flex-row md:flex-nowrap md:space-x-5'}>
      <span className={'font-semibold'}>
        Upload foto pendukung
      </span>
      <FileInput
        labelId={`${labelId}-file`}
        placeholder={'Upload foto'}
        isStyledContainer={false}
        hideLabelInfo={true}
        placeholderClassName={'!text-black md:max-w-[150px] text-ellipsis overflow-hidden whitespace-nowrap'}
        onChange={onChange}
        localStateHandler={fileState}
      />
    </div>
  )

  const textInput = <TextInput
    labelText={labelText}
    labelId={labelId}
    placeholder={placeholder}
    onChange={onChange}
    showInfoIcon
    info={isDesktop ? fileInput : undefined}
    {...props}
  />

  if (isDesktop) {
    return textInput
  }

  return (
    <div>
      {textInput}
      {fileInput}
    </div>
  )
}

export default TextAndFileInput
