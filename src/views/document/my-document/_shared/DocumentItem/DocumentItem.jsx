import React, { useState } from 'react'
import MoreIcon from '../../../../../assets/images/more.png'
import { Backdrop } from '@mui/material'
import Dropdown from '../../../../../components/Dropdown/Dropdown'

function DocumentItem ({
  containerClassName,
  background = 'bg-white',
  leftIcon,
  more = false,
  children,
  dropdownMenus,
  fontWeight = '',
}) {
  const [anchorEl, setAnchorEl] = useState(false)

  return (
    <div
      className={`flex p-5 sm:p-8 ${background} gap-x-3 ${containerClassName}`}>
      {
        leftIcon &&
        <img
          className={'min-w-[24px] w-[24px] h-[24px]'}
          src={leftIcon}
          alt={'folder'}
        />
      }
      <div
        className={`flex-1 text-lg leading-6 ${fontWeight} text-gray-900`}
      >
        {children}
      </div>
      {
        more &&
        <button
          onClick={(e) => {
            setAnchorEl(anchorEl ? false : e.currentTarget)
          }}
        >
          <img
            className={'min-w-[24px] w-[24px] h-[24px]'}
            src={MoreIcon}
            alt={'folder'}
          />
        </button>
      }

      {
        dropdownMenus &&
        <Backdrop open={!!anchorEl}>
          <Dropdown
            anchorEl={anchorEl}
            open={!!anchorEl}
            onClose={() => {
              setAnchorEl(false)
            }}
            listboxId={'folder-menu'}
          >
            {
              dropdownMenus.map(
                ({ onItemClick, onClick, key, ...dropdownMenu }, index) => {
                  return (
                    <Dropdown.Item
                      key={key}
                      onClick={(e) => {
                        if (onItemClick) {
                          onItemClick(key, () => setAnchorEl(null))
                        }

                        if (onClick) onClick(e)

                      }}
                      {...dropdownMenu}
                    />
                  )
                })
            }
          </Dropdown>
        </Backdrop>
      }
    </div>
  )
}

export default DocumentItem
