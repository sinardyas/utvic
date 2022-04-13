import React from 'react'

export default function Card(leftIcon, Title, RightIcon, slot) {
    return (
        <div className='continer bg-white rounded shadow-md text-2xl'>
            <div className="flex gap-4">
                <div className="w-full flex bg-yellow-400 rounded-md p-4 justify-between gap-3 text-blak">
                    <div className="flex">
                        <img src={leftIcon} alt="" className='w-10 h-10 p-3 bg-black text-white rounded-full' />
                        <div className="ml-4 text-2xl font-semibold">{Title}</div>
                    </div>

                    <button className='flex p-3 w-10 h-10 justify-center items-center rounded-full bg-black text-white'>
                        {RightIcon}
                    </button>
                </div>
            </div>
            <div className="px-4 py-4">

                { slot }

            </div>
        </div>
  )
}
