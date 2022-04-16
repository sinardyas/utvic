import React from 'react'
import InfoIcon from '../../_shared/icons/info.png'

export function Label ({ className, emptyLabel, ...props }) {
  const defaultClassName = emptyLabel ? '' : 'inline-flex mb-4 font-semibold'

  return <label className={`${defaultClassName} ${className ||
  ''}`} {...props} />
}

const filterProps = (props) => {
  const {
    containerClassName,
    labelText,
    labelId,
    element,
    showInfoIcon,
    info,
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
    showInfoIcon,
    info
  } = props

  const requiredSign = required ?
    <span className={'text-red-700'}>*</span> :
    <React.Fragment/>

  return (
    <div className={containerClassName}>
      <div className={'flex justify-between'}>
        <div>
          <Label className={`${showInfoIcon ? 'mb-2' : ''}`} htmlFor={labelId}>
            {labelText}
            {requiredSign}
          </Label>
          {
            showInfoIcon &&
            <img className={'inline-block ml-2 w-8 h-8'} src={InfoIcon} alt={'info'}/>
          }
        </div>

        {info && info}
      </div>
      {element}

      {/*<span className={'text-red-600 text-sm'}>*/}
      {/*  *Upload file dalam format gambar*/}
      {/*</span>*/}
    </div>
  )
}

LabelWrapper.filterProps = filterProps

export default LabelWrapper
