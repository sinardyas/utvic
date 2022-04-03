import React, { useState } from 'react'
import Upload from '../../../../assets/images/upload.png'
import { Label } from '../LabelWrapper'

function filterProps(props) {
  const {
    containerClassName,
    labelText,
    labelId,
    element,
    extensions,
    file,
    ...restProps
  } = props
  return restProps
}

function FileLabelWrapper (props) {
  const {
    containerClassName,
    labelText,
    labelId,
    required,
    element,
    extensions,
    file,
  } = props

  const requiredSign = required ?
    <span className={'text-red-700'}>*</span> :
    <React.Fragment/>

  return (
    <div className={containerClassName}>
      <div className={'flex justify-between'}>
        <Label htmlFor={labelId}>
          {labelText}
          {requiredSign}
        </Label>
        <span className={'text-gray-500'}>
          {
            file ? '' : 'Belum ada file dipilih'
          }
        </span>
      </div>

      {element}

      {
        extensions &&
        <span className={'text-gray-500 text-sm'}>
          *Upload file dalam format gambar ( <span
          className={'text-red-600'}>{extensions.join(', ')}</span> )
        </span>
      }
    </div>
  )
}

function FileInput ({ placeholder, labelId, onChange, extensions, ...props }) {
  const [file, setFile] = useState()

  return (
    <FileLabelWrapper
      file={file}
      extensions={extensions}
      element={
        <div
          className="relative p-5 bg-[#f2f2f2] rounded-lg border-solid border border-slate-300 w-full box-border"
        >
          <input
            id={labelId}
            className={'absolute h-[66px] left-0 top-0 w-full opacity-0 text-[0px] cursor-pointer'}
            type="file"
            onChange={event => {
              const [file] = event.target.files
              setFile(file)
              if (onChange) onChange(event)
            }}
            {...filterProps(props)}
          />
          <div className="flex flex-row items-center space-x-4">
            <img src={Upload} alt="upload-icon" className={'w-5 h-5'}/>
            <div className="flex items-center text-gray-400">
              <span>{file ? file.name : placeholder}</span>
            </div>
          </div>
        </div>
      }
      {...props}
    />
  )
}

export default FileInput
