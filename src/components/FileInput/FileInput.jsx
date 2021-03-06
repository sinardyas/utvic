import React, { useState } from 'react'
import Upload from '../../assets/images/upload.png'
import { Label } from '../../views/submit-innovation/_shared/LabelWrapper'
import InfoIcon from '../../views/submit-innovation/_shared/icons/info.png'

function filterProps (props) {
  const {
    containerClassName,
    labelText,
    labelId,
    element,
    extensions,
    file,
    hideLabelInfo,
    showInfoIcon,
    extensionInfo,
    ...restProps
  } = props
  return restProps
}

function FileLabelWrapper ({
  containerClassName,
  labelText,
  labelId,
  required,
  element,
  extensions,
  file,
  hideLabelInfo,
  showInfoIcon,
  extensionInfo,
}) {
  const requiredSign = required ?
    <span className={'text-red-700'}>*</span> :
    <React.Fragment/>

  const labelInfo = file ? '' : 'Belum ada file dipilih'

  return (
    <div className={containerClassName}>
      {
        <div className={'flex justify-between'}>
          <div>
            <Label
              className={`${showInfoIcon ? 'mb-2' : ''}`}
              emptyLabel={!labelText}
              htmlFor={labelId}
            >
              {labelText}
              {requiredSign}
            </Label>
            {
              showInfoIcon &&
              <img className={'inline-block ml-2 w-8 h-8'} src={InfoIcon}
                   alt={'info'}/>
            }
          </div>

          {
            !hideLabelInfo &&
            <span className={'text-gray-500'}>
            {labelInfo}
          </span>
          }
        </div>
      }

      {element}

      {
        (extensionInfo || extensions) &&
        <span className={'text-gray-500 text-sm'}>
          {extensionInfo || '*Upload file dalam format gambar'} {
          extensions &&
          (
            <span
              className={'text-red-600'}
            >
                ( {extensions.join(', ')} )
              </span>
          )
        }
        </span>
      }
    </div>
  )
}

function FileInput ({
  placeholder,
  labelId,
  onChange,
  extensions,
  isStyledContainer = true,
  hideLabelInfo = false,
  placeholderClassName,
  localStateHandler,
  showInfoIcon,
  extensionInfo,
  ...props
}) {
  const internalState = useState()
  const [file, setFile] = localStateHandler || internalState

  const containerClassName = isStyledContainer
    ? 'p-5 bg-[#f2f2f2] rounded-lg border-solid border border-slate-300 box-border'
    : ''

  return (
    <FileLabelWrapper
      file={file}
      labelId={labelId}
      extensions={extensions}
      hideLabelInfo={hideLabelInfo}
      showInfoIcon={showInfoIcon}
      extensionInfo={extensionInfo}
      element={
        <div
          className={`relative w-full ${containerClassName}`}
        >
          <input
            id={labelId}
            className={'absolute h-full left-0 top-0 w-full opacity-0 text-[0px] cursor-pointer'}
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
            <div
              className={`text-gray-400 ${placeholderClassName}`}>
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
