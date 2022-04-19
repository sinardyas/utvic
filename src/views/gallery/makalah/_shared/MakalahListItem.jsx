import React from 'react'
import DownloadIcon from '../../../../assets/images/document-download.png'

function MakalahListItem ({
  ImageUrl, InovationNumber, Color, Judul, Deskripsi,
}) {
  return (
    <div
      className={'flex gap-x-6 py-5 px-4 shadow rounded-xl md:rounded-none border md:border-y-0 md:border-r-0 md:border-l-[2px] md:border-l-amber-300'}
    >
      <img
        className={'w-full max-w-[80px] h-[87px] object-cover rounded-2xl'}
        src={ImageUrl}
        alt={'makalah'}
      />

      <div className={'flex-col flex-1'}>
        <div className={'flex items-center gap-x-4'}>
          <div
            className={'bg-orange-100 p-1 rounded text-yellow-600 font-semibold'}
          >
            {InovationNumber}
          </div>

          <div className={'flex-1'}>
            <div
              className={`h-[30px] w-[30px] ${!Color &&
              'bg-green-500'} rounded`}
              style={{
                backgroundColor: Color,
              }}
            />
          </div>


        </div>

        <div className={'font-semibold'}>
          {Judul}
        </div>

        <div className={'text-gray-500'}>
          {Deskripsi}
        </div>
      </div>

      <button className={'mt-auto md:mt-0 md:mb-auto'}>
        <img
          className={'min-w-[24px] w-[24px] h-[24px]'}
          src={DownloadIcon}
          alt={'download'}
        />
      </button>
    </div>
  )
}

export default MakalahListItem
