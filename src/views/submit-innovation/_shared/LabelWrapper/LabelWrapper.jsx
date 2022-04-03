import React from 'react'

export function Label ({ className, ...props }) {
  return <label className={`inline-flex mb-4 font-semibold ${className ||
  ''}`} {...props} />
}

const filterProps = (props) => {
  const {
    containerClassName,
    labelText,
    labelId,
    element,
    ...restProps
  } = props

  return restProps
}

function LabelWrapper (props) {
  const {
    containerClassName,
    labelText,
    labelId,
    required,
    element,
  } = props

  const requiredSign = required ?
    <span className={'text-red-700'}>*</span> :
    <React.Fragment/>

  return (
    <div className={containerClassName}>
      <Label htmlFor={labelId}>
        {labelText}
        {requiredSign}
      </Label>
      {element}

      {/*<span className={'text-red-600 text-sm'}>*/}
      {/*  *Upload file dalam format gambar*/}
      {/*</span>*/}
    </div>
  )
}

LabelWrapper.filterProps = filterProps

export default LabelWrapper
